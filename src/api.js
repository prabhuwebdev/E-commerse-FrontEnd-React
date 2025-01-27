import axios from "axios"
import {jwtDecode} from "jwt-decode"

//  export const baseurl="http://127.0.0.1:8000/" 
export const baseurl=import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000/" 
const api=axios.create({
    baseURL: baseurl
})


api.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem("access")
        if(token){
            const decode=jwtDecode(token)
            const expiry_date=decode.exp
            const current_date=Date.now()/1000
            if (expiry_date > current_date){
                config.headers.Authorization=`Bearer ${token}`
            }
            
        }
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)


export default api