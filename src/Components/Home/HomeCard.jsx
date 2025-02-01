/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { baseurl } from '../../api'
// import styles from "./HomeCard.module.css"

const HomeCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center align-items-center">
      <Link to={`/product/${product.slug}`} style={{ textDecoration: "none", color: "black" }}>
        <div className= "card h-100 mb-lg-3 shadow-sm" style={{ width: "250px", height: "400px" }}>
          <div className="card-img-top d-flex justify-content-center align-items-center" style={{ height: "250px", overflow: "hidden" }}>
            <img 
              src={`${baseurl}${product.image}`} 
              alt="Product images" 
              className="img-fluid" 
              style={{ objectFit: "cover", width: "100%", height: "100%" }} 
            />
          </div>
          <div className="card-body d-flex flex-column">
            <p className="card-title text-center text-uppercase " style={{overflow:"hidden"}}>{product.name}</p>
          </div>
          <div className="card-footer mt-auto">
            <p className="card-text text-center">Rs : {product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default HomeCard;



