const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'https://l94wc201h.execute-api.ap-sout0heast-2.amazonaws.com',
      changeOrigin: true
    })
  )
}