# remove old data? maybe is no need to rm
rm -rf ./dist

cd YiMingBlog
npm run docs:build
cd ../
# back to root
python render_ob_img.py