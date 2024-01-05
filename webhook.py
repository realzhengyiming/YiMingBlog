from flask import Flask, request
import subprocess

app = Flask(__name__)


@app.route('/', methods=['GET'])
def health_check():
    return "i'm healthy!"


@app.route('/webhook', methods=['POST'])
def handle_webhook():
    data = request.json
    print("data", data)
    if data == "TPaMhbDiM5fG4BaaFmXG":
        print("yes you are right!")

    # 指定仓库路径
    repo_path = './YiMingBlog'

    # 执行 Git 命令拉取最新代码
    subprocess.run(['git', '-C', repo_path, 'pull'])

    return 'Webhook received'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
    # new
