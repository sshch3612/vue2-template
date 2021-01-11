import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { getToken } from "@/utils/token";


NProgress.configure({ showSpinner: true }); // NProgress Configuration



/**
 * 1.token 判断是否登录
 * 2.左侧菜单信息
 *
 */
const whiteList = ["/login"]; // 不用检测权限白名单
// const homePath = "/home"; // 预留的不需要带跳转信息的
// 跳转到login逻辑
// const goToLogin = (to, next) => {
//     // home不处理
//     const fullUrl = to.path;
//     to.path === homePath ? next("/login") : next(`/login?redirect=${encodeURI(fullUrl)}`);
// };

router.beforeEach(async (to, from, next) => {
    // start progress bar
    console.log(NProgress, 8888888);
    NProgress.start();


    // 判断是否已经登录
    const hasToken = getToken();

    if (hasToken) {
        next();
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            // 在白名单里直接跳转
            next();
        } else {
            // 其余的统一跳转到登录页面 但是home不需要带redirect
            // goToLogin(to, next);
            // NProgress.done();
            next();
        }
    }
});

router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});


export default router;