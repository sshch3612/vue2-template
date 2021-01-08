<template>
    <div class="tagsview">
        <el-tag
            :class="item.meta.tagId == currentTagid ? 'active' : ''"
            closable
            @click="click(item)"
            @close="remove(item)"
            v-for="(item, index) in tagsData"
            :key="index"
        >
            {{ item.name }}
        </el-tag>
    </div>
</template>
<script>
/**
 * 1.{name:"text",path:"分分"}
 *
 */
export default {
    name: "tagsview",
    props: {
        // 默认跳转地址
        defaultPath: {
            type: String,
            default: function () {
                return "/";
            },
        },
    },
    data() {
        return {
            tagsData: {},
            currentTagid: null,
        };
    },
    methods: {
        add() {
            console.log("add");
        },
        remove(val) {
            const { meta } = val;
            console.log("remove", meta);
            this.$delete(this.tagsData, meta.tagId);

            if (this.currentTagid === meta.tagId) {
                // 获取 tagsData 最后一个dataitem
                const lastTagid = this.getlastTagid();
                console.log(lastTagid, "lastTagid");
                if (lastTagid) {
                    const { path } = this.tagsData[lastTagid];
                    // 变更路由地址
                    this.currentTagid = lastTagid;
                    this.$router.replace({
                        path,
                    });
                } else {
                    this.$router.replace({
                        path: this.defaultPath,
                    });
                }
            }
        },
        click(val) {
            const { path } = val;
            this.$router.push({
                path,
            });
        },
        active(val) {
            console.log("激活tagsview Css样式", val);
        },
        getlastTagid() {
            const tagidsArray = Object.keys(this.tagsData);
            const length = tagidsArray.length;
            return tagidsArray[length - 1];
        },
    },
    watch: {
        $route: {
            handler: function (to, from) {
                const { name, path, meta } = to;
                if (meta.tagId) {
                    this.currentTagid = meta.tagId;
                    this.$set(this.tagsData, meta.tagId, { name, path, meta });
                }
            },
            immediate: true,
        },
    },
};
</script>
<style lang="less" >
@import "../../assets/css/scrollbar.less";
.tagsview {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 36px;
    padding-top: 3px;
    background-color: #fff;
    overflow-x: hidden;
    .scrollbar();
    &:hover {
        overflow-x: auto;
    }
    .el-tag {
        cursor: pointer;
        color: #495060;
        border: 1px solid #d8dce5;
        background: #fff;
        margin-right: 6px;
        .el-tag__close {
            color: #495060;
            &:hover {
                background: #495060;
                color: #fff;
            }
        }
        &.active {
            background: #42b983;
            color: #fff;
            .el-tag__close {
                color: #fff;
            }
        }
    }
}
</style>