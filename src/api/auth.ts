import axios from 'axios'

export function fetchInfo(callback, name) {
    axios.get('/user/get', {
            params: {
                name: name
            }
        }
    )
        .then(function (response) {
            callback(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}