module.pageRoutes = [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      { path: '/', redirect: './home' },
      {
        path: '/mine',
        component: './mine/index',
        // redirect:'./mine',
      },
      { path: '/mine/detail', component: './mine/detail' },
      { path: '/mine/login', component: './mine/login' },
      { path: '/mine/outs', component: './mine/outs' },
      { path: '/mine/test1', component: './mine/test1' },
      { path: '/mine/test2', component: './mine/test2' },
      { component: '404', title: '页面没找到' },
    ]
  }
]

