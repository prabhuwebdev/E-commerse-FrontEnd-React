import UseCartData from '../Hooks/UseCartData'
import OrderSummary from './OrderSummary'
import Payment from "./Payment"

const CheckOutPage = () => {
  const {cartitem,carttotal,setcartitem,setcarttotal,tax}=UseCartData() 
  return (
    <div className='container my-4' style={{height:"100vh"}}>
        <div className='row'>
            <OrderSummary cartitem={cartitem} carttotal={carttotal} tax={tax}/>
            <Payment />
        </div>

    </div>
  )
}

export default CheckOutPage