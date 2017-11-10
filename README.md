Goth官网
============

## 前言
前段时间因为学习了Vue全家桶，碰巧这次遇到一个公司让我搭建一个官方网站。于是就抱着学习的态度接受了这个项目，在整个项
目的进行中，自己还是遇到不少的坑，最折腾人的是自己准备放在服务器的时候。通过webpack打包始终打包到内存中，不能够打包到磁盘中。最后通过修改webpack的配置文件解决了这个问题，但目前还是不是特别明白是为什么，后续弄清楚了会写一篇博客进行总结。在这个项目中，自己用了比较多的新知识，总体来讲还是收获满满的。

## Demo && 演示
因为对方公司对于没有技术人员，所以自己就没有使用路由的history模式，采用了默认的hash<br/>
**点击这里可以直接访问[www.boyalibrary.com/goth/index.html#/index](http://www.boyalibrary.com/goth/index.html#/index)**

## Build Setup
```
# install dependencies
npm install

# server with hot reload at localhost:8080
npm run dev

# build production
npm run build
```

## 技术栈
- [vue](https://cn.vuejs.org/)

- [vue-router](https://router.vuejs.org/zh-cn/installation.html)

- [webpack](http://webpack.github.io/docs/)

- [element-ui](http://element.eleme.io/#/)

- [less](http://lesscss.cn/)

- [es6](http://es6.ruanyifeng.com/)

另外自己也引入了状态管理的[Vuex](https://vuex.vuejs.org/zh-cn/),但是因为目前的网站是纯静态的,所以没有用上,在后期如果动态化应该会用上

## 项目目录

```
Goth
|
├── dist                               
|  ├── article               		   # 干货页面的图片
|  ├── team                            # 团队页面的图片
├── src                                
|  ├── assets                          
|     ├── css                          
|		├── reset.css                  # 样式重置文件
|     ├── img                          
|       ├── code.png                   # 二维码图片
|		├── index.jpg                  # 主页图片
|		├── story.jpg                  # 故事页面图片
|		├── us.jpg                     # 我们页面图片
|		├── vip-five.jpg               # VIP VI背景图片
|		├── vip-one.jpg                # VIP I背景图片
|		├── vip-three.jpg              # VIP III背景图片
|		├── vip-two.jpg                # VIP II背景图片
|     ├── less                         
|		├── article-item.less          # 干货页面中每个干货详情的公共样式
|		├── product.less               # 产品页面中每个产品详情的公共样式
|  ├── components                            
|     ├── article                      # 干货页面的细分      
|        ├── vue-america.vue           # 如何顺利申请到美国名校
|        ├── vue-ap.vue                # 关于AP考试(美国大学先修课程)
|        └── vue-defer.vue             # 被defer和waitlisted的原因及区别
|        └── vue-enroll.vue            # 美国春季入学和秋季入学
|        └── vue-ielts.vue             # 托福考试的基本认识以及意义
|        └── vue-sat.vue               # 解读新SAT
|        └── vue-transfer.vue          # 论美国大学转学
|     ├── product			           # 产品页面细分
|        ├── vue-family-member.vue     # family-member产品
|        ├── vue-mature-love.vue       # mature-love产品
|        ├── vue-puppy-love.vue        # puppy-love产品
|        └── vue-pure-love.vue         # pure-love产品
|     ├── vue-article.vue              # 干货
|     ├── vue-content.vue              # 内容
|     ├── vue-footer.vue               # 尾部
|     ├── vue-header.vue               # 头部
|     └── vue-index.vue                # Goth
|     ├── vue-product.vue              # 产品
|     ├── vue-story.vue                # 故事
|     ├── vue-team.vue                 # 团队
|     ├── vue-us.vue                   # 我们
|  ├── element                              
|     └── index.js                     # 按需引入element-ui的控件
|  └── router
|     └── index.js                     # 路由(懒加载)
|  ├── app.vue
|  ├── index.js                        
├── .babelrc                           # 设置转码和规则
├── favicon.ico                        # 图标
├── index.html                         
├── package.json                       # 依赖  
├── README.md                        
└── webpack.config.js                  # webpack配置文件
```

## 项目总结
自己在做项目的时候复习了挺多前端的知识，写了几篇博客，需要的伙伴可以看一下
- *[使用border实现翻页折叠](http://blog.csdn.net/m0_37568521/article/details/78361998)*

- *[不常见样式总结一](http://blog.csdn.net/m0_37568521/article/details/78365814)*

- *[不常见样式总结二](http://blog.csdn.net/m0_37568521/article/details/78372567)*

- *[直接使用JavaScript实现页面检索](http://blog.csdn.net/m0_37568521/article/details/78381000)*

- *[linear-gradient属性实现翻页折叠](http://blog.csdn.net/m0_37568521/article/details/78437310)*

- *[vue-router的那些事儿](http://blog.csdn.net/m0_37568521/article/details/78441924)*

- *[用CSS3实现响应式的瀑布流](http://blog.csdn.net/m0_37568521/article/details/78487568)*

## 项目图片
### PC端
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/pc/1.png)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/pc/2.png)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/pc/3.png)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/pc/4.png)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/pc/5.png)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/pc/6.png)
### 移动端
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/mobile/1.jpg)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/mobile/2.jpg)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/mobile/3.jpg)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/mobile/4.jpg)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/mobile/5.jpg)
![image](https://github.com/deng1234/webpack-Vue-vueRouter/blob/master/_image/mobile/6.jpg)