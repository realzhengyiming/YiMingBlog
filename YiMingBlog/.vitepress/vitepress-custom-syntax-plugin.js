module.exports = function vitepressCustomSyntaxPlugin(md) {
    const defaultRender = md.renderer.rules.image;

    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        const srcIndex = token.attrIndex('src');

        if (srcIndex >= 0) {
            const imageUrl = token.attrs[srcIndex][1];

            if (imageUrl.endsWith('.png')) {
                // 为 .png 图片添加自定义处理
                token.attrSet('src', 'custom/path/' + imageUrl);
            } else if (imageUrl.endsWith('.md')) {
                // 将 ![[xxx.md]] 替换为 <a href="xxx.md">xxx.md</a>
                const url = imageUrl.substring(0, imageUrl.length - 3);
                return `<a href="${url}">${url}</a>`;
            }
        }

        // 传递 token 到默认的渲染器
        return defaultRender(tokens, idx, options, env, self);
    };
};