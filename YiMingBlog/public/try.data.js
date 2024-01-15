// example.data.js
const fs = require('fs');
const path = require('path');


// 获取文件创建时间
function getCreationTime(filePath) {
    const stats = fs.statSync(filePath);
    console.info(stats)
    // return stats.birthtime;
    return stats.birthtime;
}

// 排序函数
function sortByCreationTime(filePaths) {
    return filePaths.sort((a, b) => {
        return getCreationTime(a) - getCreationTime(b);
    });
}


function getFilesInDir(dir, ext, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getFilesInDir(filePath, ext, fileList);
        } else if (stat.isFile() && path.extname(file) === ext) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

// 使用方法：提供要搜索的目录和扩展名（在本例中为.md）
const mdFiles = getFilesInDir('./public', '.md');
let sort_md_files = sortByCreationTime(mdFiles);

// sort_md_files = sort_md_files.filter(filePath => filePath !== 'public/post.md');
// sort_md_files = sort_md_files.filter(filePath => !filePath.includes(['汇总页', "index"]));
let keywords = ['汇总页', 'index', "public/post.md"];
sort_md_files = sort_md_files.filter(filePath => !keywords.some(keyword => filePath.includes(keyword)));

let files_birthtime = sort_md_files.map(filePath => getCreationTime(filePath));

sort_md_files = sort_md_files.map(filePath => filePath.replace('public', ''));
sort_md_files = sort_md_files.map(filePath => filePath.replace('.md', ''));

let file_names = sort_md_files.map(filePath => path.basename(filePath, path.extname(filePath)));
let result = sort_md_files.map((item, index) => [item, files_birthtime[index], file_names[index]]);

// console.log(mdFiles);

export default {
    load() {
        return {
            latest_blogs: result
        }
    }
}