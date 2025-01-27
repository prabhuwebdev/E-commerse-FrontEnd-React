/* eslint-disable react/prop-types */
import Footer from "../Components/ui/Footer"
import Navbar from "../Components/ui/Navbar"
import { Outlet } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';


const Mainlayout = ({cartitems,setcartitems}) => {
  return (
    <>
    <Navbar cartitems={cartitems} setcartitems={setcartitems}/>
    <ToastContainer />
    <Outlet />
    <Footer />
    </>
  )
}

export default Mainlayout