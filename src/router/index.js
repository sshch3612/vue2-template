import Vue from "vue";
import Router from "vue-router";

// fix Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/markdown".
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};


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
            path: "",
            name: "首页",
            children: [{
                path: "/",
                name: "首页二级",
                meta: {
                    tagId: "home"
                },
                component: () => import("@/views/index.vue"),
            }]
        },
        {
            path: "",
            name: "编辑器(二次开发)",
            children: [{
                path: "",
                name: "二级导航",
                children: [
                    {
                        path: "/markdown",
                        name: "MarkDown编辑器",
                        meta: {
                            tagId: "markdown"
                        },
                        component: () => import("@/components/markdown/index.vue")
                    }
                ]
            },
            {
                path: "",
                name: "二级导航12",
                children: [
                    {
                        path: "/ceshi",
                        name: "测试",
                        meta: {
                            tagId: "ceshi"
                        },
                        component: () => import("@/views/index.vue"),
                    }
                ]
            }
            ]

        },
        {
            path: "",
            name: "Table",
            children: [
                {
                    path: "/baseTable",
                    name: "基础图表",
                    meta: {
                        tagId: "baseTable"
                    },
                    component: () => import("@/views/Table/baseTable.vue"),
                }
            ]
        }
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