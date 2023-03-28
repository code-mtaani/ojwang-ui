const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_OJWANG_API_HTTP_SCHEME}://${process.env.REACT_APP_OJWANG_API_BASE_URL}`,
      changeOrigin: true,
    })
  );
};