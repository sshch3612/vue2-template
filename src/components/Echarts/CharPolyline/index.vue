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
    type: "line",
    lineStyle: {
        color: "#54E9E7",
    },
    symbolSize: 14, // 坐标点大小
    label: {
        color: "#fff",
        show: true,
        position: "top",
        fontSize: 26,
    },
    areaStyle: {
        color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: "rgba(84, 233, 231, 1)", // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: "rgba(84, 233, 231, .1)", // 100% 处的颜色
                },
            ],
            global: false, // 缺省为 false
        },
    },
};
export default {
    props: {
        color: {
            type: Array,
            default: function () {
                return [
                    "#54E9E7",
                    "rgba(52, 183, 243, 1)",
                    "rgba(255, 84, 92, 1)",
                    "rgba(238, 131, 64, 1)",
                    "rgba(255, 192, 0, 1)",
                    "rgba(104, 136, 247, 1)",
                ];
            },
        },
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
        legend: {
            type: Boolean,
            default: function () {
                return true;
            },
        },
        xData: {
            type: Array,
            default: function () {
                return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            },
        },
        seriesOption: {
            // 示例：{
            // "stack："stack" 柱状图是否堆叠
            type: Array,
            default: function () {
                return [];
            },
        },
        restOption: {
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
    },
    computed: {
        legendData: function () {
            const result = this.data.map((item) => {
                return item.name;
            });
            return this.legend ? result : [];
        },
        options: function () {
            const series = this.data.map((item, index) => {
                const seriesOption = this.seriesOption[index] || {};
                return {
                    ...seriesItem,
                    ...seriesOption,
                    name: item.name,
                    data: item.value,
                };
            });
            const option = {
                color: this.color,
                axisPointer: {
                    // 指示线样式
                    lineStyle: {
                        width: 3,
                        color: "rgba(84, 233, 231, .3)",
                    },
                },
                tooltip: {
                    trigger: "axis",
                    formatter: "{c}",
                    backgroundColor: "#4FD9DB",
                    textStyle: {
                        fontSize: 18,
                    },
                },
                xAxis: {
                    ...xAxis,
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