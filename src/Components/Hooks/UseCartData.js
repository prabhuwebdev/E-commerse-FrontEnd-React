import { useState,useEffect } from "react"
import api
 from "../../api"
const UseCartData=()=>{
    const cart_code=localStorage.getItem("cart_code")
    const [cartitem,setcartitem]=useState([])
    const [carttotal,setcarttotal]=useState(0.00)
    const [noofitems,setnoofitems]=useState(null)
    const tax=4.00
    console.log(cart_code)
    
    useEffect(()=>{
      api.get(`get-cart?cart_code=${cart_code}`)
      .then(res=>{
        console.log(res.data)
        setcartitem(res.data.items)
        setcarttotal(res.data.sum_total)
        setnoofitems(res.data.no_of_items)
      })
      .catch(err=>{
        console.log(err.message)
      })
  
    },[cart_code])
    return{cartitem,carttotal,setcartitem,setcarttotal,tax,noofitems,setnoofitems}
}
export default UseCartData