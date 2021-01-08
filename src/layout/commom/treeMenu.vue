
<script>
import { menuRoutes } from "@/router";
import { v4 as uuidv4 } from "uuid";
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
                return true;
            },
        },
    },
    data() {
        return {
            activeIndex: null,
            menuRoutesData: [],
        };
    },
    mounted() {
        this.menuRoutesData = this._renderRoutemenu(menuRoutes.children);
    },
    methods: {
        _renderRoutemenu(routes) {
            if (!Array.isArray(routes)) throw new Error("路由格式解析出错");
            if (routes.length < 0) return;
            return routes.map((route) => {
                const { name, icon, path, children } = route;
                let id = uuidv4();
                if (children) {
                    return {
                        id,
                        name,
                        icon,
                        path,
                        children: this._renderRoutemenu(children),
                    };
                } else {
                    return {
                        id,
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
                        <el-submenu index={item.id}>
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
    watch: {
        // 左侧菜单和url同步
        $route: {
            handler: function () {
                this.activeIndex = this.$route.path;
            },
            immediate: true,
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
                default-active={this.activeIndex}
                collapse-transition={true}
                unique-opened={true}
            >
                {this.renderMenu(
                    this.menuData.length > 0
                        ? this.menuData
                        : this.menuRoutesData
                )}
            </el-menu>
        );
    },
};
</script>
