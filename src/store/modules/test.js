
const state = () => ({
    count: "33333"
});

const actions = {
    // -> dispatch('test/change')
    change({ state, commit, rootState }, { params }) {
        /**/
    },

};

const mutations = {
    // -> commit('test/change')
    change(state, payload) {
        /** */
        console.log(payload, 444);
        state.count = payload;
    },
};

const getters = { // 可以认为是 store 的计算属性
    //  doneCount: state => {
    //   return state.count + 2
    // }
};



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};