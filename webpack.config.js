/* eslint-env node */

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = function(env, argv) {
  const isDev = argv.mode !== "development";

  return {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: "./js/main.js",
    cache: true,
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "main.js"
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },

        {
          test: /\.(scss|sass)$/,
          use: [
            isDev
              ? { loader: "style-loader", options: { sourceMap: true } }
              : MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { sourceMap: true } },
            { loader: "sass-loader", options: { sourceMap: true } }
          ]
        },

        //   Ensure that urls in scss are loaded correctly
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        },

        // Allow shaders to be loaded via glslify
        { test: /\.(glsl|frag|vert)$/, use: ["raw-loader", "glslify"] }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({ template: "./index.html" }),

      new MiniCssExtractPlugin({ filename: "[name].[hash].css", chunkFilename: "[id].[hash].css" }),

      // Instead of using imports & file loader for Phaser assets, just copy over all resources
      new CopyWebpackPlugin([
        {
          from: "./resources",
          to: "resources/",
          ignore: [
            /* Nothing to ignore yet, but soon... */
          ]
        }
      ]),

      // Not sure why Phaser 3 made the decision to rely on globals, but so be it:
      new webpack.DefinePlugin({ WEBGL_RENDERER: true, CANVAS_RENDERER: true, PRODUCTION: !isDev })
    ],
    devtool: isDev ? "eval-source-map" : "source-map"
  };
};
