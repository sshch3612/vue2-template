const state = () => ({
    menu: []
});

const actions = {
    menu({ state, commit, rootState }, payload) {
        commit("menu", payload);
    }
};

const mutations = {
    menu(state, payload) {
        state.menu = payload;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};