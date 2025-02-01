import UseCartData from '../Hooks/UseCartData'
import OrderSummary from './OrderSummary'
import Payment from "./Payment"
import Loading from '../Loading/Loading'
import { useEffect, useState } from 'react'

const CheckOutPage = () => {
  const {cartitem,carttotal,setcartitem,setcarttotal,tax}=UseCartData() 
  const[loading,setloading]=useState(true)
  useEffect(()=>{
    if(cartitem.length >0){
      setloading(false)
    }
    else{
      setloading(true)
    }
  },[cartitem])
  return (
    <>
    {!loading? (
      <div className='container my-4' style={{height:"100vh"}}>
        <div className='row'>
            <OrderSummary cartitem={cartitem} carttotal={carttotal} tax={tax}/>
            <Payment />
        </div>

    </div>):(
      <Loading />
    )}
    </>
    
  )
}

export default CheckOutPage