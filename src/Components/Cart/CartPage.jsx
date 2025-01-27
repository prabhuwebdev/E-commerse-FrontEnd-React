/* eslint-disable react/prop-types */
import { useEffect } from "react"
import CartItem from "./CartItem"
import CartSummary from "./CartSummary"
import api from "../../api"
import UseCartData from "../Hooks/UseCartData"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';




const CartPage = ({setcartitems}) => {

 const {cartitem,carttotal,setcartitem,setcarttotal,tax,noofitems,setnoofitems}=UseCartData()
  return (
    <div className="container my-4" style={{height:"80vh"}}>
      {noofitems?(
        <>
        <div className="mb-4">
            <h4 className="overflow-hidden text-uppercase">Shopping Cart</h4>
        </div>
        <div className="row my-4">
            <div className="col-md-8">
              {cartitem.map((item)=> <CartItem  key={item.id} item={item} cartitem={cartitem} setcartitem={setcartitem} setcarttotal={setcarttotal} setcartitems={setcartitems} setnoofitems={setnoofitems}/> )}
            </div>
            <CartSummary carttotal={carttotal} tax={tax}/>
        </div>
        </>
      ):
      (
        <div className="container">
          
          <DotLottieReact style={{height: "350px"}} src="https://lottie.host/89e32242-a664-4fb5-952f-0c3fa26ac230/tUQYZ5VGFR.lottie" loop autoplay/>
          <p className="display-6 text-uppercase text-center">
            Cart is empty
          </p>
        </div>
        

      )}
        
    </div>
  )
}

export default CartPage