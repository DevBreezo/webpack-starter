const webpack = require("webpack");

const path = require("path");


module.exports = {
  entry: {
    app: "./src/index.js",
    bootstrap: bootstrapConfig
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  mmodule: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loadrules: [
              {
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: /node_modules|bower_components/,
                loader: "eslint-loader",
              },
              {
                test: /\.s?css$/,
                use: ['style-loader', {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    importLoaders: 2,
                    sourceMap: true,
                    localIdentName: "[path][name]__[local]--[hash:base64:5]"
                  }
                },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true,
                      includePaths: ['./']
                    }
                  }
                ]
              },

              {
                test: /\.jsx?$/,
                exclude: /node_modules|bower_components/,
                loader: "babel-loader",
                options: {
                  presets: ['env', 'react', 'stage-2']
                }
              },
            ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    stats: "errors-only"
  },
  
};
