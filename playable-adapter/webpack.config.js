const path = require('path');

module.exports = {
  entry: {
    [path.join('.', 'dist', 'playable-adapter')]: './src/index.ts',
    [path.join('..', 'demos', 'cocoscreator3-ball', 'build-templates', 'wechatgame', 'playable-adapter')]: './src/index.ts',
    [path.join('..', 'demos', 'minigame-demo', 'playableDemo', 'playable-adapter')]: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, ''),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js'], // 添加此行以解析类型'.ts'和'.js'的文件
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'none',
};