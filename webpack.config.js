module.exports = {
  entry: {
    blob: "./examples/javascript/blob-sample.js"
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
