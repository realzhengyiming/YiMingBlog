# 使用 Python 3.10 镜像作为基础
FROM node:14-alpine

RUN apk add --no-cache bash
RUN mkdir -p /app

# 设置工作目录
WORKDIR /app

# 安装 Vitepress 依赖
RUN npm add -D vitepress

# 暴露端口（根据你的需求进行调整）
EXPOSE 5173

# 启动应用
CMD ["npm", "run", "docs:dev"]
