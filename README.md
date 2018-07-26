# vue-project
#### 运行和打包
> 全局安装webpack-cli:
npm install --save-dev webpack-cli -g
> 全局安装
npm install -g webpack
> 安装到项目目录
npm install --save-dev webpack
> 安装webpack-cli
npm install webpack-cli -D
> 执行打包命令
npm start 或 npm run server
> 使用webpack构建本地服务器
npm install --save-dev webpack-dev-server

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

> Vue框架文档
https://cn.vuejs.org/

> Vue框架快速入门
https://blog.csdn.net/u011054333/article/details/78256169

> Vue前端开发项目框架搭建(node + webpack + vue)
https://blog.csdn.net/xiaoping_1988/article/details/78768845
推荐用Nuxt.js搭建环境，然后把UI组件库选：https://github.com/vueComponent/ant-design

> 基于vue-cli快速构建步骤详解
https://www.jianshu.com/p/2769efeaa10a

# 登录密码加密方式md5
npm install crypto

# 基于 Promise 的 HTTP 请求客户端 axios CSDN相关文章:https://blog.csdn.net/binginsist/article/details/65630547
npm install axios
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 格式化日期时间:
this.$format.formatDate(new Date(), 'yyyy-MM-dd hh:mm')
<DatePicker type="datetime" format="yyyy-MM-dd HH:mm" v-model="vm.operDate" style="width: 120px"></DatePicker>

# Vue Grid组件：
https://www.ag-grid.com/javascript-grid-pagination/#pagination-api
