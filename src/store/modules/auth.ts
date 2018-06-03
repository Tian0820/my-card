import * as authApi from '../../api/auth'

const state = {
    currentName: null,
    currentInfo: null,
    allFriends: null,
    friendToEdit: null
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
        console.log('fetchall!')
        authApi.fetchAllFriends((data => {
            if (data !== null) {
                commit('saveAllFriends', data)
            }
        }))
    },

    deleteFriend({commit}, {name, onSuccess, onError}) {
        authApi.deleteFriend((data => {
            if (data.result === 'success') {
                commit('deleteFriend', name)
                if (onSuccess) {
                    onSuccess(data.message)
                }
            } else {
                onError(data.message)
            }
        }), name)
    },

    updateFriend({commit}, {info, onSuccess, onError}) {
        authApi.updateFriend((data => {
            if (data.result === 'success') {
                if (onSuccess) {
                    onSuccess(data.message)
                    commit('saveUpdatedFriend', info)
                }
            } else {
                onError(data.message)
            }
        }), info)
    },

    addNewFriend({commit}, {info, onSuccess, onError}) {
        authApi.addNewFriend((data => {
            if (data.result === 'success') {
                if (onSuccess) {
                    onSuccess(data.message)
                    commit('saveNewFriend', info)
                }
            } else {
                onError(data.message)
            }
        }), info)
    }
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
        allFriends.forEach(friend => {
            let tags = friend.tags
            friend.tags = tags.split(';').join(' ')
        })
        state.allFriends = allFriends
        console.log('state', state.allFriends)
    },
    saveFriendToEdit(state, friendToEdit) {
        state.friendToEdit = friendToEdit
    },
    deleteFriend(state, name) {
        let index = -1
        state.allFriends.forEach(friend => {
            if (friend.name === name) {
                index = state.allFriends.indexOf(friend)
            }
        })
        state.allFriends.splice(index, 1)
    },
    saveUpdatedFriend(state, updatedFriend) {
        state.allFriends.forEach(friend => {
            if (friend.name === updatedFriend.name) {
                friend.sex = updatedFriend.sex
                friend.tags = updatedFriend.tags.join(' ')
            }
        })
    },
    saveNewFriend(state, newFriend) {
        state.allFriends.push(newFriend)
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    actions,
    mutations
}
