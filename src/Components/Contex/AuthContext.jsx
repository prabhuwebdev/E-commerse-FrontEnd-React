import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import api from "../../api"



export const AuthContext=createContext(false)

export const AuthProvider=({children})=>{
const [isauthenticated,setisauthenticated]=useState(false)
const [username,setusername]=useState("")

    // state code for getting the username and show it on the nav
    

    const auth=()=>{
        const token =localStorage.getItem("access")
        if(token){
            const decode=jwtDecode(token)
            const exp_date=decode.exp
            const currentdate=Date.now()/1000
            if(exp_date > currentdate){
                setisauthenticated(true)
            }
            else{
                setisauthenticated(false)
            }
        }
    }

    const UserName=()=>{
        api.get("/get-name")
        .then(res=>{
            console.log(res.data.username)
            setusername(res.data.username)

        })
        .catch(err=>{
            console.log(err.message)
        })
    
    }

    useEffect(()=>{
        auth()
        UserName()
    },[])

    const Authvalue={isauthenticated,setisauthenticated,UserName,username}
    return <AuthContext.Provider value={Authvalue}>
    {children}
    </AuthContext.Provider>
}