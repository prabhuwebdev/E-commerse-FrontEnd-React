import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import api from "../../api"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "./success.css"

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





  if(messages === "Payment Successfull"){
    return (
      <div className="vh-100 mt-">
        <div className="container-fluid d-flex align-items-center justify-content-center">
        <DotLottieReact
        src="https://lottie.host/c60fb93d-568a-420d-a324-5558bf7299b2/IpRRzVvf2s.lottie"
        loop
        autoplay
        className="lottie"
      />
        </div>
        <div className="text-center">
          <h1 className="overflow-hidden mb-5 display-5 fw-bold text-black">{messages}</h1>
          <h3 className="overflow-hidden mb-4 text-black">{submessages}</h3>
        </div>
        <div className="my-3 d-flex align-items-center justify-content-center">
          <span>
            <Link to="/userprofile"><button className="btn btn-lg-md text-balck p-2 mx-3 " style={{border:"1px solid black"}}>View Order Details</button></Link>
            <Link to="/"><button className="btn btn-lg-md text-balck p-2 mx-3 " style={{border:"1px solid black"}}>Back To Home</button></Link>
          </span>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="vh-100 mt-">
        <div className="container-fluid d-flex align-items-center justify-content-center">
        <DotLottieReact
      src="https://lottie.host/3ca39d15-9721-4c8a-83f0-4feb1dc192cb/cCpgU2kXZ0.lottie"
      loop
      autoplay
      className="lottie1"
    />
        </div>
        <div className="text-center">
          <h1 className="overflow-hidden mb-5 display-5 fw-bold text-black">{messages}</h1>
          <h3 className="overflow-hidden mb-4 text-black">{submessages}</h3>
        </div>
        <div className="my-3 d-flex align-items-center justify-content-center">
          <span>
            <Link to="/userprofile"><button className="btn btn-lg-md text-balck p-2 mx-3 " style={{border:"1px solid black"}}>View Order Details</button></Link>
            <Link to="/"><button className="btn btn-lg-md text-balck p-2 mx-3 " style={{border:"1px solid black"}}>Back To Home</button></Link>
          </span>
        </div>
      </div>
    )
  }
  }
  

export default PaymentStatusPage