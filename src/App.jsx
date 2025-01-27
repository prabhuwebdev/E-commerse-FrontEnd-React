import { BrowserRouter,Routes,Route } from "react-router-dom"
import Mainlayout from "./Layout/Mainlayout"
import HomePage from "./Components/Home/HomePage"
import NotFound from "./Components/ui/NotFound"
import Products from "./Components/Products/Products"
// import style from './App.css'
import { useEffect, useState } from "react"
import api from "./api"
import CartPage from "./Components/Cart/CartPage"
import CheckOutPage from "./Components/PaymentCheckout/CheckoutPage"
import Login from "./Components/User/Login"
import ProtectedRoute from "./Components/ui/ProtectedRoute"
import { AuthProvider } from "./Components/Contex/AuthContext"
import UserProfile from "./Components/User/UserProfile"
import PaymentStatusPage from "./Components/payments/PaymentStatusPage"
import SignIn from "./Components/User/SignInPage"


const App = () => {
  const[cartitems,setcartitems]=useState(0)
  const cart_code=localStorage.getItem("cart_code")

useEffect(()=>{
  if (cart_code){
    api.get(`get-cart-items?cart_code=${cart_code}`)
  .then(res=>{
    console.log(res.data)
    setcartitems(res.data.no_of_items)
  }
    
  )
  .catch(error=>{
    console.log(error.message)
  })
  }
},[cart_code])

  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout cartitems={cartitems} setcartitems={setcartitems}/>}>
        <Route index element={<HomePage />}/>
        <Route path="*" element={<NotFound />} />
        <Route path="product/:slug" element={<Products setcartitems={setcartitems}/>} />
        <Route path="cartitems" element={<CartPage  setcartitems={setcartitems}/>}/>
        <Route path="checkout" element={<ProtectedRoute ><CheckOutPage /></ProtectedRoute>} />
        <Route path="login" element={<Login />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="payment-status" element={<PaymentStatusPage setcartitems={setcartitems} />} />
        <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App