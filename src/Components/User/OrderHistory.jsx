/* eslint-disable react/prop-types */
// import React from 'react'

import { baseurl } from "../../api";

// const OrderHistory = () => {
//   return (
//     <div className='card-body'>
//         <div className='order-item' style={{border:"1px solid black", padding:"15px", borderRadius:"8px"}}>
//         <div className='row'>
//             <div className='col-md-2'>
//                 <img  src='' className='image-fluid ' style={{height:"80px",width:"80px" ,border:"1px solid black", borderRadius:"5px"}}/>
//             </div>
//             <div className='col-md-4'> 
//                 <p className='mb-3'>Product Name Product Name</p>
//                 <p className='mb-3'>Order Date: 6 January 2025</p>
//                 <p className='mb-1'>Order Id : 12355</p>
//             </div>
//             <div className='col-md-2 text-center'>
//                 <p>Quantity : 1</p>
//             </div>
//             <div className='col-md-2 text-center'>
//                 <p> Total : 100 </p>
//             </div>
//         </div>
//         </div>
        
//     </div>
//   )
// }

// export default OrderHistory


baseurl

const OrderHistory = ({item}) => {
return (
    <div className="card-body">
      <div className="order-item" style={{ border: "1px solid black", padding: "15px", borderRadius: "8px" }}>
        <div className="row mb-4">
          <div className="col-md-3 d-flex d-md-block align-items-center justify-content-center mt-3">
            <img src={`${baseurl}${item.product.image}`} className="image-fluid objectfit-cover" style={{ height: "80px", width: "80px", border: "1px solid black", borderRadius: "5px" }} alt="Product" />
          </div>
          <div className="col-md-3 d-md-block mt-2">
            <p className="mb-3 text-bold text-center"><strong>Product Name</strong> : {item.product.name}</p>
            <p className="mb-3 text-center"><strong>OrderDate</strong> : {item.order_date}</p>
            <p className="mb-1 text-center"><strong>OrderId</strong> : {item.order_id}</p>
          </div>
          <div className="col-md-2 text-center d-flex align-items-center justify-content-center">
            <p><strong>Quantity</strong> : {item.quantity}</p>
          </div>
          <div className="col-md-2 text-center d-flex align-items-center justify-content-center">
            <p><strong>Price</strong>:{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
