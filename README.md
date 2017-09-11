# 预览效果
[预览地址](https://nathanyangcn.github.io/JD-PC-page/index.html)

# 简要说明
1. 使用 div + css 进行布局
2. 使用原生 JS 实现了倒计时、轮播、tab切换、回到顶部这几个交互效果，其中轮播完成了封装，可通过new关键字并传入相应参数进行调用，可创建多个实例。
	注：移动端中JS文件封装的多。PC只封装了一个轮播。
3. carousel 参数说明：carousel() 接受两个参数：1.ct 、 2.auto
	3.1.ct ：需要实例化的DOM结构
	3.2.auto ：是否需要自动播放 —— false 不会自动播放； true 自动播放；false 为默认值。
	注：有相应的DOM结构和class类名，所以配合上述JS可快速搭建多个轮播模块；且可根据DOM结构自动校验是否存在左右切换点击按钮，若存在左右切换点击按钮便会工作。
4. 试图将小工具封装到 util.css 文件中：目前有 clearfix（清除浮动）、triangle（三角形）、ellipsis（单行文本超出省略号）、spacer（分隔符）、absmiddle（绝对居中）等。
5. 将搜索框的DOM结构和class样式抽离出来，当需要的时候，可以使用相同的DOM和class快速搭建页面内容模块。