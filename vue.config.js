module.exports = {
  devServer: {
    proxy: {
      '/validation': { //接口根目录
        target: 'http://192.168.7.105:9094/', //ip
        changeOrigin: true
      }
    }
  },
  //改为false，否则生产环境里可以看到所有的源码
  productionSourceMap: false,
  // 关掉lint检查
  lintOnSave: false,
  //开启调试
  // configureWebpack: {
  //   devtool: 'source-map'
  // },
  // chainWebpack: config => {
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       args[0].title = 'chaindigg'
  //       return args
  //     })
  // }

}