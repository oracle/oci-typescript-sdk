module.exports = {
  entry: {
    integration: process.env.ENV_WEBPACK_SPECS
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "awesome-typescript-loader" }]
  },
  mode: "development",
  node: {
    fs: "empty"
  }
};
