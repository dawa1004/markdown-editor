const path = require('path')

module.exports = {
  entry:'./src/index.tsx', // 最初に読み込むファイル .tsx→TypeScript + JSX を使用しているファイル
  module: {
    rules: [
      {
        // .tsx で終わるファイルに対して、ts-loader を実行する
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/, // 除外するファイル
      },
    ],
  },
  resolve: { // モジュールとして解決するファイルの拡張子を指定→外部ファイルやライブラリ（node_modules 以下のファイル）を使うファイルの拡張子
    extensions: ['.js', '.ts', 'tsx'],
  },
  output: { // 出力するファイルの設定
    // webpack.config.js の置いてあるディレクトリにある dist というディレクトリに対して、ファイル名 index.js で出力
    path:path.resolve(__dirname,'dist'),
    filename:'index.js',
    publicPath:'dist/',
  },
  devServer: {
    hot: true, // ファイルを変更すると自動的にブラウザに反映させるフラグ
    open: true, //起動時にブラウザで開くフラグ
  }
}
