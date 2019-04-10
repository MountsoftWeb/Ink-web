# Ink-web

- vue
- axios
- vuex

## 目录结构
    ├── build                               // webpack 配置文件
    ├── config                              // 项目打包路径  
    ├── src                                 // 项目源码
    │   ├── assets                          // 全局属性
    │   │   ├── css
    │   │   │   ├── body.css                // 全局 css
    │   │   ├── js
    │   │   │   ├── plugin.js               // 组件注册
    │   ├── components                      // 公共组件
    │   │   ├── layout                      // 全局配置
    │   │   │   ├── Footer.vue              // 底部组件
    │   │   │   ├── Header.vue              // 头部组件
    │   │   │   ├── Layout.vue              // 带左导航组件
    │   │   │   ├── LayoutNoLeft.vue        // 不带左导航组件
    │   │   │   ├── index.js                // 组件注册
    │   │   ├── left                        // 左导航条
    │   │   │   ├── Left.vue                // 左导航条组件
    │   │   │   ├── LeftItem.vue            // 
    │   │   │   ├── index.js                // 组件注册
    │   │   ├── route                       // 路由
    │   │   │   ├── index.js                // 路由配置
    │   │   ├── views                       // 页面展示
    │   │   │   ├── community               // 社团目录
    │   │   │   │   ├── Community.vue       // 社团页面
    │   │   │   │   ├── index.js            // 社团配置
    │   │   │   ├── trading                 // 交易信息
    │   │   │   │   ├── digital             // 数码目录
    │   │   │   │   │   ├── Digital.vue     // 数码组件
    │   │   │   │   ├── life                // 生活目录
    │   │   │   │   │   │   ├── life.vue    // 生活组件
    ├── static
    ├── App.vue                             // 页面入口
    ├── main.js                             // 程序入口文件，加载公共组件
    ├── index.html                          // 入口html文件
    ├── package.json                        // 项目构建配置
    
## 使用
已经配置好 node.js, vue


> npm install

启动项目
> npm run dev

