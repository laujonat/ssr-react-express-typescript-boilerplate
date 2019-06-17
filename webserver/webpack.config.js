const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
// Code minification
const TerserPlugin = require("terser-webpack-plugin");
// Webpack plugin that runs TypeScript type checker on a separate process.
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// Load modules contained in "paths" in tsconfig.json
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// https://github.com/Roilan/react-server-boilerplate/blob/master/webpack.config.js
const isProduction = process.env.NODE_ENV === "production";
const minify = require("html-minifier").minify;
// Define custom loading logic without suffering the performance penalty that script-based resource loaders incur. 
const PreloadWebpackPlugin = require('preload-webpack-plugin');
// Generate static HTML file on build
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV;
const config = {
  mode: env || "development"
};

const commonPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ForkTsCheckerWebpackPlugin(),
  new webpack.HashedModuleIdsPlugin(),
  new HtmlWebpackPlugin({
    hash: true,
    meta: {
      viewport: "width=device-width, initial-scale=1.0",
      "Content-Security-Policy": {
        "http-equiv": "Content-Security-Policy",
        content: ""
      },
      template: "./server.html.ts",
      minify: {
        collapseWhitespace: true,
        collapseWhitespace: true,
        removeComments: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }
  })
];

const tsPaths = [
  new TsconfigPathsPlugin({
    baseUrl: "./",
    configFile: "./tsconfig.json"
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
  ? productionPlugins.concat([new webpack.optimize.OccurrenceOrderPlugin()])
  : [];

/* Modules  */
const commonModules = [
  {
    test: /\.json$/,
    type: "javascript/auto",
    loader: "json-loader"
  },
  {
    test: /\.s(a|c)ss$/,
    exclude: /\.module.(s(a|c)ss)$/,
    loader: `style!css`
  }
];

const js = {
  test: /\.js$/,
  exclude: [/node_modules/],
  use: {
    loader: "babel-loader",
    options: {
      presets: ["react", "env"],
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
  mode: config.mode,
  node: {
    fs: "empty"
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  devtool: "inline-source-map" /* Extract ts source maps from tsconfig. */,
  entry: {
    "index.ts": path.resolve(__dirname, "server/index.ts")
  },
  output: {
    path: path.resolve(process.cwd(), "build/js"),
    filename: "[name].[chunk].bundle.js",
    chunkFilename: "[id].[chunkhash:4].bundle.js",
    libraryTarget: "umd"
  },
  resolve: {
    plugins: tsPaths,
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  target: "node",
  module: {
    rules: mergedModules
  },
  performance: {
    hints: "warning",
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js");
    }
  },
  plugins: productionPlugins.concat(commonPlugins),
  externals: [
    nodeExternals({
      react: "React",
      "react-dom": "ReactDom"
    })
  ]
};

const clientConfig = {
  mode: config.mode,
  target: "web",
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
    dns: "empty"
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  entry: {
    "index.tsx": path.resolve(__dirname, "client/index.tsx")
  },
  output: {
    path: path.resolve(process.cwd(), "build"),
    filename: "[name].[chunk:4].bundle.js",
    chunkFilename: "[id].[chunkhash:4].bundle.js",
    libraryTarget: "umd"
  },
  performance: {
    hints: "warning",
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith(".js");
    }
  },
  module: {
    rules: mergedModules
  },
  plugins: clientPlugins,
  resolve: {
    plugins: tsPaths,
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          },
          enforce: true,
          reuseExistingChunk: true
        }
      }
    }
  }
};

module.exports = [serverConfig, clientConfig];
