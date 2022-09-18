### webpack

1、webpack 能处理 js、json
2、-D 只是在本地才用上打包编译后就不用了
3、-S 是打包完线上还要用的，比如：vue react

### 1、项目初始化

```javascript
  npm init  //外层文件夹初始化生成 package.json 文件
  npm install webpack webpack-cli -D // 项目/全局安装 webpack webpack-cli (安装完会生成node_modules文件夹)
```

### 1、mode

```javascript
mode: 'production' //会压缩编译后的js
```

<!-- **********loader************* -->

### 2、js 语法检查

```javascript
  1.npm install eslint@7 eslint-loader@3 -D  //1、安装
  2.package.json // 配置
  // eslint规则：https://cn.eslint.org/docs/rules/
  // 新版eslint-loader 启用了，使用 eslint-webpack-plugin 插件

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

```

### 3、less 解析

```javascript
  1、安装： npm install less less-loader css-loader style-loader -D
  2、配置rules：[
      {
        test: /\.less$/, // 匹配所有的less文件
        use: [
          'style-loader',  // 用于在html文档中创建一个style标签，将样式塞进去
          'css-loader',   // 将less编译后的css转换成为commonJs的一个模块
          'less-loader'   //  将less编译为css，但不生成单独的css文件，在内存中
        ]
      }
  ]
```

### 4、 js 语法转换

```javascript
  注：'将浏览器不能识别的新语法转换成能识别的久语法，做浏览器兼容性处理'
  1、安装： npm install babel-loader @babel/core @babel/preset-env -D
  2、配置rules：[
      ...
    ]
```

### 5、 js 兼容性处理

```javascript
第一种：
  1、安装： npm install @babel/polyfill -D
  2、引入index.js：import '@/babel/polyfill' //包含es6的高级语法转换
  '缺点：'
    1、全部的新语法都进行了转换,能解决大部分兼容性的问题。所以编译后文件会非常大

第二种：
  1、安装：npm install core-js -D
  '优点：'
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
  1、安装：npm install html-loader -D
  2、配置rules： [{
      test: /\.html$/i,
      loader: "html-loader",
    }]
```

### 8、 处理其他资源

```javascript
  1、直接配置rules： [
    {
      test: /\.(ttf|svg|woff|eot)$/,
      type: 'asset/resource',
      generator: {
        filename: 'font/[hash:10][ext][query]'
      }
    }
  ]

```

### 9、 生成 html

```javascript
  1、安装 npm install html-webpack-plugin -D
  2、引用：const HTMLWebpackPlugin = require('html-webpack-plugin');
  3、配置 plugins：[
      new HTMLWebpackPlugin({// build会自动生成html文件
        template: './src/index.html' // 使用自己的html文件
      })
    ]
```

### 10、 自动编译打包运行 + HRM 热模更新

```javascript
  1、安装： npm install npm install webpack-dev-server -D
// 自动运行
  2、配置devServer：{
      open: false, //自动打开浏览器新标签
      port: 3000, // 端口
      // compress:true //启动gzip压缩
    }
  3、package.json配置自动打包运行命令
    {"start": "webpack-dev-server"}
  注：不会生成dist文件,数据存在内存中，关闭服务器，资源就被释放了

// 热更新
  1、entry添加index.html，热更新就能监听到
  2、devServer配置：{
    hot: true
    }
  注：html+js无法做到局部更新，只能全刷新，css可以热更新
```

### 11、build 前先清空 dist

```javascript
  1、安装： npm install clean-webpack-plugin -D
  2、引用：const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  3、配置 plugins：[
      new CleanWebpackPlugin(),  //build先清空dist文件夹
    ],
```

### 12、提取 css 成单独文件

```javascript
  1、安装： npm install mini-css-extract-plugin -D
  2、引用：const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  3、配置 rules：[{
      test: /\.less$/,
      use:[
        MinCssExtractPlugin.loader, //放在less最上面
        // 'style-loader', //不能用了,无法生成css文件
        'css-loader',
        'less-loader',
      ]
    }]
  4、配置 plugins：[
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
    ],
```

### 13、添加 css 兼容性处理

```javascript
  1、安装： npm install postcss-laoder postcss-flexbugs-fixes postcss-preset-env postcss-normalize autoprefixer -D
  2、引用：const MiniCssExtractPlugin = require('mini-css-extract-plugin')
  3、配置 rules：[{
      test: /\.less$/,
      use:[
        MinCssExtractPlugin.loader, //放在less最上面
        'css-loader',
        // css兼容性处理
        {
          loader:'postcss-loader',
          options:{
            ident: 'postcss', //声明支持
            plugins: () =>[
              require('postcss-flexbugs-fixes'),
              require('postcss-preset-env')({
                autoprefixer: {
                  flexbox:'no-2009'
                },
                stage: 3
              }),
              require('postcss-normalize')(),
            ],
            sourceMap:true  // 生成map文件，可以映射css原地址位置
          }
        }
        'less-loader',
      ]
    }]

```

### 14-1、压缩 css --webpack4

```javascript
  1、安装： npm install optimize-css-assets-webpack-plugin -D
  2、引用：const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
  3、配置 plugins：[
      new OptimizeCssAssetsWebpackPlugin({
        cssProcessorPluginOptions: {  // 配置 和 options一样
          preset:['default',{discardComments:{removeAll: true}}]
        },
        cssProcessorPluginOptions:{ // 解决没有source map 问题
          map:{
            inline:false,
            annotation: true
          }
        }
      })
    ],
```

### 14-2、压缩 css --webpack5

```javascript
  1、安装： npm install css-minimizer-webpack-plugin  -D
  2、引用：const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
  3、配置 optimization: {  // 和entry平级
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  }
```

### 15、压缩 html

```javascript
  1、安装：npm installhtml-webpack-plugin -D
  2、配置 plugins: [
    new HTMLWebpackPlugin({
      // 1、build会自动生成html文件
      template: './src/index.html',  // 使用自己的html文件
      // 2、压缩html
      minify: {
        removeComments: true, // 移除注释
        collapseWhitespace: true, // 移除留白
        removeRedundantAttributes: true, // 移除无用标签
        useShortDctype:true, // 使用短的文档说明
        removeEmptyAttributes:true,//移除空标签
        removeStyleLinkTypeAttributes:true,// 移除link 的ref='stylesheet'
        keepClosingSlash:true, // 自结束
        minifyJS:true, // 压缩html里的js
        minifyCSS:true, // 压缩html里的css
        minifyURLs:true // 压缩html里的url
      }
    })]
```
