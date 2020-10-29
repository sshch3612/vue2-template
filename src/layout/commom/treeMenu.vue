
<script>
import { menuRoutes } from "@/router";
export default {
    name: "treeMenu",
    props: {
        menuData: {
            type: Array,
            default: function () {
                return [];
            },
        },
        collapse: {
            type: Boolean,
            default: function () {
                return false;
            },
        },
    },
    methods: {
        _renderRoutemenu(routes) {
            if (!Array.isArray(routes)) throw new Error("路由格式解析出错");
            if (routes.length < 0) return;
            return routes.map((route) => {
                const { name, icon, path, children } = route;
                if (children) {
                    return {
                        name,
                        icon,
                        path,
                        children: this._renderRoutemenu(children),
                    };
                } else {
                    return {
                        name,
                        icon,
                        path,
                    };
                }
            });
        },
        renderMenu(treeMenu) {
            if (!Array.isArray(treeMenu)) throw new Error("菜单结构出错!");
            if (treeMenu.length < 0) return;

            return treeMenu.map((item, index) => {
                if (item.children) {
                    return (
                        <el-submenu index={item.path}>
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">{item.name}</span>
                            </template>
                            {this.renderMenu(item.children)}
                        </el-submenu>
                    );
                } else {
                    return (
                        <el-menu-item key={item.key} index={item.path}>
                            <i class="el-icon-setting"></i>
                            <span slot="title">{item.name}</span>
                        </el-menu-item>
                    );
                }
            });
        },
    },
    render() {
        return (
            <el-menu
                collapse={this.collapse}
                style={{
                    width: this.collapse ? "64px" : "200px",
                    border: "none",
                }}
                router={true}
                collapse-transition={true}
            >
                {this.renderMenu(
                    this.menuData.length > 0
                        ? this.menuData
                        : this._renderRoutemenu(menuRoutes.children)
                )}
            </el-menu>
        );
    },
};
</script>
