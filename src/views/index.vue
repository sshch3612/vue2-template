<template>
    <div class="test">
        <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            @input="handleinput"
        />
    </div>
</template>
<script>
export default {
    computed: {
        value: {
            get() {
                return this.$store.state.test.count;
            },
            set(newVal) {
                this.$store.commit("test/change", newVal);
            },
        },
    },
    methods: {
        handleinput(val) {
            console.log("input", val);
        },
    },
};
</script>
<style lang="less" scoped>
</style>