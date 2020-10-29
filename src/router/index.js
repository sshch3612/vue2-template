import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


/**
 * 基础路由配置
 */
const baseRoutes = [

];

/**
 * 菜单路由配置
*/
const menuRoutes = {
    path: "/",
    component: () => import("@/layout/baseLayout.vue"),
    children: [
        {
            path: "",
            name: "安全管控",
        },
    ],
};
const router = new Router({
    // mode: 'history',
    routes: [
        ...baseRoutes,
        menuRoutes
    ],
});

export default router;
export { menuRoutes };