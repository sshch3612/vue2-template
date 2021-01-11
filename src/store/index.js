import Vue from "vue";
import Vuex from "vuex";
// import attendance from "./modules/attendance";
import test from "./modules/test";
import menudata from "./modules/menudata";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        test,
        menudata
        // attendance
    },
});
