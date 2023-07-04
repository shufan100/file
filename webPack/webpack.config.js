const os = require('os')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const Terserwebpackplugln = require('terser-webpack-plugin') // terser插件是webpack内置的，用来压缩js文件的、production默认使用terser
// const ImageMinimizerplugin = require('image-minimizer-webpack-plugin')

const threads = os.cpus().length // cpu核数
console.log(threads, 'cpu核数')

/**webpack5
 *  1、 entry、output、mode、module(loader)、plugins
 *  2、resolve(解析：别名)、devserver(启动项目)、devtool(surceMap)文件映射、optimization(优化)
 *  3、preset-env js兼容
 *
 *  *提升js打包速度:
 *    3-1、开启HMR
 *    3-2、exclude(排除文件)/include(包含)
 *    3-3、eoneOf(规则匹配)
 *    3-4、cache(编译缓存/babel缓存)
 *    3-5、thread-loader (多进程打包)
 *      注：开启多进程，每启动一个进程会有600ms的耗时、项目越大优势越明显
 *      1. 目前是单进程、利用cpu内核数进行多进程打包 (os获取cpu核数)
 *      2. 在耗时的loader前面加 thread-loader
 *      3. 使用到的 os、threads、thread-loader、terser-webpack-plugin
 *    3-6、optimization.splitChunks分包
 *
 *  *性能:（会增加打包时长）
 *    1、图片、svg压缩
 *    2、js压缩
 *    3、css压缩
 *    2、tree-shaking：移除未使用的代码
 *      2-1.安装@babel/plugin-transform-runtime
 *
 *
 */

