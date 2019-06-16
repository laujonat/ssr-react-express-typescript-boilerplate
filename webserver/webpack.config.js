const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
// Webpack plugin that runs TypeScript type checker on a separate process.
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

// https://github.com/Roilan/react-server-boilerplate/blob/master/webpack.config.js
const isProduction = process.env.NODE_ENV === "production";

const commonPlugins = [
  new ForkTsCheckerWebpackPlugin(),
  new TsconfigPathsPlugin({
    configFile: "./tsconfig.json",
    compiler: "typescript"
  })
];

const productionPlugins = isProduction
  ? [
      new webpack.DefinePlugin({
        "process.env": { NODE_ENV: JSON.stringify("production") }
      })
    ]
  : [
      new webpack.DefinePlugin({
        "process.env": { NODE_ENV: JSON.stringify("development") }
      })
    ];

const clientPlugins = isProduction
  ? productionLoaders.concat([
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        sourceMap: false
      })
    ])
  : [];

/* Modules  */
const commonModules = [
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

const mergedModules = commonModules.concat(js, ts);

const serverConfig = {
  mode: "development",
  node: {
    fs: "empty"
  },
  devtool: "inline-source-map", /* Extract ts source maps from tsconfig. */
  entry: {
    "index.ts": path.resolve(__dirname, "server/index.ts")
  },
  output: {
    path: path.resolve(__dirname, "./build/server/js/out"),
    filename: "lib.node.js",
    libraryTarget: "commonjs"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  target: "node",
  module: {
    rules: mergedModules
  },
  plugins: productionPlugins.concat(commonPlugins),
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: [
    nodeExternals({
      react: "React",
      "react-dom": "ReactDom"
    })
  ]
};

const clientConfig = {
  mode: "development",
  target: "web",
  devtool: "inline-source-map", /* Extract ts source maps from tsconfig. */
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
    dns: "empty"
  },
  entry: {
    "index.tsx": path.resolve(__dirname, "client/index.tsx")
  },
  module: {
    rules: mergedModules
  },
  plugins: clientPlugins,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  output: {
    path: path.resolve(__dirname, "./build/client/js/out"),
    filename: "lib.js"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};

module.exports = [serverConfig, clientConfig];
