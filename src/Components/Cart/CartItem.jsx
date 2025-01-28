/* eslint-disable react/prop-types */
import { useState } from "react"

import api, { baseurl } from "../../api"
import { toast } from "react-toastify"


const CartItem = ({item, cartitem,setcarttotal,setcartitems,setcartitem,setnoofitems}) => {
  const[quantity,setquantity]=useState(item.quantity)

  const itemdata={quantity:quantity,item_id:item.id}

  //code for tostify effect
  const [loading,setloading]=useState(false)
//function to update cart quantity

  const update=()=>{
    setloading(true)
    api.patch("cart-value-update/",itemdata)
    .then(res=>{
      console.log(res.data)
      console.log(res.data.total)
      console.log(cartitem)
      setloading(false)
      toast.success("Cart Item Updated Successfully")

      setcarttotal(cartitem.map((items)=> items.id===item.id? res.data.data :items).reduce((acc,curr)=>acc+(curr.total), 0))
      setcartitems(cartitem.map((items)=> items.id===item.id? res.data.data :items).reduce((acc,curr)=>acc+(curr.quantity), 0))

      

    })
    .catch(err=>{
      console.log(err.message)
    })

  }

  //function to delete cart items
  const deleteItem=()=>{
    const confirmDelete=window.confirm("Are You Sure? Want To Delete This Item From Your Cart?")
    const item_id={item_id:item.id}
    if(confirmDelete){
      api.post("delete-cart-item",item_id)
      .then((res)=>{
        console.log(res.data)
        setcartitem(cartitem.filter((cartitem)=>cartitem.id != item.id))
        setnoofitems(null)
        toast.success(res.data.message)
        setcarttotal(cartitem.filter((items)=> items.id != item.id).reduce((acc,curr)=>acc+(curr.total), 0))
        setcartitems(cartitem.filter((items)=> items.id != item.id).reduce((acc,curr)=>acc+(curr.quantity), 0))

      })
      .catch((err)=>{
        console.log(err.message)
      })
    }
  }

  return (
    <div className="col-md-12">
        <div className="d-flex align-items-center mb-3 p-3 mt-4 flex-column flex-md-row justify-content-between" style={{borderRadius:"8px", height:"auto"}}>
            <img src={`${baseurl}${item.product.image}`} className="mb-4" style={{width:"80px", height:"80px",objectFit:"cover", borderRadius:"5px", border:"2px solid black"}}/>
        
            <div className="ms-3 m-sm-4 text-center">
                <p className="mb-2 overflow-hidden text-uppercase text-sm prod">{item.product.name}</p>
                <p>Rs : {item.product.price}</p>
            </div>
            <div className="d-flex align-items-center flex-end">
                <input className="form-control mx-4 col-12" type="number" min="1" onChange={(e)=>setquantity(e.target.value)} value={quantity}  style={{width:"60px"}}/>
                <div className="d-flex justify-content-between" style={{gap:"40px"}}>
                  <button className="btn btn-sm border-black text-uppercase py-2 px-3" onClick={update} >Update</button>
                  <button className="btn border-black text-uppercase btn-sm" onClick={deleteItem}>Remove</button>
                </div>
                
            </div>
        </div>
    </div>

    

    
  )
}

export default CartItem