import axios from 'axios'

export function fetchInfo(callback, name) {
    axios.get('/user/get', {
        params: {
            name: name
        }
    })
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export function fetchAllFriends(callback) {
    axios.get('/user/getAll')
        .then(function (response) {
            console.log('all friends', response.data)
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export function deleteFriend(callback, name) {
    axios.post('/user/delete', {name: name},
        {
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export function updateFriend(callback, info) {
    console.log(name)
    axios.post('/user/update',
        {
            name: info.name,
            sex: info.sex,
            tags: info.tags.join(';')
        },
        {
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}