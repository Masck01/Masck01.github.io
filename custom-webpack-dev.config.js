const extensionReloader = require("webpack-extension-reloader");
const config = require('./custom-webpack.config')

module.exports = {
  ...config,
  mode: "development",
  plugins: [
    new extensionReloader({
      reloadPage: true,
      entries: {
        background: "background",
      },
    }),
  ],
};
