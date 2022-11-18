import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 根路由
  {
    path: "/",
    redirect: "/index/beauty",
  },
  {
    path: "/index",
    component: () => import("../components/IndexVue"),
    redirect: "/index/beauty",
    children: [
      //商品
      {
        path: "goods",
        component: () => import("../components/IndexGods"),
      },
      {
        path: "beauty",
        component: () => import("../components/IndexMain"),
      },
      {
        path: "festival",
        component: () => import("../components/IndexFestival"),
      },
      {
        path: "classfiy",
        component: () => import("../components/ClassifVue"),
      },
    ],
  },
  // 配置登录路由
  {
    path: "/login",
    component: () => import("../components/LoginVue"),
    redirect: "/login/message",
    // 允许直接通过
    meta: true,
    children: [
      {
        path: "message",
        component: () => import("../components/LoginMain"),
        meta: true,
      },
      {
        path: "tels",
        component: () => import("../components/LoginTel"),
        meta: true,
      },
    ],
  },
  // 配置注册路由
  {
    path: "/rej",
    component: () => import("../components/RejVue"),
    meta: true,
  },
  // 配置注册成功路由
  {
    path: "/success",
    component: () => import("../components/SuccessVue"),
    meta: true,
  },
];

const router = new VueRouter({
  routes,
});
// 配置登录的路由守卫
router.beforeEach((to, from, next) => {
  // 如果存在meta允许放行标识则放行
  if (to.meta === true) {
    next();
  } else {
    // 从本地存储里获取token
    let token = window.localStorage.getItem("token");
    // 获取存储token的开始时间
    const tokenStartTime = window.localStorage.getItem("tokenStartTime");
    // 后台给出的token有效时间，一个星期 单位 是秒
    // 定义6天过期，用户重新登录
    const timeOver = 6 * 24 * 3600 * 1000;
    // 当前时间
    const date = new Date().getTime();
    // 如果大于说明是token过期了
    if (date - tokenStartTime > timeOver) {
      token = null;
    }
    // 判断token是否为空如果为空则跳转到登录页 如果有则放行
    if (token === null || token === "") {
      // 可以弹窗显示登录过期了
      next({ path: "/login/message" });
    } else {
      next();
    }
  }
});
export default router;
