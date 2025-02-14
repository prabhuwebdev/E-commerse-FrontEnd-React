/* eslint-disable react/prop-types */
// import {Link} from "react-router-dom"
import styles from './Navbar.module.css'
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import Navlink from './Navlink';


const Navbar = ({cartitems,setcartitems}) => {
  return (
    <div className={`${styles.Navbars} container`} >
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link  className="navbar-brand fw-bold" to="/"><strong  style={{color:"black"}}>BUYHIVE</strong></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3 d-flex align-items-lg-center " >
            
            <Navlink setcartitems={setcartitems}/>
            <li className="nav-item">
              <Link className="nav-link px-2 py-2 rounded-circle badge " style={{display:"inline-block", backgroundColor:"#7161ef"}} to="cartitems">
              <FiShoppingCart  className="position-relative" style={{fontSize:"18px", color:"white"}} />
              {cartitems == 0 ||<span style={{color:"white",backgroundColor:"#7161ef",border:"2px solid white", fontSize:"10px"}} className='position-absolute rounded-circle  p-1 fw-bold top-10  translate-middle '>{cartitems}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar