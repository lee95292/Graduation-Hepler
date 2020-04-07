module.exports = {
  // 가장 처음 읽을 스크립트파일
  // 여기서부터 import 되어있는 다른 스크립트를 불러온다.
  entry: "./src/client/index.js",

  // 파일을 합치고 ./public/bundle.js 에 저장한다.
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },

  // ES6 문법과 JSX 문법을 사용한다
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
  resolveLoader: {
    moduleExtensions: ["-loader"],
  },
  devServer: {
    contentBase: __dirname + "/public/",
    inline: true,
    hot: true,
    proxy: {
      "**": "http://localhost:4000",
    },
    host: "localhost",
    port: 9000,
  },
};
