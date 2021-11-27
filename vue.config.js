// let proxyObj = {}
// proxyObj['/'] = {
//   //websocket
//   ws:false,
//   //代理到哪里去
//   target:'http://localhost:8081',
//   //发送请求头host 会被设置target
//   changeOrigin:true,
//   //不重写请求地址
//   pathRewrite:{
//     '^/':'/'
//   }
// }
// module.exports = {
//   devServer:{
//     host:'localhost',
//     port:8080,
//     Proxy:proxyObj
//   }
// }