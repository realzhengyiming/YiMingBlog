---
title: Ollama本地推理&文本标题生成
datetime: 2024-02-17
time: 23:26
description: Ollama's Local Inference & Summary Generation Capability; ollama本地推理和obsidian文章标题生成
navbar: true
sidebar: true
footer: true
date: 2024-02-17
author: Yi Ming
category: Document
next: true
tags:
  - 深度学习
  - 自然语言处理
  - NLP
  - 文章摘要生成
---
## 引言 

前段时间编写了“闪念胶囊”的ios快捷指令脚本,功能是方便我随时通过敲击手机快速记录自己的灵感, 然后写入到icloud的obsidian灵感笔记区中.这样灵感就可以手机和电脑都同步了. 但是当时记录的灵感为了快速为主, 所以markdown文件的标题都是时间戳, 这样会带来一个问题, 那就是哪怕同步到了电脑上, 用电脑浏览的时候,未点开前也是一连串的时间序列, 不能方便的进行灵感的整理和归档, 不利于整理, 那和没记录下来就没差别了,这不是我想要的效果.   
所以我需要一个**本地自动生成标题**的功能.

---

## 需求分析  

### ~~直接闪念的时候就输入标题~~
闪念的时候, 还要费脑子总结概括, 这样容易让灵感飘走, 虽然也算能消灭掉这个需求, 但是场景上给“用户“增加了使用成本, 让记录灵感变得更难受, 不自然, 不舒服, 那久而久之就不想用这种途径记录灵感了.  这样的产品自己都不会想用😟

### 后期生成标题  
所以“闪念胶囊”记录的灵感, 最终还是决定采用后期再生成的方案, 毕竟自己突然冒出来的灵感, 确实自己也不一定能总结好.类似数仓的分层,  ods层输入的时候,就不应该有太多的主题的约束和限制. 所以后期再生成是比较适合这个场景的

## 方案调研  
文章摘要/标题生成nlp中有好几种方案, 有需要自己微调的方案, 有不需要微调的方案.  

**微调方案**:  
简单的如微调bert-base-chinese模型, 以用来微调成解决一些具体的文本任务如, 分类, 概括摘要,   
文章摘,命名实体识别, 关系抽取等.  
对bert微调的好处就是, bert相较于现在的大模型, 运行资源小一些. 但是微调的成本依然不低. 还需要准备足够的数据进行训练. 

**不用微调的方案**:   
目前的开源llm大模型大多已经对这些常用的自然语言任务做了指令的微调. 所以, 已经可以直接拿来用了. 对于做文本摘要生成/标题生成, 这个任务. 所需要的参数量不用太大就可以完成. 并且出于个人隐私的考虑(灵感很隐私的), 并且一般灵感的文本长度不会太长(杀鸡焉用牛刀),所以最终我是采用了本地运行开源llm大模型的来实现这个功能.    

