sh kill_80.sh
cd YiMingBlog
nohup npm run docs:preview > ../nohup.out 2>&1 &
echo "service restart done!"  # 启动 start