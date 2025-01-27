import { useEffect, useState } from "react"
import OrderHistoryItemContainer from "./OrderHistoryItemContainer"
import UserInfo from "./UserInfo"
import api from "../../api"


const UserProfile = () => {
  
  const[userdetail,setuserdetail]=useState({})
  const[orderitems,setorderitems]=useState([])

  useEffect(()=>{
    api.get("user-details")
    .then(res=>{
      console.log(res.data)
      setuserdetail(res.data)
      setorderitems(res.data.items)
    })
    .catch(err=>{
      console.log(err.message)
    })

  },[])
  return (
    <div className="container">
        <div className="my-4">
        <UserInfo  userdetail={userdetail}/>
        </div>
        
        <OrderHistoryItemContainer orderitems={orderitems}/>
    </div>
  )
}

export default UserProfile