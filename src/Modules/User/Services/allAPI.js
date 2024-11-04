import axios from 'axios'

const server_url = 'http://localhost:4000'

export const loginUserAPI = async(userDetail) => {
    return await axios.post(`${server_url}/login-user`,userDetail,{
        headers: {
            "Content-Type": "application/json",
        }
    }).then((response) => {
        return response
    })
        .catch((error) => {
            return error
        });
}

export const registerUserAPI = async(user) => {
    return await axios.post(`${server_url}/register-user`,user,{
        headers: {
            "Content-Type": "application/json",
        }
    }).then((response) => {
        return response
    })
        .catch((error) => {
            return error
        });
}