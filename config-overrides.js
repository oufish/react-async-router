const { override, addWebpackAlias,addLessLoader } = require('customize-cra');
const path = require('path')
module.exports = override(
    addWebpackAlias({
        "@": path.resolve(__dirname, "src")
    }),
    addLessLoader({
        javascriptEnabled: true
     })
);