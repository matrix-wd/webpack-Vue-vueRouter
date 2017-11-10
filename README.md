Goth官网
============

## 前言
		前段时间因为学习了Vue全家桶,碰巧这次遇到一个公司让我搭建一个官方网站.于是就抱着学习的态度接受了这个项目.在整个项目的进行中,自己还是遇到不少的坑,最折腾人的是自己准备放在服务器的时候,通过webpack打包始终打包到内存中,不能够打包到服务器磁盘中.最后通过修改webpack的配置文件解决了这个问题,但目前还是不是特别明白是为什么,后续弄清楚了会写一篇博客进行总结.在这个项目中,自己用了比较多的新知识,总体来讲还是收获满满的.

## Demo && 演示
		因为对方公司对于没有技术人员,所以自己就没有使用路由的history模式,采用了默认的hash
点击这里可以直接访问[www.boyalibrary.com/goth/index.html#/index](http://www.boyalibrary.com/goth/index.html#/index)

## 技术栈
[vue](https://cn.vuejs.org/)
[vue-router](https://router.vuejs.org/zh-cn/installation.html)
[webpack](http://webpack.github.io/docs/)
[element-ui](http://element.eleme.io/#/)
[less](http://lesscss.cn/)
[es6](http://es6.ruanyifeng.com/)
		另外自己也引入了状态管理的Vuex,但是因为目前的网站是纯静态的,所以没有用上,在后期如果动态化应该会用上
  