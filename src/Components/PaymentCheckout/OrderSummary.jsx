/* eslint-disable react/prop-types */
import OrderItem from "./OrderItem"

const OrderSummary = ({cartitem,carttotal,tax}) => {
    const Total=(carttotal + tax).toFixed(2)
  return (
    <div className='col-md-8'>
        <div className='card mb-4' style={{borderRadius:"5px"}}>
            <div className='card-header'style={{backgroundColor:'blueviolet', color:"white"}}>
                <h4 style={{overflow:"hidden"}}>Cart Summary</h4>
            </div>
            <div className='card-body'>
                <div className='px-3' style={{height:"300px",}}>
                    {cartitem.map((item)=><OrderItem  key={item.id} item={item}/>)}
                    
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                    <h5 style={{overflow:"hidden"}}>Total</h5>
                    <h5 style={{overflow:"hidden"}}>{`${Total}`}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary