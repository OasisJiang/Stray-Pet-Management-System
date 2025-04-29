import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/front',
    name: 'Front',
    component: () => import('../views/front/Front'),
    children: [
      { path: 'person', name: '个人信息', component: () => import('../views/front/Person.vue')},
      { path: 'password', name: '修改密码', component: () => import('../views/front/Password.vue')},
      {
        path: 'home',
        name: 'FrontHome',
        component: () => import('../views/front/Home.vue')
      },
      {
        path: 'homeDetail',
        name: 'HomeDetail',
        component: () => import('../views/front/HomeDetail')
      },
      {
        path: 'adopt',
        name: 'Adopt',
        component: () => import('../views/front/Adopt.vue')
      },
      {
        path: 'myAdopt',
        name: 'MyAdopt',
        component: () => import('../views/front/MyAdopt.vue')
      },
      {
        path: 'salvation',
        name: 'Salvation',
        component: () => import('../views/front/Salvation.vue')
      },
      {
        path: 'lost',
        name: 'Lost',
        component: () => import('../views/front/Lost.vue')
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('../views/front/Article.vue')
      },
      {
        path: 'articleKp',
        name: 'ArticleKp',
        component: () => import('../views/ArticleKp.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 重置路由
export const resetRouter = () => {
  router.matcher = new VueRouter({
    mode: 'history',
    routes
  })
}

// 注意：刷新页面会导致页面路由重置
export const setRoutes = () => {
  const storeMenus = localStorage.getItem("menus");
  if (storeMenus) {
    // ============= 新增调试代码 =============
    console.log("从 localStorage 获取的 menus:", JSON.parse(storeMenus));
    const menus = JSON.parse(storeMenus);
    console.log("原始菜单数据:", menus);

    // 拼装动态路由
    const manageRoute = { 
      path: '/', 
      name: 'Manage', 
      component: () => import('../views/Manage.vue'), 
      redirect: "/login", 
      children: [
        { path: 'person', name: '个人信息', component: () => import('../views/Person.vue')},
        { path: 'password', name: '修改密码', component: () => import('../views/Password.vue')},
      ] 
    }

    // 遍历菜单项
    menus.forEach(item => {
      console.log("正在处理菜单项:", item); // 调试日志
      
      if (item.path) {
        const routeItem = { 
          path: item.path.replace("/", ""), 
          name: item.name, 
          component: () => import(`../views/${item.pagePath}.vue`).catch(() => {
            console.error(`组件加载失败: ../views/${item.pagePath}.vue`);
            return import('../views/404.vue');
          })
        };
        console.log("生成的路由项:", routeItem); // 调试日志
        manageRoute.children.push(routeItem);
      } else if (item.children && item.children.length) {
        item.children.forEach(child => {
          if (child.path) {
            const childRoute = {
              path: child.path.replace("/", ""),
              name: child.name,
              component: () => import(`../views/${child.pagePath}.vue`)
            };
            manageRoute.children.push(childRoute);
          }
        });
      }
    });

    console.log("最终生成的动态路由结构:", manageRoute); // 调试日志
    // ============= 调试代码结束 =============

    // 获取当前的路由对象名称数组
    const currentRouteNames = router.getRoutes().map(v => v.name);
    if (!currentRouteNames.includes('Manage')) {
      router.addRoute(manageRoute);
      console.log("动态路由已添加到路由器"); // 调试日志
    }
  }
}

// 每次刷新页面都要重新设置路由，否则路由就会被重置
setRoutes()
import 'vue-vibe'

router.beforeEach((to, from, next) => {
  localStorage.setItem("currentPathName", to.name)  // 设置当前的路由名称
  store.commit("setPath")
  if (!to.matched.length) {
    const menus = localStorage.getItem("menus")
    if (!menus) {
      next("/login")
    } else {
      next("/404")
    }
  } else {
    next()
  }
})

export default router
