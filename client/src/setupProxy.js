const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Remove the "/api" prefix
      },
    })
  );
};

// // "proxy": "http://localhost:8000/api/"
