module.exports = {
  entry: {
    common: "./lib/common/tests/index.ts",
    objectstorage: "./lib/objectstorage/tests/index.ts"
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
