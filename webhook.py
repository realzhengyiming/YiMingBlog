import hashlib
import hmac
import os
import shutil
import subprocess

from flask import Flask, request, abort

current_path = os.path.abspath(__file__)
folder_path = os.path.dirname(current_path)

app = Flask(__name__)


@app.before_request
def verify_signature():
    signature = request.headers.get('X-Hub-Signature-256')
    if not signature:
        abort(400, 'No signature found')

    secret = os.getenv("HOOKSERCERT")  # 在这里替换为你在 GitHub 上设置的密钥
    payload = request.get_data()

    # 根据签名算法类型计算签名
    algorithm, signature = signature.split('=')
    if algorithm == 'sha256':
        calculated_signature = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()
    else:
        abort(400, 'Invalid signature algorithm')

    # 比较计算得到的签名和传入的签名是否相等
    if not hmac.compare_digest(calculated_signature, signature):
        abort(401, 'Signature verification failed')
    else:
        print("github hook request!")


@app.route('/', methods=['GET'])
def health_check():
    return "i'm healthy!"


@app.route('/webhook', methods=['POST'])
def handle_webhook():
    print("head", request.headers)
    # 指定仓库路径
    repo_path = 'YiMingBlog'

    # 执行 Git 命令拉取最新代码
    shutil.rmtree("./dist")  # 删除后再执行
    subprocess.run(['git', '-C', repo_path, 'pull'])
    # subprocess.run(['bash', os.path.join(folder_path, "kill_80.sh")])
    # subprocess.run(['bash', os.path.join(folder_path, "start_build.sh")])
    # 执行重新拉取和发布的命令
    subprocess.run(['bash', os.path.join(folder_path, "start_preview.sh")])  # 构建放到了远程构建

    return 'Webhook received'


if __name__ == '__main__':
    preview_secret = os.getenv("HOOKSERCERT", "")  # 在这里替换为你在 GitHub 上设置的密钥
    if not preview_secret:
        print("please export HOOKSERCERT= first！")
    else:
        app.run(host='0.0.0.0', port=3000)
