/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../api"
import { baseurl } from "../../api"
import Similarproduct from "./Similarproduct"
import { toast } from "react-toastify"
import Loading from "../Loading/Loading"


const Products = ({setcartitems}) => {
    const {slug}=useParams()
    const [product,setproduct]=useState({})
    const[similarproducts,setsimilarproducts]=useState([])
    const[incart,setincart]=useState(false)
    const[loading,setloading]=useState(true)
    
  
    //function to create cart and add to cart
    const cart_code=localStorage.getItem("cart_code")
    const newitem={cart_code:cart_code,product_id:product.id}

    //adding product to cart
    const additem=()=>{
      api.post("add-item/",newitem)
      .then(res=>{
        console.log(res.data)
        setincart(true)
        setcartitems(curr=> curr+1)
        toast.success("Cart Item Added Successfully")
      })
      .catch(err=>{
        console.log(err.message)
      })
    }


    useEffect(()=>{
      if(product.id){
        api.get(`product-in-cart?cart_code=${cart_code}&product_id=${product.id}`)
      .then(res=>{
        console.log(res.data)
        setincart(res.data.product_in_cart)
        console.log(product)
        
      }
        
      )
      .catch(err=>{
        console.log(err.message)
      })
      }
      

    },[cart_code,product.id])





    useEffect(()=>{
      setloading(true)
        api.get(`single-product/${slug}`)
        .then(res=>{
            console.log(res)
            console.log(res.data.similar_products)
            // setloading(false)
            setproduct(res.data)
            
            setsimilarproducts(res.data.similar_products)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
          setloading(false)
        })
    
    },[slug])
  return (
    <div>
    {loading? (
            <Loading style={{height:"100px",width:"100px"}}/>

    ):(
      <>
      <div
      className="container mb-5 mt-5 my-sm-1"
      style={{display: "flex",justifyContent: "center",alignItems: "center",height: "100vh",overflow: "hidden",}}>
      <div className="row mb-4 mx-3 w-100" style={{ maxWidth: "1200px" }}>
        <div className="col-md-6 col-sm-12 mb-sm-4">
          <img src={`${baseurl}${product.image}`}alt=""className="card-img-top img-fluid"style={{ height: "auto", maxHeight: "500px", width: "100%" }}/>
        </div>
        <div
          className="col-md-6 col-sm-12 py-4 gap-lg-4"
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}>
          <div>
            <p className="card-title display-5 mb-4 m-sm-4" style={{ overflow: "hidden" }}>
              {product.name}
            </p>
          </div>
          <div>
            <h2 style={{ overflow: "hidden" }}>Rs : {product.price}</h2>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
          <div>
            
            <button className="btn btn-primary bg-white text-dark" style={{border:"1px solid black"}} disabled={incart} onClick={additem}>{incart?"Product Added To Cart" :"Add To Cart"}</button>
          </div>
        </div>
      </div>
    </div>
    <Similarproduct products={similarproducts}/>
    </>
    )}
    
    </div>
  
  )
}

export default Products