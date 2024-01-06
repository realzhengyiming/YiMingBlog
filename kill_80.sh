#!/bin/bash

# 查找占用 80 端口的进程
PID=$(lsof -t -i :80)

if [ -z "$PID" ]; then
  echo "没有找到在 80 端口运行的进程。"
else
  # 终止找到的进程
  echo "找到运行在 80 端口的进程 PID: $PID"
  kill -9 $PID
  echo "进程已终止。"
fi
