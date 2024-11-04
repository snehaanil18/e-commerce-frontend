import axios from 'axios'

const server_url = 'http://localhost:4000'
const token = sessionStorage.getItem('token');

export const allProductsAPI = async() => {
    return await axios.post(`${server_url}/all-products`,{
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

export const addToCartAPI = async(reqbody) => {
    return await axios.post(`${server_url}/add-to-cart`,reqbody,{
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



