const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const shouldAnalyze = process.argv.includes("--analyze");
const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
    favicon: "./public/favicon.ico",
  }),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash].css",
  }),
];

if (shouldAnalyze) {
  const { BundleAnalyzerPlugin } = module.require("webpack-bundle-analyzer");
  plugins.push(new BundleAnalyzerPlugin());
}

const config = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".js", ",jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  devtool: "source-map",
  module: {
    rules: [
      // Babel
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      // css
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
      // assets
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset",
      },
    ],
  },
  plugins,
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPugin(), new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
};

module.exports = config;
