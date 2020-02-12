
// ref: https://umijs.org/config/
const { NODE_ENV } = process.env;
const isApi = NODE_ENV === 'development'
  ? '147.147.147.147'
  : null
isApi !== null
  ? console.log('********当前所处环境:', isApi, '***********')
  : null
// RouteConfig
const routeConfig = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', redirect: '/home', },
      { path: '/home', component: './home/index', title: '首页' },
      { path: '/mine', component: './mine/index', title: '个人资料' },
      { path: '/mine/detail', component: './mine/detail', title: '个人详情' },
      { path: '/mine/test1', component: './mine/test1' },
      { path: '/mine/test2', component: './mine/test2' },
      { path: '/mine/test3', component: './mine/test3' },
      { path: '/category', component: './category', title: '分类' },
      { path: '/shop', component: './shop/index', title: '购物车' },
      { path: '/exception/403', component: './exception/403' },
      { path: '/exception/500', component: './exception/500' },
      { component: '404', title: '找不到页面' },
    ]
  }
]

export default {
  treeShaking: true,
  routes: routeConfig,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      // dynamicImport: false,
      title: 'my-umi-configuration',
      // dll: {
      //   exclude: [],
      //   include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"],
      // },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      esLint: true,
      targets: {
        ie: 10,
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

  // 接口代理示例
  //  proxy: {
  //   "/api/v1/weather": {
  //     "target": "https://api.seniverse.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api/v1/weather": "/v3/weather" }
  //   },
  //   "/api/v2": {
  //     "target": "http://192.168.0.110",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api/v2" : "/api/v2" }
  //   }
  // },

  publicPath: './',
  history: 'hash',
  chainWebpack(config) {
    // config.module.routes = pageRoutes
    // 配置eslint
    config.module.rule('eslint')
      .test(/\.(js|mjs|jsx)$/)
      .enforce('pre')
      .use(['eslint-loader'], {
        options: {
          formatter: require('react-dev-utils/eslintFormatter'),
          eslintPath: require('eslint')
        }
      })
      .loader(require.resolve('eslint-loader'))
  },
}
