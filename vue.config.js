const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': 'src/assets',
        'common': 'src/common',
        'components': 'src/components',
        'network': 'src/network',
        'views': 'src/views',
      }
    }
  }
}
// import join from 'path';//引入path模块
// function resolve(dir) {
//   return join(__dirname, dir)//path.join(__dirname)设置绝对路径
// }


// export function chainwebpack(config) {
//   config.resolve.alias
//     //set第一个参数：设置的别名，第二个参数：设置的路径
//     .set("@", resolve("./src"))
//     .set("components", resolve("./src/components"))
//     .set("common", resolve("./src/common"))
//     .set("assets", resolve("./src/assets"))
//     .set("views", resolve("./src/views"))
//     .set("network", resolve("./src/network"));
//   //注意 store 和 router 没必要配置
// }