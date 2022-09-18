// webpack配置文件
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 入口文件
  entry: ['./src/main.js', './src/index.html'], //写html才能使用热更新
  /** entry完整写法
      entry:{
        main:'./src/main.js'
      }
  */
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出路径
    filename: './js/bundle.js' //编译后的文件
    // pubilcPatch:'/'
  },
  // 模式（告知 webpack 使用相应模式的内置优化）
  mode: 'development', // node development production:默认(会压缩编译的js)
  // 模块
  module: {
    rules: [
      // 解析less（不完美：是style内联样式）
      {
        test: /\.less$/, // 匹配所有的less文件
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', // 用于在html文档中创建一个style标签，将样式塞进去
          'css-loader', // 将less编译后的css转换成为commonJs的一个模块
          'less-loader' //  将less编译为css，但不生成单独的css文件，在内存中
        ]
      },
      // js 语法检查
      {
        test: /\.js$/, // 匹配所有的js文件
        exclude: /node_modules/, // 不包括node_modules里面的js
        enforce: 'pre', //提前加载使用
        use: ['eslint-loader']
        // options: {
        //   transpileOnly: true // 会缓存在内存，减少构建时间
        // }
      },
      // js 语法转换（es6 --> es5）
      {
        test: /\.js$/, // 匹配所有的js文件
        exclude: /node_modules/, // 不包括node_modules里面的js
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage', //使用corejs的方式'usage' 表示按需加载
                  corejs: '3', //指定corejs的版本
                  targets: {
                    // 兼容浏览器的版本
                    chrome: '58'
                    // ie: '10' //不支持const,箭头函数,没有Promise
                  }
                }
              ]
            ],
            cacheDirectory: true //开启babel缓存
          }
        }
      },

      // url-loader处理 css 中的图片路径：webpack4
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192, // 8kb 以下的图片转base64
      //         outputPath: 'iamges', // 图片输出目录
      //         // publicPath: '../dist/images', //决定图片的url路径
      //         name: '[hash:5].[ext]' // 修改文件名称，取hash值得前5位， [ext]文件扩展名
      //       }
      //     }
      //   ]
      // }
      // 处理 css 中的图片路径：webpack5
      {
        test: /\.(jpg|png|gif)$/,
        type: 'asset',
        //解析
        parser: {
          //超过13kb转base64
          dataUrlCondition: {
            maxSize: 13 * 1024 // 13kb
          }
        },
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          filename: 'images/[name][hash:6][ext]'
          // publicPath: ''
        }
      },
      // 处理 html 中的图片路径
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      // 处理字体图标资源：webpack5
      {
        test: /\.(ttf|svg|woff|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[hash:10][ext][query]'
        }
      }
    ]
  },
  // 配置webpack插件(plugins)
  plugins: [
    new CleanWebpackPlugin(), //build先清空dist文件夹
    new HTMLWebpackPlugin({
      // 1、build会自动生成html文件
      template: './src/index.html' // 使用自己的html文件
      // 2、压缩html
      // minfly: {}
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css' // 配置生成css文件的名字和文件路径
    })
  ],
  // 自动化编译运行
  devServer: {
    open: false, //自动打开浏览器新标签
    port: 3000, // 端口
    hot: true // 开启html热模更新
    // compress:true //启动gzip压缩
  }
  // optimization: {
  //   runtimeChunk: 'single'
  // }
}
