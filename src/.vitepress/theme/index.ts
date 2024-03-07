// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { VPBTheme } from '@jcamp/vitepress-blog-theme'
import './style.css'
import CustomBlogHeader from './CustomBlogHeader.vue'
// import MyDiv from './my_div.vue'
// import MyDiv2 from './change_face.vue'
import BabyPulm from './baby_pulm.vue'
import HandType from './handtype_text.vue'
import AutoMusic from './auto_playmusic.vue'

export default {
  ...VPBTheme,
  Layout: () => {
    return h(VPBTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    VPBTheme.enhanceApp({ app, router, siteData })
    app.component('CustomBlogHeader', CustomBlogHeader)

    // app.component("HandType", HandType)
    app.component("AutoMusic", AutoMusic)
    app.component("BabyPulm", BabyPulm)  // 注册自定义vue组件
  },
}

// if you're not using custom components, this file can be as simple as
/*
import { VPBTheme } from '@jcamp/vitepress-blog-theme'
import './style.css'
export default VBPTheme
*/
