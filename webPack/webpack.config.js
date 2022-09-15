// webpack配置文件
const path = require('path')

module.exports = {
  // 入口文件
  entry: './src/main.js',
  /** entry完整写法
      entry:{
        main:'./src/main.js'
      }
  */
  // 输出
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出路径
    filename: './js/bundle.js' //编译后的文件
  },
  // 模式（告知 webpack 使用相应模式的内置优化）
  mode: 'development', // node development production:默认
  // 模块
  module: {
    rules: [
      // 解析less（不完美：是style内联样式）
      {
        test: /\.less$/, // 匹配所有的less文件
        use: [
          'style-loader',  // 用于在html文档中创建一个style标签，将样式塞进去  
          'css-loader',   // 将less编译后的css转换成为commonJs的一个模块
          'less-loader'   //  将less编译为css，但不生成单独的css文件，在内存中
        ]
      },
      // js 语法检查
      {
        test: /\.js$/, // 匹配所有的js文件
        exclude: /node_modules/, // 不包括node_modules里面的js
        enforce: 'pre', //提前加载使用
        use: ['eslint-loader'],
        // options: {
        //   transpileOnly: true // 会缓存在内存，减少构建时间
        // }
      },
      // js 语法转换（es6 --> es5）
      {
        test: /\.js$/, // 匹配所有的js文件
        exclude: /node_modules/, // 不包括node_modules里面的js
        use:
        {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'usage', //使用corejs的方式'usage' 表示按需加载
                corejs: '3', //指定corejs的版本
                targets: { // 兼容浏览器的版本
                  chrome: '58',
                  // ie: '10' //不支持const,箭头函数,没有Promise
                }
              }]
            ],
            cacheDirectory: true  //开启babel缓存
          }
        }
        ,
      },
      // 使用url-loader 处理样式文件中的图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // limit: 8192, // 8kb 以下的图片转base64
              // outputPath: 'iamges', // 图片输出目录
              // publicPath: '../dist/images', //决定图片的url路径
              // name: '[hash:5].[ext]' // 修改文件名称，取hash值得前5位， [ext]文件扩展名
            }
          }
        ]
      }
    ]
  }
}