
import Header from "./Header"
import CardContainer from './CardContainer'
import api from "../../api"
import { useEffect, useState } from "react"
import Error from "../ui/Error"
import { value } from "../../GenerateCartCode"

const HomePage = ({setcartitems}) => {
  const[products,setproduct]=useState([])
  const[error,seterror]=useState(false)

  useEffect(()=>{
    if(localStorage.getItem("cart_code")===null){
      localStorage.setItem("cart_code",value)
    }
  },[])

  useEffect(()=>{
    seterror(true)
    api.get("products")
    .then((res)=>{console.log(res.data)
      setproduct(res.data)
      seterror(false)
    })
    .catch((error)=>{
      console.log(error.message)
    })
  
  },[])
 

  return (
    <div>
        <Header />
        {error? <Error />:<CardContainer products={products} />}
        
    </div>
  )
}

export default HomePage