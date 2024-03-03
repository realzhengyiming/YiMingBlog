<template>
    <div class="hand_content">
      <div v-if="!started" class="scrambled-text">
        {{ scrambledText }}
      </div>
      <div v-else class="typed-text">
        <span v-for="(char, index) in typedText" :key="index">{{ char }}</span>
      </div>
      <button @click="startAnimation">开始动画</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        originalText: "这是一段文字, 这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,这是一段文字,",
        scrambledText: "",
        typedText: "",
        started: false
      };
    },
    methods: {
      scrambleText(text) {
        const chars = text.split('');
        for (let i = chars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        return chars.join('');
      },
      startAnimation() {
        // 这里省略动画代码：将文字聚集成球体的效果
        this.typedText = "";
        this.started = true;
        this.animateTyping(this.originalText, 0);
      },
      animateTyping(text, index) {
        if (index < text.length) {
          this.typedText += text[index];
          setTimeout(() => {
            this.animateTyping(text, index + 1);
          }, 200); // 设置打字速度（毫秒）
        } else {
          this.started = false; // 当全部显示完时重置状态
        }
      }
    },
    created() {
      this.scrambledText = this.scrambleText(this.originalText);
    }
  };
  </script>
  
  <style>
  .hand_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }
  
  .scrambled-text {
    font-size: 2em;
  }
  
  .typed-text {
    font-size: 2em;
  }
  
  .button {
    margin-top: 20px;
  }
  </style>