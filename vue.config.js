module.exports = {
  baseUrl: '/',
  devServer: {
    port: 8081,
    // proxy: {
    //   '/api': {    //将www.exaple.com印射为/apis
    //     target: 'http://10.100.7.226',  // 接口域名
    //     secure: false,  // 如果是https接口，需要配置这个参数
    //     changeOrigin: true,  //是否跨域s
    //     pathRewrite: {
    //       '^/api': 'http://10.100.7.226'   //需要rewrite的,
    //     }
    //   }
    // }
  },
  //pages:{
    // index:{
    //   // page 的入口
    //   entry: 'src/page/index/main.js',
    //   // 模板来源
    //   template: 'public/index.html',
    //   // 在 dist/index.html 的输出
    //   filename: 'index.html',
    //   // 当使用 title 选项时，
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: 'Index'
    // },
    // page1:{
    //   // page 的入口
    //   entry: 'src/page/page1/main.js',
    //   // 模板来源
    //   template: 'public/index.html',
    //   // 在 dist/xxx.html 的输出
    //   filename: 'page1.html',
    //   // 当使用 title 选项时，
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: 'page1'
    // }
  //}
}