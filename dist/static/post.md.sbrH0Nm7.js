import {c as a, m as e, F as r, E as n, p as o, a as i, o as s, t as l} from "./chunks/framework.wSs3aZfZ.js";

const d = JSON.parse('{"latest_blogs":[["/OTHER/vitepress & obsidian 结合","2024-01-06T17:54:20.000Z","vitepress & obsidian 结合"],["/ML/dl/深度学习","2024-01-08T11:36:24.334Z","深度学习"],["/DATA/web_spider/数据","2024-01-08T16:31:37.511Z","数据"],["/DATA/web_spider/爬虫","2024-01-08T16:32:25.401Z","爬虫"],["/ML/ml/机器学习","2024-01-13T13:30:10.167Z","机器学习"],["/ML/dl/llm Agent","2024-01-15T09:19:22.017Z","llm Agent"]]}'),
    _ = e("h1", null, "All Blog Posts", -1), c = ["href"],
    p = e("h2", {id: "给我看看", tabindex: "-1"}, [i("给我看看 "), e("a", {
        class: "header-anchor",
        href: "#给我看看",
        "aria-label": 'Permalink to "给我看看"'
    }, "​")], -1),
    T = JSON.parse('{"title":"详情页","description":"","frontmatter":{"title":"详情页","tags":["#文件夹索引页"],"datetime":"2024-01-13 21:32"},"headers":[],"relativePath":"post.md","filePath":"post.md"}'),
    m = {name: "post.md"}, b = Object.assign(m, {
        setup(u) {
            return (h, f) => (s(), a("div", null, [e("template", null, [_, e("ul", null, [(s(!0), a(r, null, n(o(d).latest_blogs, t => (s(), a("li", null, [e("a", {href: t[0]}, l(t[2]), 9, c), e("span", null, l(t[1]), 1)]))), 256))])]), p]))
        }
    });
export {T as __pageData, b as default};