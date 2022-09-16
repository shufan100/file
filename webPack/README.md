### webpack

1、webpack 能处理 js、json
2、-D 只是在本地才用上打包编译后就不用了
3、-S 是打包完线上还要用的，比如：vue react

### 1、项目初始化

```javascript
  npm init  //外层文件夹初始化生成 package.json 文件
  npm install webpack webpack-cli -D // 项目/全局安装 webpack webpack-cli (安装完会生成node_modules文件夹)
```

### 2、less 解析

```javascript
npm install less less-loader css-loader style-loader -D  // 安装相关依赖
// 2.在module模块配置
```

### 3、eslint-loader js 语法检查

```javascript
  1.npm install eslint@7 eslint-loader@3 -D  //1、安装
  2.package.json // 配置
  // eslint规则：https://cn.eslint.org/docs/rules/
  // 新版eslint-loader 启用了，使用 eslint-webpack-plugin 插件
  /**
  "eslintConfig": {
    "parserOptions": { // 解析器配置
      "ecmaVersion": 6,  // 支持es6
      "sourceType": "module" // 使用es6模块化
    },
    "env": { // 设置环境
      "browser": true, // 支持浏览器环境
      commonjs: true, // 支持commonjs环境
      "node": true   // 支持node环境
    },
    "globals": { // 声明全局变量
      "$":"readonly"
    },
    "rules": {  // eslint检查规则：0/off：关闭； 1/warn：警告；2/error:错误
      "no-console":0,  // 打印
      "eqeqeq":2,  // ===
      "no-alert":2  // 不能alert
    },
    // 使用的扩展库
    "extends":"eslint:recommended"
  */
```

### 4、 js 语法转换

1. 将浏览器不能识别的新语法转换成能识别的久语法，做浏览器兼容性处理

```javascript
  1. npm install babel-loader @babel/core @babel/preset-env -D
```

### 5、 js 兼容性处理

```javascript
第一种：
  1. npm install @babel/polyfill -D
  2. 入口文件引入：import '@/babel/polyfill' //包含es6的高级语法转换
  缺点：
    1、全部的新语法都进行了转换,能解决大部分兼容性的问题。所以编译后文件会非常大

第二种：
  1、npm install core-js -D
  优点：
    1、只将es6的高级语法转义
    2、通过core-js进行按需使用polyfill
```

### 6、 webpack4 使用 url-loader 处理样式中引入的图片路径问题

```javascript
//  webpack4
  1. npm install file-loader url-loader -D
  2. url-loader是对象file-loader的上层封装，使用时必须配合file-loader使用
//  webpack5
  1. 使用asset,不需要loader，weboack5默认会处理图片
```

### 7、 处理 html 中图片的路径问题

```javascript
  1、npm install html-loader -D
  2、配置
```

### 7、 处理其他资源

```javascript
  1、无需安装插件，直接配置
```

### 8、 生成 html

```javascript
  1、npm install html-webpack-plugin -D
  2、引用
  3、plugin插件使用
  4、devServer配置hot属性
```

### 8、 自动编译打包运行 + HRM 热模更新

```javascript
  1、npm install webpack-dev-server -D
  2、配置devServer
  3、package.json配置自动打包运行命令
  注：不会生成dist文件,数据存在内存中，关闭服务器，资源就被释放了
// 热更新
  1、devServer配置hot
  2、entry添加index.html，热更新就能监听到
  注：html+js无法做到局部更新，只能全刷新，css可以热更新
```

npm i clean-webpack-plugin -D

### 9、build 前先清空 dist

```javascript
  1、npm i clean-webpack-plugin -D
  2、引入
  3、配置plugin

```