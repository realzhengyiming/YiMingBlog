// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { VPBTheme } from '@jcamp/vitepress-blog-theme'
import './style.css'
import CustomBlogHeader from './CustomBlogHeader.vue'
// import MyDiv from './my_div.vue'
import MyDiv2 from './change_face.vue'

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
    // app.component("MyDiv", MyDiv)
    app.component("MyDiv2", MyDiv2)
  },
}

// if you're not using custom components, this file can be as simple as
/*
import { VPBTheme } from '@jcamp/vitepress-blog-theme'
import './style.css'
export default VBPTheme
*/
