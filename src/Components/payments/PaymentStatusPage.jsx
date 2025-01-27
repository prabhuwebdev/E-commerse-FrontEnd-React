import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import api from "../../api"

const PaymentStatusPage = ({setcartitems}) => {
  const [messages,setmessages]=useState("")
  const [submessages,setsubmessages]=useState("")

  useEffect(()=>{

      const QueryParams=new URLSearchParams(location.search)
      const status=QueryParams.get("razorpay_payment_link_status")
      const payment_id=QueryParams.get("razorpay_payment_id")
      const reference_id=QueryParams.get("razorpay_payment_link_reference_id")
      if(status && payment_id && reference_id){
        api.post(`payment-callback?status=${status}&payment_id=${payment_id}&reference_id=${reference_id}`)
        .then(res=>{
          console.log(res.data.message)
          localStorage.removeItem("cart_code")
          setmessages(res.data.message)
          setsubmessages(res.data.submessage)
          setcartitems(0)
        })
        .catch(err=>{
          console.log(err.message)
        })
      }      
  },[])

  return (
    <div className=" vh-100 d-flex  justify-content-center align-items-center" style={{backgroundColor:"#7161ef"}}>
        <div className="text-center">
            <h1 className="overflow-hidden mb-5 display-4 fw-bold text-white">{messages}</h1>
            <h3 className="overflow-hidden mb-4 text-white">{submessages}</h3>
            <span>
                <Link to="/userprofile"><button className="btn btn-lg-md bg-white text-balck p-2 mx-3 " style={{border:"1px solid black"}}>View Order Details</button></Link>
                <Link to="/"><button className="btn btn-lg-md bg-white text-balck p-2 mx-3 " style={{border:"1px solid black"}}>Back To CheckOut Page</button></Link>

            </span>
        </div>

    </div>
  )
}

export default PaymentStatusPage