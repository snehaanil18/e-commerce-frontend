import axios from 'axios'

const server_url = 'http://localhost:4001'
const token = sessionStorage.getItem('token');

export const userCartsAPI = async(body) => {
    return await axios.post(`${server_url}/get-user-cart`,body,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((response) => {
        return response
    })
        .catch((error) => {
            return error
        });
}

export const incrementCartsAPI = async(body) => {
    return await axios.post(`${server_url}/increment-cart`,body,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((response) => {
        return response
    })
        .catch((error) => {
            return error
        });
}

export const decrementCartsAPI = async(body) => {
    return await axios.post(`${server_url}/decrement-cart`,body,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then((response) => {
        return response
    })
        .catch((error) => {
            return error
        });
}