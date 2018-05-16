import axios from 'axios'

export function fetchInfo(callback, name) {
    axios.post('/user/get',
        name,
        {
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            console.log('success!!' + response.data)
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}