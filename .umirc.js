
// ref: https://umijs.org/config/
const { pageRoutes } = require('./router.config')
const { NODE_ENV } = process.env;
const isApi = NODE_ENV === 'development'
  ? '147.147.147.147'
  : null
isApi !== null
  ? console.log('********当前所处环境:', isApi, '***********')
  : null
export default {
  treeShaking: true,
  routes: pageRoutes,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'my-umi-configuration',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  define: {
    "process.env.apiUrl": '这是development环境',
  },
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
  publicPath: './',
  history: 'hash',
}