module.exports = {
  /** ----------------------------------1、entry 入口---------------------------------------------- */
  entry: ['./src/main.js', './public/index.html'], //写html才能使用热更新
  // entry:{ main:'./src/main.js'  }  // entry完整写法  //1个入口只会生成一个js文件，多个入口打包就生成多个文件

  /** ----------------------------------2、output 打包输出路径---------------------------------------------- */
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出文件存放的目录，必须是 string 类型的绝对路径
    pubilcPatch: '', //发布到线上的所有资源的 URL 前缀，string 类型。（'/assets/':指定目录下;  '':根目录下;  'https://cdn.example.com/':CDN 上去;）
    filename: 'static/js/[name].js', //输出文件的名称
    chunkFilename: 'static/js/[name].js', //打包其他文件输出的文件名 （附加 Chunk 的文件名称  ）
    clean: true //在生成文件之前清空 output 目录 webpack5.20.0+
  },

  /** ----------------------------------3、mode 模式---------------------------------------------- */
  // 作用：告知 webpack 使用相应模式的内置优化
  mode: 'development', // 开发：development   生产：production:默认(会压缩编译的j、剔除未使用的js代码)

  /** ----------------------------------devtool 生成map文件映射代码错误位置---------------------------------------------- */
  /** rules作用：
   *    1、匹配数组内的规则，使对应的文件使用对应的loader进行解析，编译;
   *    2、每个文件都会从上到下匹配、匹配到了还会玩下走
   *    3、oneOf匹配到对应的，就不往下走了
   */
  devtool: 'cheap-module-source-map', //开发：cheap-module-source-map   生产：source-map

  /** ----------------------------------4、module加载器（loader)---------------------------------------------- */
  /** module加载器（loader)：
   *    1、编译的文件匹配数组内的规则，使对应的文件使用对应的loader进行解析，编译;
   *    2、每个文件都会从上到下匹配、匹配到了还会玩下走
   *    3、oneOf匹配到对应的规则，就不往下走了。（可提升性能）
   */
  module: {
    // 配置 Loader
    rules: [
      {
        oneOf: [
          // less-loader 解析less（不完美：是style内联样式）
          {
            test: /\.less$/, // 正则匹配命中.less文件使用该loader
            // 1、使用一个loader
            // laoder: 'less-loader'
            // 2、使用多个 Loader，执行顺序从下到上（从右到左）
            use: [
              MiniCssExtractPlugin.loader, // 将css打包成.css文件引入
              // 'style-loader', // 用于在html文档中创建一个style标签，将样式塞进去
              'css-loader', // 将css转换成为commonJs的一个模块
              /* ------------ 处理css的兼容性（必须放在css-loader后面、package.json文件配置browserslist属性） ------------*/
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [['postcss-preset-env']]
                  }
                }
              },
              'less-loader' //  将less编译为css，但不生成单独的css文件，在内存中
            ]
          },
          // 处理 css 中的图片路径：webpack5     url-loader\file-loader已经内置webpack5里了
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
              //指定图片打包存放的位置
              filename: 'static/images/[name][hash:6][ext][query]' // 输出图片的名称
              // publicPath: ''
            }
          },
          // html-loader 处理 html 中的图片路径
          {
            test: /\.html$/i,
            loader: 'html-loader'
          },
          // 处理字体图标资源：webpack5
          {
            test: /\.(ttf|svg|woff|eot|map3|map4|avi)$/,
            type: 'asset/resource',
            generator: {
              filename: 'static/font/[hash:10][ext][query]'
            }
          },
          // babel-loader js兼容性 r （es6 --> es5）
          {
            test: /\.js$/, // 匹配所有的js文件
            exclude: /node_modules/, // 排除node_modules下的文件，其他文件都处理
            // include: path.resolve(__dirname, './src'), // 只处理src下的文件，其他文件不处理
            use: [
              {
                loader: 'thread-loader', //开启多进程
                options: {
                  works: threads //进程数量
                }
              },
              {
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
                  /** cache缓存、提升编译速度 */
                  cacheDirectory: true, //开启babel缓存（缓存在磁盘里，第二次打包只会编译有修改的文件，没修改的就用缓存里的）
                  cacheCompression: false, // 关闭缓存文件压缩
                  plugins: ['@babel/plugin-transform-runtime'] // 移除未使用的代码
                }
              }
            ]
          },
          // eslint-loader  js 语法检查
          {
            test: /\.js$/, // 匹配所有的js文件
            exclude: /node_modules/, //(默认) 排除node_modules下的文件，其他文件都处理
            enforce: 'pre', //提前加载使用
            // use: ['eslint-loader'],
            loader: 'eslint-loader',
            /** cache缓存、提升编译速度 */
            options: {
              transpileOnly: true, // 会缓存在内存，减少构建时间
              cache: true, // 开启缓存
              cacheLocation: path.resolve(__dirname, '/node_modules/.cache/eslintcachg'), //缓存路径
              threads // 开启多进程 和 进程数量
            }
          }
        ]
      }
    ]
    // 不用解析和处理的模块
    // noParse: [
    //   /special-library\.js$/ // 用正则匹配
    // ]
  },

  /** ----------------------------------5、plugins 插件---------------------------------------------- */
  // 作用：项目构建完后使用，作用整个项目
  plugins: [
    /**  1、编译前先清空dist文件夹 */
    new CleanWebpackPlugin(),
    /**  2、使用自己的html文件 */
    new HTMLWebpackPlugin({
      // 1、打包后的html:1、结构和原来一致；2.自动引入打包输出的资源
      template: path.resolve(__dirname, 'public/index.html') // 使用自己的html文件
      // 2、压缩html
      // minfly: {}
    }),
    /**  3、将所有的css文件打包成一个css文件 */
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css', // 配置生成css文件的名字和文件路径
      chunkFilename: '[id].css'
    })
  ],

  /** ----------------------------------resolve  配置寻找模块的规则---------------------------------------------- */
  resolve: {
    // 别名
    alias: {
      $css: path.resolve(__dirname, 'src/css')
    },
    // 自动补全文件扩展名
    extensions: ['.js', '.json', '.ts', '.jsx', '.css', '...'], //'...' 访问默认拓展名
    // 告诉 webpack 解析模块时应该搜索的目录
    modules: [path.resolve(__dirname, './node_modules'), 'node_modules']
  },

  /** ----------------------------------devServer 自动化编译运行---------------------------------------------- */
  // 作用：配置固定的一些属性
  devServer: {
    open: true, //自动打开浏览器新标签
    port: 3000, // 端口
    host: '0.0.0.0', //支持任何地址访问DevServer的Http服务
    hot: true // true开启热更新（HMR）、false刷新浏览器
    // compress:true //启动gzip压缩
    // historyApiFallback: true, // 是否开发 HTML5 History API 网页
  },

  // profile: true, // 是否捕捉 Webpack 构建的性能信息，用于分析什么原因导致构建性能不佳
  // cache: false, // 开发环境 缓存生成的 webpack 模块和 chunk，来改善构建速度。（在 生产 模式 中被禁用）
  // watch: true, // 是否开始
  // watchOptions: {
  //   // 监听模式选项
  //   // 不监听的文件或文件夹，支持正则匹配。默认为空
  //   ignored: /node_modules/,
  //   // 监听到变化发生后会等300ms再去执行动作，防止文件更新太快导致重新编译频率太高
  //   // 默认为300ms
  //   aggregateTimeout: 300,
  //   // 判断文件是否发生变化是不停的去询问系统指定文件有没有变化，默认每秒问 1000 次
  //   poll: 1000
  // },

  /** ----------------------------------optimization 优化---------------------------------------------- */
  optimization: {
    minimize: true, // 压缩js代码，默认true
    //压缩的操作
    minimizer: [
      /** 压缩css */
      new CssMinimizerPlugin(),
      /** 压缩js */
      new Terserwebpackplugln({
        parallel: threads // 开启多进程 和 设置进程数量
        //   cache: true, // 开启缓存
        //   sourceMap: true //启动source-map
      })
      /** 压缩图片 （影响性能）*/
      // cnpm i image-minimizer-webpack-plugin imagemin -D
      // 1.无损压缩  cnpm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
      // new ImageMinimizerplugin({
      //   minimizer: {
      //     implementation: ImageMinimizerplugin.imageminGenerate,
      //     options: {
      //       plugins: [
      //         ['gifsicle', { interlaced: true }],
      //         ['jpegtran', { progressive: true }],
      //         ['optipng', [{ optimizationlevel: 5 }]],
      //         [
      //           'svgo',
      //           {
      //             plugins: ['preset-default', 'prefixIds', { name: 'sortAttrs', params: { xmlnsorder: 'alphabetical' } }]
      //           }
      //         ]
      //       ]
      //     }
      //   }
      // })
    ],
    // runtimeChunk: 'single', //会生成一个唯一单独的runtime.js文件，就是manifest。

    /** 拆分过大的js、控制wenpack生成js文件、防止模块重复打包 */
    splitChunks: {
      // 这里的配置是cacheGroups里所有的配置
      chunks: 'all', // async对异步引入的代码分割  initial对同步引入代码分割  all对同步异步引入的分割都开启
      // minSize: 20000, // 分割的chunkjs文件最小为30kb
      // minRemainingSize: 0, // 确保拆分后剩余的最小 chunk 体积为零的模块
      // minChunks: 1, //提取的chunk最少被引用1次，满足条件才会代码分割
      // maxAsyncRequests: 5, // 按需加载时的最大并行请求数。默认30
      // maxInitialRequests: 3, // 入口js文件最大并行请求数量。默认30
      // automaticNameDelimiter: '~', //chunk的来源和名称生成 之间的连接符
      // enforceSizeThreshold:50000, // 超过50kb一定会单独打包。强制执行拆分的体积阈值和其他限制（minRemainingSize，maxAsyncRequests，maxInitialRequests）将被忽略。

      //缓存组，哪个模块要打包到一个组
      cacheGroups: {
        // defaultVendors: {
        //   // 组名
        //   test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
        //   priority: -10, //权重（越大越高）
        //   reuseExistingChunk: true // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
        // },

        // 修改配置
        //   //自定义打包模块
        //   vendor: {
        //     name: 'vendor',
        //     chunks: 'initial',
        //     priority: -10, //优先级，先打包到哪个组里面，值越大，优先级越高
        //     reuseExistingChunk: false,
        //     test: /node_modules\/(.*)\.js/
        //   },
        //   styles: {
        //     name: 'styles',
        //     test: /\.(scss|css)$/,
        //     chunks: 'all',
        //     minChunks: 1,
        //     reuseExistingChunk: true,
        //     enforce: true
        //   },
        //   // 第三方组件
        //   libs: {
        //     // 指定chunks名称
        //     name: 'chunk-libs',
        //     //符合组的要求就给构建venders
        //     test: /[\\/]node_modules[\\/]/,
        //     //priority:优先级：数字越大优先级越高，因为默认值为0，所以自定义的一般是负数形式,决定cacheGroups中相同条件下每个组执行的优先顺序。
        //     priority: 10,
        //     // 仅限于最初依赖的第三方
        //     chunks: 'initial'
        //   },
        //   elementUI: {
        //     // 将elementUI拆分为单个包
        //     name: 'chunk-elementUI',
        //     // 重量需要大于libs和app，否则将打包到libs或app中
        //     priority: 20,
        //     // 为了适应cnpm
        //     test: /[\\/]node_modules[\\/]_?element-ui(.*)/
        //   },
        //   //公共组件
        //   commons: {
        //     name: 'chunk-commons',
        //     // can customize your rules
        //     test: resolve('src/components'),
        //     minChunks: 3,
        //     priority: 30,
        //     //这个的作用是当前的chunk如果包含了从main里面分离出来的模块，则重用这个模块，这样的问题是会影响chunk的名称。
        //     reuseExistingChunk: true,
        //     //最大初始化加载次数，一个入口文件可以并行加载的最大文件数量，默认3
        //     maxInitialRequests: 3,
        //     //表示在分离前的最小模块大小，默认为0，最小为30000
        //     minSize: 0
        //   },
        //   echarts: { // split echarts libs
        //     name: 'chunk-echarts',
        //     test: /[\\/]node_modules[\\/]_?echarts(.*)/,
        //     priority: 40,
        //     chunks: 'async',
        //     reuseExistingChunk: true
        //   },
        //   monaco: { // split monaco libs
        //     name: 'chunk-monaco',
        //     test: /[\\/]node_modules[\\/]_?monaco(.*)/,
        //     priority: 40,
        //     chunks: 'async',
        //     reuseExistingChunk: true
        //   },
        //   'project-components': { // split project libs
        //     name: 'chunk-project-components',
        //     test: resolve('src/views/project'),
        //     priority: 50,
        //     chunks: 'async',
        //     reuseExistingChunk: true
        //   },
        //   'teachers-components': { // split teacher libs
        //     name: 'chunk-teachers-components',
        //     test: resolve('src/views/teachers'),
        //     priority: 60,
        //     chunks: 'async',
        //     reuseExistingChunk: true
        //   },
        //   'utils': { // split utils libs
        //     name: 'chunk-utils',
        //     test: resolve('src/utils'),
        //     priority: 70,
        //     chunks: 'async',
        //     reuseExistingChunk: true
        //   },
        // 相同的配置会覆盖上面的配置、没有写的配置会使用上面的配置
        default: {
          minSize: 0,
          minChunks: 2, // 提取的chunk最少被引用2次（会覆盖上面的minChunks）
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
