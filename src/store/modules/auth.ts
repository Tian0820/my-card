import * as authApi from '../../api/auth'

const state = {
    currentName: null,
    currentInfo: null
}

// actions 可异步
const actions = {

    fetchInfo({commit}, name) {
        commit('saveCurrentInfo', null)
        commit('saveCurrentName', name)
        authApi.fetchInfo((data => {
            if (data !== null) {
                commit('saveCurrentInfo', data)
            }
        }), name)
    },
};

// mutations 必须同步
const mutations = {
    saveCurrentName(state, currentName) {
        state.currentName = currentName
    },
    saveCurrentInfo(state, currentInfo) {
        state.currentInfo = currentInfo
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
}
