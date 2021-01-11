<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
            v-for="(item, index) in breadcrumbData"
            :key="index"
            >{{ item }}</el-breadcrumb-item
        >
    </el-breadcrumb>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import { findIndexArray } from "@/utils/util";
const { mapState } = createNamespacedHelpers("menudata");

export default {
    name: "breadcrumb",
    data() {
        return {
            breadcrumbData: [],
        };
    },
    computed: {
        ...mapState({
            menu: (state) => state.menu,
        }),
    },
    watch: {
        $route: {
            handler: function (newVal) {
                const { path } = newVal;
                console.log(newVal, 444444);
                this.breadcrumbData = findIndexArray(
                    this.menu,
                    "path",
                    "name",
                    path,
                    []
                );
            },
            immediate: true,
        },
    },
};
</script>