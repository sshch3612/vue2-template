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
import { xAxis, yAxis } from "../Base/baseoptions";

const seriesItem = {
    type: "bar",
    barMaxWidth: 65,
    barMinWidth: 20,
    label: {
        color: "#fff",
        show: true,
        position: "inside",
        fontSize: 26,
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
                return ["#0273F1", "#FFAD58"];
            },
        },
        legend: {
            type: Boolean,
            default: function () {
                return true;
            },
        },
        xData: {
            type: Array,
            default: function () {
                return ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
            },
        },
        seriesOption: {
            // 示例：{
            // "stack："stack" 柱状图是否堆叠
            type: Object,
            default: function () {
                return {};
            },
        },
        data: {
            type: Array,
            default: function () {
                return [
                    {
                        name: "test",
                        value: [320, 302, 301, 334, 390, 330, 320],
                    },
                    {
                        name: "test1",
                        value: [120, 132, 101, 134, 90, 230, 210],
                    },
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
            const series = this.data.map((item) => {
                return {
                    ...seriesItem,
                    ...this.seriesOption,
                    name: item.name,
                    data: item.value,
                };
            });
            const option = {
                color: this.color,
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontSize: 22,
                    },
                },
                xAxis: {
                    ...xAxis,
                    boundaryGap: true,
                    data: this.xData,
                },
                yAxis: {
                    ...yAxis,
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