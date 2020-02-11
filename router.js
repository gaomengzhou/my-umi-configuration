module.exports = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home/', redirect: '/home' },
      { path: '/home', component: './home/index', title: '首页' },
      { path: '/mine', component: './mine/index', title: '个人资料' },//redirect:'./mine'
      { path: '/mine/detail', component: './mine/detail', title: '个人详情' },
      { path: '/mine/test1', component: './mine/test1' },
      { path: '/category', component: './category', title: '分类' },
      { path: '/shop', component: './shop/index', title: '购物车' },
      { component: '404', title: '找不到页面' },
    ]
  }
]
