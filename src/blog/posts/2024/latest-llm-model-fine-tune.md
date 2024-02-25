---
title: 主流llm大模型微调小结
datetime: 2024-02-25
time: 17:00
description: llm大模型微调总结
navbar: true
sidebar: true
footer: true
date: 2024-02-25
author: Yi Ming
category: Document
next: true
tags:
  - 深度学习
---

## 引言
llm大模型目前比较火的两个垂直领域应用的技术路线: PEFT(参数有效微调)和RAG(检索增强生成). 目前这两个方向按实用性来说,确实RAG能以更低的成本和更快的速度应用起来.   
但是**微调训练**依然是垂直领域运用的很重要的一个方向, 并且他的增强和RAG还可以互相促进.
下文就以简单的身份微调作为例子, 简单实践下llm微调.

---

## 大微调技术路线

### SFT (有监督微调)  
简单的说就是**传统全参数微调**, 特点就是, 标记数据中将输入数据映射到期望的输出去. 
计算成本低于预训练(从训练数据的量来说, 但是对于大模型来说,这个量依然很大)
例子:
+ ImageNet数据集预训练后, 通过较少的数据集迁移到其他主题的数据集上的图像识别模型
+ stable diffusion 的dreambooth微调(全参)
+ llm fine-tune (比如bert 一般就是基于这种方式全参微调)
  
### PEFT (参数有效微调)  
旨在减少在微调过程中需要更新的参数数量, 通常是在微调的时候固定模型的一部分参数, 只更新一部分参数, 或者在原模型中增加一个可调的小型网络来对模型进行微调.
例子:
+ Prefix Tuning
- ptuning
- ptuning v2
- LoRA
- stable diffusion 中的 text-inversion 、 hyperNetwork 、lora等技术
- ...
  
### RLHF (人类反馈的强化学习)  
chatgpt中用到的一种基于强化学习方法的技术. 
激励模型训练，使语言模型补全与人工标签员的偏好保持一致。类似于, 水平高的人类围棋手就能够训练出水平高的围棋选手一样. rlhf也是, 通过人类对生成结果的偏好选择进行反馈, 然后让llm能够生成更多人类偏好的内容.
 例子:
- chatgpt 重要的微调流程


## 目前比较主流的PEFT微调
目前的PEFT微调方法也还在不停的更新中, 不过截止到此文编写只是, lora应该是比较主流的. 对于llm大模型, 还有ptuning v2 

### LoRA微调  
LoRA通过添加一个低秩线性适应层到原有模型，冻结原模型权重, 只对新增加的低秩矩阵进行微调，大大降低了微调的复杂度。lora微调的结构图如下, 它有效的原因是模型往往是过参数化的, 大部分的任务只需要改动少量权重(和对应新任务相关的权重) 就应该可以有效果. LoRA 不会改变层的所有组件中的权重矩阵 W，而是创建两个较小的矩阵 A 和 B，其乘积大致表示对 W 的修改。适应可以在数学上表示为 Y = W+AB. 通过微调AB就可以让模型适配新的任务.

![](pic/lora微调注入结构.png)

### QLoRA
QLoRA是 LoRA 的扩展版本，它的工作原理是将预训练LLM的权重参数的精度量化为 4 位精度。通常，训练模型的参数以 32 位格式存储，但 QLoRA 将它们压缩为 4 位格式。这减少了 LLM的内存占用，从而可以在单个 GPU 上对其进行微调。这种方法显著减少了内存占用，使得在功能较弱的硬件（包括消费类 GPU）上运行LLM模型成为可能。
![](pic/对比lora-qlora.png)

### LoRA 与QLoRA的对比
LoRA优点:  
- 允许高效的模型微调，只需要更新模型中的小部分参数。  
- 提供了参数扩展的灵活性，而不需要大规模改动原有的权重。  
LoRA缺点:  
- 相对于量化版本，存储和计算资源需求更高。  
- 对于资源有限的环境来说，可能不如量化方法高效。  
QLoRA优点:  
- 通过量化减少了模型的内存占用和计算资源使用。  
- 提高了模型在资源受限设备上的适用性和能效。  
QLoRA缺点:  
- 量化可能会引起模型精度的损失，尤其是在低比特宽度量化时。  
- 需要仔细调优量化级别，以及可能在某些硬件上不提供性能优势。
- 并且QLoRA由于采用了低精度, 训练难度也会大一些


### ptuning v2 
国外目前好像用得比较少,  主流还是LoRA系列的. 相比于ptuning 增加了注入的层数, 让ptuning在参数量10b一下的模型也能达到还不错的效果.

## llm LoRA 训练
+ 可以参考不同的模型的各自训练微调的说明
+ huggingface PEFT库
+ 带Webui的 llama-factory 体验还可以 [hiyouga/LLaMA-Factory: Easy-to-use LLM fine-tuning framework (LLaMA, BLOOM, Mistral, Baichuan, Qwen, ChatGLM) (github.com)](https://github.com/hiyouga/LLaMA-Factory)
+ etc...

## 模型微调的问题

最大的问题, 硬件资源不足, 硬件的显存依赖, 一直是运行/训练大模型的切实痛点. 一般fp16纯推理, 24G显存最大也就运行7B参数量的模型。而7B原生的性能就没法和更大参数量的模型对比. 而全参微调7B也需要至少3x24G.  而消费级显卡, 大多12 -16 -24G, 价格也已经超级高了. 增加了现阶段实验大模型微调的成本.

所以目前微调技术会从SFT--> PEFT发展. 往着降低成本, 减少微调时间, 加速实验,加速产出的方向走. 这也是为什么现阶段RAG路线也是个不错的选择. 不过, 相信不远的将来, 模型微调的技术一定也会进一步降低微调的成本, 这样人人可以方便简单的在普通设备上进行微调和推理, 这样可就太好了,哈哈哈. 


>[QLoRA: Efficient Finetuning of Quantized LLMs](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjG6PXh4MaEAxUhlK8BHSTHDkUQFnoECAYQAQ&url=https%3A%2F%2Farxiv.org%2Fabs%2F2305.14314&usg=AOvVaw0DPZGS_zRJAyr-clb7RXRc&opi=89978449)


