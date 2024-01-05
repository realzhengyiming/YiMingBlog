from flask import Flask, request
import subprocess

app = Flask(__name__)


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
