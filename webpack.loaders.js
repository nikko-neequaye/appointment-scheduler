const path = require('path');

// noinspection WebpackConfigHighlighting
module.exports = [
  // =========
  // = Babel =
  // =========
  // Load jsx extensions with babel so we can use
  // 'import' instead of 'require' and es6 syntax
  {
    test: /\.jsx?$/,
    include: path.resolve(__dirname, 'src'),
    loader: "babel-loader",
    options: {
      // This is a feature of `babel-loader` for Webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory: true,
      plugins: ['react-hot-loader/babel'],
    }
  },
  // =========
  // = Fonts =
  // =========
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: ["file-loader"]
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {prefix: "font", limit: 5000}
      }
    ]
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          prefix: "font",
          limit: 10000,
          mimetype: "application/octet-stream"
        }
      }
    ]
  },
  // ==========
  // = Images =
  // ==========
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/svg+xml"
        }
      }
    ]
  },
  {
    test: /\.gif/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/gif"
        }
      }
    ]
  },
  {
    test: /\.jpg/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/jpg"
        }
      }
    ]
  },
  {
    test: /\.png/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/png",
          name: "[path][name].[ext]"
        }
      }
    ]
  },
  // ==========
  // = Styles =
  // ==========
  // Global CSS (from node_modules)
  // ==============================
  {
    test: /\.css/,
    include: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "style-loader"
      },
      {
        loader: 'css-loader'
      }
    ]
  },
  // Global SASS (from app)
  // ===============================
  // Do not modularize these imports
  // (leave them as global css styles)
  {
    test: /\.(sass|scss)$/,
    include: path.resolve(__dirname, 'styles/global'),
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          camelCase: "dashes",
          importLoaders: 1
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: "inline",
        }
      },
    ]
  },
  // Local SASS css-modules
  // ======================
  {
    test: /\.(sass|scss)$/,
    exclude: path.resolve(__dirname, 'styles/global'),
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          camelCase: "dashes",
          importLoaders: 1,
          localIdentName: "[name]__[local]___[hash:base64:5]"
        }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: "inline",
        }
      },
    ]
  }

];
