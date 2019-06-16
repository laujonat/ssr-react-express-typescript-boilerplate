const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
// Webpack plugin that runs TypeScript type checker on a separate process.
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// https://github.com/Roilan/react-server-boilerplate/blob/master/webpack.config.js
const isProduction = process.env.NODE_ENV === "production";
const productionPluginDefine = isProduction
  ? [
      new webpack.DefinePlugin({
        "process.env": { NODE_ENV: JSON.stringify("production") }
      })
    ]
  : [];

const clientLoaders = isProduction
  ? productionPluginDefine.concat([
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        sourceMap: false
      }),
      new ForkTsCheckerWebpackPlugin()
    ])
  : [];

const commonLoaders = [
  {
    test: /\.json$/,
    loader: "json-loader"
  }
];

const js = {
  test: /\.js$/,
  exclude: [/node_modules/],
  use: {
    loader: "babel-loader",
    options: {
      presets: ["react", "es2015"],
      plugins: ["transform-class-properties"]
    }
  }
};

const ts = {
  test: /\.(ts|tsx)?$/,
  exclude: [/node_modules/],
  loader: "ts-loader",
  options: {
    transpileOnly: true
  }
};

const serverConfig = {
  mode: "development",
  node: {
    fs: "empty"
  },
  devtool: "inline-source-map",
  entry: {
    "index.ts": path.resolve(__dirname, "server/index.ts")
  },
  output: {
    path: path.resolve(__dirname, "./build/dist"),
    filename: "lib.node.js",
    libraryTarget: "commonjs"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  target: "node",
  module: {
    rules: [js, ts]
  },
  plugins: productionPluginDefine,
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: [nodeExternals()]
};

const clientConfig = {
  mode: "development",
  target: "web",
  devtool: "inline-source-map",
  node: { 
    fs: 'empty', 
    net: 'empty',
    tls: 'empty',
    dns: 'empty' 
  },
  entry: {
    // chunk by pages
    "index.tsx": path.resolve(__dirname, "client/index.tsx")
  },
  module: {
    rules: [js, ts]
  },
  plugins: clientLoaders,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  output: {
    path: path.resolve(__dirname, "./build/dist"),
    filename: "lib.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};

module.exports = [serverConfig, clientConfig];
