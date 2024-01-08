# remove old data? maybe is no need to rm
rm -rf ./dist
echo "rm old dist finished!"
echo "start building..."
cd YiMingBlog
npm run docs:build
cd ../
# back to root
python render_ob_img.py
echo "render finished!"