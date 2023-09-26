import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://pixabay.com/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    params: {
        key: process.env.REACT_APP_API_KEY,
        image_type: 'photo',
        safesearch: true,
    }
})

export default Api