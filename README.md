# bshark

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 前端框架
> 前端基于 Vue + Vue-Router + Vuex + Element-ui + Axios + Typescript构建

#### 主要模块
- vue, vue-router, vuex
vue.js 框架, vue-router SPA 路由, vuex 全局状态管理器
- axios
基于 promise 的HTTP 库
- element-ui
饿了么 t团队的ui组件库
- echarts
百度团队的可视化图表库
- lodash
主要针对数组，对象操作的工具
- moment
提供日期解析、校验、操作、格式化功能的工具库

## 目录解析
、、、
|-- dist                           // 项目输出的文件
    |-- ...
|-- node_modules                   // 第三方模块安装包
|-- public
    |-- favicon.ico                // 图标文件
    |-- index.html                 // 入口文件
|-- scripts                        // 工具类脚本文件通常放置发布、运行时脚本
    ...                            // 待添加
|-- src
    |-- api                        // 前端和后端接口对接模块
        |-- module-a               // 模块名
            |-- **.ts              // 模块处理逻辑
    |-- assets                     // 网站静态资源存放地址
    |-- components                 // 网站组件存放地址
        |-- common                 // 公用组件存放路径
        |-- module                 // 单个模块存放路径
    |-- filter                     // 过滤器
    |-- mixins                     // 系统组件
    |-- plugins                    // 第三方库及插件
    |-- router                     // vue-router 路由配置目录
    |-- store                      // vuex 相关的 store 文件目录
    |-- styles                     // 系统公共样式
    |-- types                      // 全局注入的ts声明文件
    |-- utils                      // 工具类方法目录
    |-- validate                   // 正则匹配目录
    |-- views                      // vue单文件形式的所有的页面
    |-- app.vue                    // 根级 vue组件
    |-- config.ts                  // 系统配置的文件
    |-- main.ts                    // 入口文件
|-- .gitignore                     // git 版本忽略配置
|-- babel.config.js                // babel 编译器配置
|-- package.json                   // package.json
|-- readme.md                      // 项目的说明文档
|-- tsconfig.json                  // ts配置文件
|-- tslint.json                    // tslint 配置文件
|-- vue.config.js                  // webpack 配置文件
、、、
