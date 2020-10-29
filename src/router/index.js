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
 *
*/
const menuRoutes = {
    path: "/",
    component: () => import("@/layout/baseLayout.vue"),
    children: [
        {
            path: "/",
            name: "首页",
        },
        {
            path: "",
            name: "编辑器(二次开发)",
            children: [
                {
                    path: "/markdown",
                    name: "MarkDown编辑器",
                    component: () => import("@/components/markdown/index.vue")
                }
            ]
        },
    ],
};
const router = new Router({
    // mode: 'history',
    routes: [
        ...baseRoutes,
        {
            ...menuRoutes,
            children: generatorRoute(menuRoutes.children)
        }
    ],
});

/**
 * 菜单路由展开
 **/
function generatorRoute(routes) {
    if (!Array.isArray(routes)) throw new Error("菜单结构解析出错");
    let Queue = [...routes];
    const result = [];
    while (Queue.length) {
        const queueItem = Queue.shift();
        const { children, component } = queueItem;
        if (typeof component === "undefined" && Array.isArray(children)) {
            Queue = Queue.concat(children);
        } else {
            result.push(queueItem);
        }
    }
    return result;
}
export default router;
export { menuRoutes };