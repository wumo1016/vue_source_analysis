
function resolve(dir) {
  return require('path').join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 1016,
  },
  productionSourceMap: false,
  assetsDir: 'static',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  lintOnSave: false,
}
