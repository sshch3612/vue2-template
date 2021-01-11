<template>
    <div class="echartbase">
        <div
            class="echartbase-contain"
            :style="{ width: width + 'px', height: height + 'px' }"
            ref="echartbase"
        ></div>
    </div>
</template>
<script>
/**
 *  Echart全局配置
 *  title 标题名称
 *  legendData  图例组件Data
 *  restoption = {
 *  title // echart组件标题
 *  legend // 图例组件
 *  grid  // 直角坐标系样式
 * }
 */

export default {
    name: "echartbase",
    props: {
        title: {
            type: [String, Object],
            default: function () {
                return "";
            },
        },
        legendData: {
            type: Array,
            default: function () {
                return [
                    "直接访问",
                    "邮件营销",
                    "联盟广告",
                    "视频广告",
                    "搜索引擎",
                ];
            },
        },
        width: {
            type: Number,
            default: function () {
                return 1200;
            },
        },
        height: {
            type: Number,
            default: function () {
                return 600;
            },
        },
        color: {
            type: Array,
            default: function () {
                return [
                    "rgba(98, 223, 205, 1)",
                    "rgba(52, 183, 243, 1)",
                    "rgba(255, 84, 92, 1)",
                    "rgba(238, 131, 64, 1)",
                    "rgba(255, 192, 0, 1)",
                    "rgba(104, 136, 247, 1)",
                ];
            },
        },
        options: {
            type: Object,
            default: function () {
                return {};
            },
        },
    },
    data() {
        return {
            echartInstance: null, // echart实例
        };
    },
    methods: {
        init() {
            const _this = this;
            let options = _this.setOptions();
            this.$nextTick(() => {
                this.echartInstance = _this.$echarts.init(
                    _this.$refs.echartbase
                );
                this.echartInstance.setOption(options);
                window.addEventListener("resize", this.resize);
            });
        },
        setOptions() {
            let titleData = {
                left: "center",
                textStyle: {
                    fontSize: 30,
                    color: "#fff",
                },
            };
            if (typeof this.title === "string") {
                titleData.text = this.title;
            } else {
                titleData = { ...titleData, ...this.title };
            }
            return {
                title: titleData,
                grid: {
                    left: "3%",
                    right: "3%",
                    bottom: "3%",
                    top: "60",
                    containLabel: true,
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                },
                legend: {
                    icon: "circle",
                    right: 30,
                    data: this.legendData,
                    textStyle: {
                        fontSize: 22,
                        color: "#fff",
                    },
                },
                ...this.options,
            };
        },
        resize() {
            this.echartInstance.resize();
        },
    },
    mounted() {
        this.init();
    },
    watch: {
        options: {
            deep: true,
            handler: function (newVal, oldVal) {
                this.echartInstance.setOptions(newVal);
            },
        },
    },
    beforeDestroy() {
        // 销毁echart实例
        if (this.echartInstance) {
            this.echartInstance && this.echartInstance.dispose();
            window.removeEventListener("resize", this.resize);
        }
    },
};
</script>
<style lang="less" scoped src="./index.less">
</style>
