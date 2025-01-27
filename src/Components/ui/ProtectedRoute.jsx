import { jwtDecode } from 'jwt-decode'
import  { useEffect, useState } from 'react'
import api from '../../api'
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const [isAuthenticated,setisAuthenticated]=useState(null)
    const location=useLocation()

    useEffect(()=>{
        auth().catch(()=>setisAuthenticated(false))
    },[])

    const  RefreshToken=async()=>{
        const refreshtoken=localStorage.getItem("refresh")
        try{
            const res=await api.post("/token/refresh/", {refresh:refreshtoken})
            if(res.status==200){
                localStorage.setItem("access",res.data.access)
                setisAuthenticated(true)
            }
            else{
                setisAuthenticated(false)
            }


        }
        catch(error){
            console.log(error.message)
            setisAuthenticated(false)

        }
    }

    const auth=async()=>{
        const token=localStorage.getItem("access")
        if(!token){
            setisAuthenticated(false)
            return;
        }
        const decode=jwtDecode(token)
        const expiry_date=decode.exp
        const current_date=Date.now()/1000
        if(current_date > expiry_date){
            await RefreshToken()
        }
        else{
            setisAuthenticated(true)
        }
        
    }    
    console.log(isAuthenticated)
        if (isAuthenticated === null) {
            return <div>Loading...</div>;
        }

return(
        isAuthenticated ? children :<Navigate to="/login" state={{from:location}} replace />
    
) 
    


}

export default ProtectedRoute


