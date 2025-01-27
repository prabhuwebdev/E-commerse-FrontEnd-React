/* eslint-disable react/prop-types */
import { baseurl } from "../../api"

const OrderItem = ({item}) => {
  return (
    <div>
        <div className='d-flex justify-content-between'>
            <img src={`${baseurl}${item.product.image}`} alt='' className='img-fluid' style={{height:"80px",width:"80px", objectFit:"cover", border:"1px solid black", borderRadius:"5px"}}/>
            <div className='mx-3 my-3 '>
                <h5 className='mb-3' style={{overflow:"hidden"}}>{item.product.name}</h5>
                <small className="text-center" style={{overflow:"hidden"}}>{`quantity : ${item.quantity}`}</small>
            </div>
            <div className="">
                <h5 className='text-center' style={{overflow:"hidden"}}>{item.product.price}</h5>
            </div>
        </div>
    </div>
  )
}

export default OrderItem