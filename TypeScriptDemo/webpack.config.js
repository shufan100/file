// webpack配置
const path = require('path'); // nodejs中的一个模块，作用：用来拼接路径

// webpack中的所有配置信息都应该写在这里面
module.exports = {
  // 指定入口文件
  entry: './src/index.ts',

  // 打包文件所在目录（项目打包完要放在哪个文件夹下）
  output: {
    // path: './dist'                           // 两者一样
    path: path.resolve(__dirname, 'dist'),      // 指定打包后的文件目录
    filename: 'bundle.js',                      // 打包ts文件后的文件名字
  },

  // webpack打包时要使用的模块
  module: {
    // 指定要加载的规则(会有很多种文件，现在配置编译ts的规则)
    rules: [
      {
        test: /\.ts$/,                    //指规则生效的文件(用正则表达式去匹配所有以ts结尾的文件)
        use: 'ts-loader',                 //用ts-loader去处理以ts结尾的文件
        exclude: /node-modules/,         //哪些文件不处理,不编译

      }
    ]
  }


}