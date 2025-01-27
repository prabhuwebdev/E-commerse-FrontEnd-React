/* eslint-disable react/prop-types */
import { useContext } from "react"
import {NavLink} from "react-router-dom"
import { AuthContext } from "../Contex/AuthContext"

const Navlink = ({setcartitems}) => {
    const {isauthenticated,username,setisauthenticated}=useContext(AuthContext)
    

    const LogOut=()=>{
        const result=window.confirm("are your sure want to logout from this site?")
        if(result){
            localStorage.removeItem("access")
            localStorage.removeItem("cart_code")
            setcartitems(0)            
        setisauthenticated(false)
        }

        
    }
  return (
    <div>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {isauthenticated?(
            <>
            <li className="nav-item">
                <NavLink to="/userprofile" className={({isActive})=>isActive? "nav-link active fw-semibold":"nav-link fw-semibold"} href="#!">{`Hi ${username}`}</NavLink>
            </li>
            <li className="nav-item" onClick={LogOut}>
                <NavLink to="/"  className={({isActive})=>isActive? "nav-link active fw-semibold":"nav-link fw-semibold"} href="#">Logout</NavLink>
                
    
            </li>
            <li className="nav-item">
                <NavLink to="/userprofile"  className={({isActive})=>isActive? "nav-link active fw-semibold":"nav-link fw-semibold"} href="#">Profile</NavLink>
    
            </li>
            </>)

            :(
            <>
            <li className="nav-item">
            <NavLink to="/login" className={({isActive})=>isActive? "nav-link active fw-semibold":"nav-link fw-semibold"} href="#">Login</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/signin" className={({isActive})=>isActive? "nav-link active fw-semibold":"nav-link fw-semibold"} href="#!">Register</NavLink>
        </li>
            </>)
            
        }
        
        
        
</ul>
    </div>
  )
}

export default Navlink