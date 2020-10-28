
<script>
export default {
    name: "treeMenu",
    props: {
        pathConfig: {
            type: Array,
            default: function () {
                return [
                    {
                        path: "ee",
                        icon: "ee",
                        key: "1",
                        name: "test1",
                    },
                    {
                        path: "ee",
                        icon: "ee",
                        name: "test2",
                        key: "2",
                        children: [
                            {
                                path: "ee",
                                icon: "ee",
                                key: "21",
                                name: "test21",
                            },
                            {
                                path: "ee",
                                icon: "ee",
                                key: "22",
                                name: "test22",
                                children: [
                                    {
                                        path: "ee",
                                        icon: "ee",
                                        key: "21",
                                        name: "test21",
                                        children: [
                                            {
                                                path: "ee",
                                                icon: "ee",
                                                key: "211",
                                                name: "test21",
                                            },
                                            {
                                                path: "ee",
                                                icon: "ee",
                                                key: "212",
                                                name: "test21",
                                            },
                                        ],
                                    },
                                    {
                                        path: "ee",
                                        icon: "ee",
                                        key: "22",
                                        name: "test21",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: "ee",
                        icon: "ee",
                        name: "test3",
                        key: "3",
                    },
                ];
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
        renderMenu(treeMenu) {
            if (!Array.isArray(treeMenu)) throw new Error("菜单结构出错!");
            if (treeMenu.length < 0) return;

            return treeMenu.map((item, index) => {
                if (item.children) {
                    return (
                        <el-submenu index={item.key}>
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">{item.name}</span>
                            </template>
                            {this.renderMenu(item.children)}
                        </el-submenu>
                    );
                } else {
                    return (
                        <el-menu-item key={item.key} index={item.key}>
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
                {this.renderMenu(this.pathConfig)}
            </el-menu>
        );
    },
};
</script>
