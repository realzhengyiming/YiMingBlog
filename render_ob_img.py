import os
import re
import multiprocessing
from tqdm import tqdm
import shutil

html_list = []


def copy_files(source_dir, target_dir):
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
    for file_name in os.listdir(source_dir):
        source_file = os.path.join(source_dir, file_name)
        target_file = os.path.join(target_dir, file_name)
        if os.path.isfile(source_file):
            shutil.copy2(source_file, target_file)
    print("复制文件执行完毕")


def process_html_file(file_path):
    new_lines = []
    with open(file_path, 'r') as f:
        lines = f.readlines()
        for line in lines:
            new_line = re.sub(r'!\[\[(.*?)\]\]', r'<img src="/static/\1" />', line)
            new_lines.append(new_line)

    with open(file_path, 'w') as f:
        f.writelines(new_lines)


def traverse_directory(directory):
    for root, dirs, files in os.walk(directory):
        if 'static' in dirs:
            dirs.remove('static')
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                html_list.append(file_path)


def main(directory):
    traverse_directory(directory)

    pool = multiprocessing.Pool(processes=multiprocessing.cpu_count())
    with tqdm(total=len(html_list)) as pbar:
        for html_file in html_list:
            pool.apply_async(process_html_file, (html_file,))
            pbar.update(1)

    pool.close()
    pool.join()


if __name__ == '__main__':
    directory = "./dist"
    source_folder = "./YiMingBlog/static"

    main(directory)
    copy_files(source_folder, os.path.join(directory, "static"))

