const publicPath = process.env.NODE_ENV === 'development' ? '/' : './'

module.exports = {
  publicPath,
  devServer: {
    // port: 8092
  }
}
