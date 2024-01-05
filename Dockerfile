# 使用 Python 3.10 镜像作为基础
FROM python:3.10

# 安装系统依赖
RUN apt-get update && apt-get install -y curl

# 安装 Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# 设置工作目录
WORKDIR /app

# 复制项目文件到容器中
# 设置工作目录

# 挂载当前目录的 YiMing 文件夹到容器中的 /app 目录
VOLUME ./YiMingBlog /app
# 安装 Node.js 依赖
RUN npm install

# 安装 Vitepress 依赖
RUN npm install -g vitepress

# 暴露端口（根据你的需求进行调整）
EXPOSE 5173

# 启动应用
CMD ["npm", "run", "docs:dev"]
