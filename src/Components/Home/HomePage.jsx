
import Header from "./Header"
import CardContainer from './CardContainer'
import api from "../../api"
import { useEffect, useState } from "react"
import Error from "../ui/Error"
import { value } from "../../GenerateCartCode"
import Loading from "../Loading/Loading"

const HomePage = ({setcartitems}) => {
  const[products,setproduct]=useState([])
  const[error,seterror]=useState(false)
  const[isloading,setisloading]=useState(true)

  useEffect(()=>{
    if(localStorage.getItem("cart_code")===null){
      localStorage.setItem("cart_code",value)
    }
  },[])

  useEffect(()=>{
    seterror(true)
    setisloading(true)
    api.get("products")
    .then((res)=>{console.log(res.data)
      setproduct(res.data)
      seterror(false)
    })
    .catch((error)=>{
      console.log(error.message)
      seterror(true)
    })
    .finally(()=>{
      setisloading(false)
    })
    
  
  },[])

  return (
    <div>
        <Header />
        {/* {error? <Error />:<CardContainer products={products} />} */}
        {isloading?(
          <div className="container d-flex align-items-center justify-content-center overflow-hidden" style={{marginTop:"calc(80px + 1rem)",height:"100vh"}}>
            <Loading className="container d-flex align-items-center justify-content-center" />
          </div>
          
        ):error?(
          <Error/>
        ):
        <CardContainer products={products} />

        }
        
    </div>
  )
}

export default HomePage