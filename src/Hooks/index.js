import axios from "axios";


const axiosSecure = axios.create({
     baseURL: import.meta.env.VITE_api_url,
     // withCredentials: true
})

export default axiosSecure;