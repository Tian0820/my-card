import * as authApi from '../../api/auth'

const state = {
    currentName: null,
    currentInfo: null,
    allFriends: null,
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

    fetchAllFriends({commit}) {
        authApi.fetchAllFriends((data => {
            if (data !== null) {
                commit('saveAllFriends', data)
            }
        }))
    },
};

// mutations 必须同步
const mutations = {
    saveCurrentName(state, currentName) {
        state.currentName = currentName
    },
    saveCurrentInfo(state, currentInfo) {
        state.currentInfo = currentInfo
    },
    saveAllFriends(state, allFriends) {
        state.allFriends = allFriends
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
}
