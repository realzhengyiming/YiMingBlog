<template>
  <div :style="mainDivStyles" @click="changeToWalk">
    <div id="baby_plum" :class="['baby_plum_anim', currentAnimation]" :style="babyPlumStyles" @mouseover="changeToHello"
      @mouseout="resetAnimation" @animationend="resetAnimation" @transitionend="handleTransitionEnd">
    </div>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      isWalking: false,
      isSayingHello: false,
      hasLeft: false,
      isClick: false,
      targetPosition: { x: 100.484, y: 200.938 } // 结束动画后的目标位置  
    };
  },
  computed: {
    currentAnimation() {
      if (this.isSayingHello) {
        return 'baby_plum_anm_HelloLoop';
      } else if (this.isWalking && this.isClick) {
        return 'baby_plum_anm_Attack1';
      } else {
        return 'baby_plum_anm_Idle';
      }
    },
    mainDivStyles: function () {
      return {
        zIndex: 1000,
        position: 'absolute',
        left: '0px',
        top: '0px',
        transform: `translate(${this.targetPosition.x}px, ${this.targetPosition.y}px)`,
        transition: this.isWalking ? 'transform 1133.333333ms' : 'none' //在行走状态下添加过渡动画效果
      }
    },
    babyPlumStyles() {
      return {
        position: 'absolute',
        left: '0px',
        top: '0px',
      }
    }
  },
  methods: {
    changeToHello() {
      if (!this.isWalking) { // 如果当前不是行走状态，则切换到参拜状态
        this.isSayingHello = true;
        this.hasLeft = false;
        this.isWalking = false;
      }
    },
    resetAnimation() {
      if (this.isSayingHello && !this.hasLeft) { // 只有在hello状态且鼠标未离开时才切换到静息状态
        this.isSayingHello = false;
        this.hasLeft = false;
      } else if (this.isWalking) { // 如果当前在行走状态结束，则切换到静息状态
        console.log("行走切换");
        this.isWalking = false;
        this.isSayingHello = false;
        this.hasLeft = true;

      }
    },
    changeToWalk() {
      if (!this.isWalking) {
        this.isSayingHello = false;
        this.isWalking = true;
        this.targetPosition.x = Math.random() * window.innerWidth - 128 / 2;
        this.targetPosition.y = Math.random() * window.innerHeight - 128 / 2;
      }
    },
    handleTransitionEnd() {
      this.isWalking = false;
    }
    // changeToIdle(){  // 鼠标离开后就切换回idle
    //     console.log("已经离开了鼠标")
    //     if (this.isWalking) {
    //     this.isSayingHello = false;
    //     this.isWalking = false;
    //     this.hasLeft = true;
    //     //相当于触发器之改变某个状态, 之后再总的进行判断和下一个状态的切换
    //     // this.targetPosition.x = Math.random() * window.innerWidth - 128 / 2;
    //     // this.targetPosition.y = Math.random() * window.innerHeight - 128 / 2;
    //   }  

    // }
  }
};  
</script>  

<style scoped>  @import './animate.css';
</style>