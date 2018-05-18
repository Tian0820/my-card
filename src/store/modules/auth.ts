import * as authApi from '../../api/auth'

const state = {
    currentName: '',
    currentInfo: ''
}

// actions 可异步
const actions = {

    fetchInfo({commit}, name) {
        commit('saveCurrentName', name)
        authApi.fetchInfo((data => {
            if (data.message === 'success') {
                commit('saveCurrentInfo', data.info)
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