此处最终采用了本地部署运行大模型的方法, 由于是mac系统, 所以我使用[ollama](https://github.com/ollama/ollama) 来本地运行模型, 确实很方便够用. 

## 模型选择  

ollama主流的效果比较好的开源llm模型基本都有, 默认是llama2. 本地主要是中文, 所以我对比了qwen(阿里千问), llama2-chinses, mistral 等7b参数量以内的中文模型, ollama也支持运行自定义模型, 我这边经过测试, 发现qwen 4b / 7b就很够用.  
```shell
ollama pull qwen:4b  # 拉取所需要的模型
ollama pull qwen:7b
```

ollama是以服务的形式运行, 所以调用起来也很灵活, 也支持流式调用.
```python
data = {
        "model": "qwen:7b",
        "prompt": prompt,
        "stream": False
    }
    response = requests.post(url, data=json.dumps(data), stream=True, headers={'Content-type': 'application/json'})
json.loads(response.text)

```

我这儿经过了对比7b的效果略好于4b, 但是速度上参数量小的推理会快一些.  测试过程中也遇到了大语言模型问答时会出现的一个很有意思的问题,  就是大语言模型在完成指定任务的时候, 很容易受到下文文中`指令`的干扰. 
比如:
```python
prompt = """
请帮我把下文概括成标题:


我的需求是这样的, 比如一个文件夹下有很多的文章, A文标题叫做“10大科技公司”, 然后A文章正文 提到了“小米公司”, 然后B文章标题是“小米公司简介”, 然后我希望能够自动识别并且产生B文章应该 属于A文章的关系. 类似这种关系解析, ,产生关系图的需求, 我应该怎么做
"""

```

类似这种任务, 有点像是sql注入. 很容易会让大语言模型开始对`我该怎么做` 做回答,忘记了前文的让他生成标题的任务. 这个promp我试了很多个模型, 包括gpt4也会有**命令混淆**或**指令覆盖**这样的情况. 

**命令混淆**或**指令覆盖**解决方案:  
+ 用特定的结构/格式包裹 `待处理文本` (参数量大一些的语言模型, 基本加上这一步就没问题了)
+ 以特定的语言格式对模型进行微调(如固定以###system,   ###user 某种格式进行微调)
+ 结尾再次强调任务(参数量小的模型, 加上这个就还可以, 解决了qwen4b没法处理的情况)

经过测试, 发现用特定格式和结尾强调的prompt的形式, 一个qwen 4b 7b就可以正常的使用了. 而qwen小于4b的模型测试后, 效果也不太行,  这种情况就是模型能力的问题. 最终采用了qwen4b的方案来做这个功能.

## 组合进obsidian  
之前我写的快捷指令就是通过把文本写入到icloud的obsidian特定文件夹, 起到同步的作用. 所以我只需要再电脑上写一个脚本定期扫描我存放灵感的文件夹, 遇到就生成新的标题就可以完成这个任务. 

obsidian安装`shell commands`插件, 然后配置好python轮训脚本即可.
auto_generate_title.py 
```python
import os
import requests
from tqdm import tqdm
import json

url = "http://localhost:11434/api/generate"

def combine_prompt(prompt):
    prompt = prompt.replace(" ", "").replace("\n", "")
    output_prompt = f"""     
    ```
    {prompt}
    ```

    概括上文, 直接生成标题给我：
    """
    return output_prompt

def make_title(prompt, data=None):
    if data is None:
        data = {
        "model": "qwen:7b",
        "prompt": prompt,
        "stream": False
    }
    response = requests.post(url, data=json.dumps(data), stream=True, headers={'Content-type': 'application/json'})
    return json.loads(response.text)

def clean_content(content):
    return content.strip("\n").strip('"').replace(" ", "").replace("/", "")

import time
# 便利轮训新文件
while True:
    dir_path = "./00灵感"
    need_rename = [i for i in os.listdir(dir_path) if i.find(".md") != -1 and len(i.split(" ")) == 2]
    print(f"需要处理: {len(need_rename)}")

    for i in tqdm(need_rename):
        ori_filename = i
        ori_path = os.path.join(dir_path, i)
        with open(ori_path) as file:
            content = file.read()
        
        clean_prompt = clean_content(content)
        temp = combine_prompt(clean_prompt)
    
        json_content = make_title(temp)
        clean_text = clean_content(json_content.get("response"))

        new_filename = clean_text + " " + ori_filename
        new_path = os.path.join(dir_path, new_filename)
        os.rename(ori_path, new_path)
    print("休眠中")
    time.sleep(60)  # 1 min scan

```

## 效果展示 
下图为生成后的灵感文本的效果展示:  
时间戳形式的灵感文件有了标题, 这样管理起来和后期回看就很方便了.
![](pic/本地部署&生成标题.png)

## 总结思考

如果是业务上类似的需求是要对模型做微调为好, 并且应该进行模型的量化和部署操作, 这样可以尽可能的优化速度和减少资源的占用.  

ollama作为客户端的, 本身也是用的量化后或者gguf格式的模型, 有一定的加速, 但是目前推理速度还是太慢了, 期待以后小模型或者硬件成本能够进一步降低, 这样大家都可以很方便的把ai整合入自己生活习惯中去. 

后期的笔记文档管理的想法:
结合nlp的话, 后期还希望能够自动的对我的文档进行分析, 并且创建好他们之间的关系, 自动帮我把他们之间的逻辑关系创建好. 这样记录后,电脑整理, 我回看就可以了, 头脑风暴或者是后续的笔记记录自动产生新的联系就很好了. 可能需要生成主题词(三元组), 然后方便进行自动归档和建立联系. 建立图结构的联系. 

