<template>
    <div>
        <CharPolybar></CharPolybar>
        <CharPolyline></CharPolyline>
        <CharPolypie></CharPolypie>
    </div>
</template>
<script>
import { CharPolybar, CharPolyline, CharPolypie } from "@/components/Echarts";
export default {
    components: {
        CharPolybar,
        CharPolyline,
        CharPolypie,
    },
};
</script>