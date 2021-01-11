<template>
    <echartbase
        :height="height"
        :width="width"
        :title="title"
        :legendData="legendData"
        :options="options"
    ></echartbase>
</template>
<script>
import echartbase from "../Base";

const seriesItem = {
    type: "pie",
    // avoidLabelOverlap: true,
    lineStyle: {
        color: "#54E9E7",
    },
    label: {
        // show: false,
        position: "inside",
        color: "#fff",
        formatter: "{c}",
        fontSize: 22,
    },
    labelLine: {
        show: false,
    },
};
export default {
    props: {
        height: {
            type: Number,
            default: function () {
                return 300;
            },
        },
        width: {
            type: Number,
            default: function () {
                return 1000;
            },
        },
        title: [String, Object],
        color: {
            type: Array,
            default: function () {
                return ["#0273F1", "#FFAD58", "#D81D1D"];
            },
        },
        legend: {
            type: Boolean,
            default: function () {
                return true;
            },
        },
        seriesOption: {
            type: Object,
            default: function () {
                return {};
            },
        },
        data: {
            type: Array,
            default: function () {
                return [
                    { value: 335, name: "直接访问" },
                    { value: 310, name: "邮件营销" },
                    { value: 234, name: "联盟广告" },
                ];
            },
        },
        restOption: {
            type: Object,
            default: function () {
                return {};
            },
        },
    },
    computed: {
        legendData: function () {
            const result = this.data.map((item) => {
                return item.name;
            });
            return this.legend ? result : [];
        },
        options: function () {
            const series = [
                {
                    ...seriesItem,
                    ...this.seriesOption,
                    data: this.data,
                },
            ];
            const option = {
                color: this.color,
                tooltip: {
                    trigger: "item",
                    formatter: "{d}%",
                    textStyle: {
                        fontSize: 22,
                    },
                },
                legend: {
                    icon: "circle",
                    left: "center",
                    bottom: 0,
                    data: this.legendData,
                    textStyle: {
                        fontSize: 22,
                        color: "#fff",
                        lineHeight: 24,
                    },
                },
                series,
                ...this.restOption,
            };
            return option;
        },
    },
    components: {
        echartbase,
    },
};
</script>
<style lang="less" scoped>
</style>