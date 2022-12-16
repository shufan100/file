const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const terserWebpackPlugin = require('terser-webpack-plugin')

module.exports = {
  /** ----------------------------------entry 入口---------------------------------------------- */
  entry: ['./src/main.js', './src/index.html'], //写html才能使用热更新
  // entry完整写法
  // entry:{ main:'./src/main.js'  }

  /** ----------------------------------output 输出---------------------------------------------- */
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出路径
    filename: './js/bundle.js' //编译后的文件
    // pubilcPatch:'/'
  },

  /** ----------------------------------mode 模式---------------------------------------------- */
  // 作用：告知 webpack 使用相应模式的内置优化
  mode: 'development', // node development production:默认(会压缩编译的js)

  /** ----------------------------------module 模块---------------------------------------------- */
  // module作用：module内的属性决定了如何处理项目中的不同类型的文件，作用在编译的时候
  module: {
    // rules作用：匹配数组内的规则，使对应的文件使用对应的loader进行解析，编译
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

  /** ----------------------------------plugins 插件---------------------------------------------- */
  // 作用：作用在项目构建完使用
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

  /** ----------------------------------devServer 自动化编译运行---------------------------------------------- */
  // 作用：配置固定的一些属性
  devServer: {
    open: false, //自动打开浏览器新标签
    port: 3000, // 端口
    hot: true // 开启html热模更新
    // compress:true //启动gzip压缩
  },

  /** ----------------------------------resolve 解析模块规则---------------------------------------------- */
  resolve: {
    // 别名
    alias: {
      $css: path.resolve(__dirname, 'src/css')
    },
    // 尝试按顺序解析这些后缀名
    extensions: ['.js', '.json', '.ts', '.jsx', '.css', '...'], //'...' 访问默认拓展名
    // 告诉 webpack 解析模块时应该搜索的目录
    modules: [path.resolve(__dirname, './node_modules'), 'node_modules']
  },

  /** ----------------------------------devtool 生成map文件---------------------------------------------- */
  devtool: 'cheap-module-eval-source-map', // 生成map文件，【false、string】

  /** ----------------------------------optimization 优化---------------------------------------------- */
  optimization: {
    minimize: true, // 压缩js代码，默认true
    //配置生产环境的压缩方案: js / css 覆盖默认压缩工具(minimizer)
    minimizer: [
      new terserWebpackPlugin({
        cache: true, // 开启缓存
        parallel: true, //开启多进程打包
        sourceMap: true //启动source-map
      })
    ],
    runtimeChunk: 'single', //会生成一个唯一单独的runtime.js文件，就是manifest。
    splitChunks: {
      chunks: "all",        //async对异步引入的代码分割 initial对同步引入代码分割 all对同步异步引入的分割都开启
      minSize: 30 * 1024,   // 分割的chunk最小为30kb
      minChunks: 1,         // 要提取的chunk最少被引用1次
      maxAsyncRequests: 5,  // 按需加载时并行加载的文件的最大数量
      maxInitialRequests: 3, // 入口js文件最大并行请求数量
      automaticNameDelimiter: '~', //缓存组和生成文件名称之间的连接符
      name: true,          // 缓存组里面的filename生效，覆盖默认命名
      //缓存组，将所有加载模块放在缓存里面一起分割打包
      cacheGroups: {
        //自定义打包模块
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10, //优先级，先打包到哪个组里面，值越大，优先级越高
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        },
        styles: {
          name: 'styles',
          test: /\.(scss|css)$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true
        },
        // 第三方组件
        libs: {
          // 指定chunks名称
          name: 'chunk-libs',
          //符合组的要求就给构建venders
          test: /[\\/]node_modules[\\/]/,
          //priority:优先级：数字越大优先级越高，因为默认值为0，所以自定义的一般是负数形式,决定cacheGroups中相同条件下每个组执行的优先顺序。
          priority: 10,
          // 仅限于最初依赖的第三方
          chunks: 'initial'
        },
        elementUI: {
          // 将elementUI拆分为单个包
          name: 'chunk-elementUI',
          // 重量需要大于libs和app，否则将打包到libs或app中
          priority: 20,
          // 为了适应cnpm
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/
        },
        //公共组件
        commons: {
          name: 'chunk-commons',
          // can customize your rules
          test: resolve('src/components'),
          minChunks: 3,
          priority: 30,
          //这个的作用是当前的chunk如果包含了从main里面分离出来的模块，则重用这个模块，这样的问题是会影响chunk的名称。
          reuseExistingChunk: true,
          //最大初始化加载次数，一个入口文件可以并行加载的最大文件数量，默认3
          maxInitialRequests: 3,
          //表示在分离前的最小模块大小，默认为0，最小为30000
          minSize: 0
        },
        echarts: { // split echarts libs
          name: 'chunk-echarts',
          test: /[\\/]node_modules[\\/]_?echarts(.*)/,
          priority: 40,
          chunks: 'async',
          reuseExistingChunk: true
        },
        monaco: { // split monaco libs
          name: 'chunk-monaco',
          test: /[\\/]node_modules[\\/]_?monaco(.*)/,
          priority: 40,
          chunks: 'async',
          reuseExistingChunk: true
        },
        'project-components': { // split project libs
          name: 'chunk-project-components',
          test: resolve('src/views/project'),
          priority: 50,
          chunks: 'async',
          reuseExistingChunk: true
        },
        'teachers-components': { // split teacher libs
          name: 'chunk-teachers-components',
          test: resolve('src/views/teachers'),
          priority: 60,
          chunks: 'async',
          reuseExistingChunk: true
        },
        'utils': { // split utils libs
          name: 'chunk-utils',
          test: resolve('src/utils'),
          priority: 70,
          chunks: 'async',
          reuseExistingChunk: true
        },
      }
    }

  }


}
