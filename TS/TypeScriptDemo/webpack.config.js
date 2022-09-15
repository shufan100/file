// webpack配置
const path = require('path'); // nodejs中的一个模块，作用：用来拼接路径

// 打包生成html文件配置
const HTMLWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中的所有配置信息都应该写在这里面
module.exports = {
  //入口文件
  entry: './src/indexDemo.ts',
  // 输出（项目打包完要放在哪个文件夹下）
  output: {
    // path: './dist'                           // 两者一样
    path: path.resolve(__dirname, 'dist'), // 指定打包后的文件目录
    filename: 'bundle.js', // 打包ts文件后的文件名字
    environment: {
      // 告诉webpack不使用箭头函数,(正常编译后的文件是箭头函数)
      arrowFunction: false
    }
  },
  // 环境
  mode: 'production',

  // 模块
  module: {
    // 指定要加载的规则(会有很多种文件，现在配置编译ts的规则)
    rules: [
      {
        test: /\.ts$/, //指规则生效的文件(用正则表达式去匹配所有以ts结尾的文件)
        use: [
          //(从后往前执行)用ts-loader去处理以ts结尾的文件转成js，再用babel-loader将新版的js转成旧版的js
          // 配置babel
          {
            loader: 'babel-loader', //指定加载器
            options: {
              //设置babel（因为babel有浏览器兼容问题
              presets: [
                //给babel设置预定义的环境
                [
                  '@babel/preset-env', //指定环境的插件
                  {
                    //配置信息
                    targets: {
                      // 要兼容的浏览器版本(编译和)
                      chrome: '58',
                      ie: '11' //不支持const,箭头函数,没有Promise
                    }, //如果引用了Promise，但ie11没有，就引用corejs里的Promise的方法
                    corejs: '3', //指定corejs的版本
                    useBuiltIns: 'usage' //使用corejs的方式'usage' 表示按需加载
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node-modules/ //哪些文件不处理,不编译
      },
      // 解析less(是style内联样式，需改成link引入)
      {
        test: /\.less$/, // 匹配所有的less文件
        use: [
          // (从后往前执行)
          'style-loader', // 用于在html文档中创建一个style标签，将样式塞进去
          'css-loader', // 将less编译后的css转换成为commonJs的一个模块
          // postcss引入
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                  // {
                  //   browsers: 'last 2 versions'
                  // }
                ]
              }
            }
          },
          'less-loader' //将less编译为css，但不生成单独的css文件，在内存中。
        ]
      }
    ]
  },

  // 配置webpack插件(plugins)
  plugins: [
    // build先清空dist文件夹
    new CleanWebpackPlugin(),
    // build会自动生成html文件
    new HTMLWebpackPlugin({
      // title: "TypeSctiptDemo",  // 不用src的html模板，自己生成html文件
      template: './src/index.html' // 用这个就用src的html模板
    })
  ],

  // 用来设置引用的模块（哪些文件可以作为模块）
  resolve: {
    extensions: ['.ts', '.js'] // 以这两个扩展名结尾的，都可以作为模块来使用
  }
};
