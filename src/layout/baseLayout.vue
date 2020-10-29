<template>
    <el-container style="height: 100vh">
        <el-aside
            :class="[isCollapse ? 'el-aside-collapse' : '']"
            :width="isCollapse ? '64px' : '200px'"
            style="background-color: rgb(255, 255, 255)"
        >
            <template>
                <div v-if="logo" class="el-aside-logo">
                    <img
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        alt=""
                    />
                </div>
                <tree-menu :collapse="isCollapse"></tree-menu>
            </template>
        </el-aside>

        <el-container>
            <el-header>
                <div v-if="collapse" class="el-layout-collapse">
                    <span v-show="!isCollapse" @click="isCollapse = true">
                        <i class="el-icon el-icon-s-fold"></i>
                    </span>
                    <span v-show="isCollapse" @click="isCollapse = false">
                        <i class="el-icon el-icon-s-unfold"></i>
                    </span>
                </div>
            </el-header>

            <el-main>
                <slot></slot>
            </el-main>
        </el-container>
    </el-container>
</template>
<style lang="less" scoped>
.el-header {
    background-color: rgb(238, 241, 246);
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
    transition: all 0.5s ease-in;
    &-collapse {
        width: 64px;
    }
}
.el-aside-logo {
    display: flex;
    justify-content: center;
    padding: 6px 0;
    align-items: center;
    height: 60px;
    img {
        height: 100%;
        width: auto;
    }
}
.el-menu {
    transition: all 0.5s ease-in;
}
.el-layout-collapse {
    .el-icon {
        font-size: 22px;
        cursor: pointer;
    }
}
</style>
<script>
import treeMenu from "./commom/treeMenu";
export default {
    components: {
        treeMenu,
    },
    props: {
        menuData: {
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
            // 控制菜单收缩
            type: Boolean,
            default: function () {
                return true;
            },
        },
        logo: {
            type: Boolean,
            default: function () {
                return true;
            },
        },
    },
    data() {
        return {
            isCollapse: true,
        };
    },
};
</script>