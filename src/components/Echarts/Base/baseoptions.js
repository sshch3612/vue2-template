/**
 * Echart 图表xAxis 样式
 */
export const xAxis = {
    type: "category",
    boundaryGap: true,
    axisTick: {
        show: false,
    },
    axisLabel: {
        color: "#59A0D1",
        fontSize: 24,
        margin: 22,
        interval: 0
    },
    axisLine: {},
};
/**
 *
 * Echart 图表yAxis 样式
 */
export const yAxis = {
    type: "value",
    axisLabel: {
        color: "#71CAFF",
        fontSize: 24,
        margin: 30,
    },
    axisLine: {
        // 坐标轴线
        show: false,
    },
    splitLine: {
        // 坐标轴在 grid 区域中的分隔线。
        lineStyle: {
            width: 2,
            color: "#1C7FC3",
        },
    },
    splitNumber: 6
};
