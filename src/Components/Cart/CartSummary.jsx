/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const CartSummary = ({carttotal,tax}) => {
    
    const Total=(carttotal+tax).toFixed(2)
  return (
    <div className="col-md-3  overflow-hidden">
        <div className="cart-summary overflow-hidden">
            <div className="mb-3">
                <h4 className="text-center p-3">Cart Summary</h4>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <span>Sub Total</span>
                <span>{`${carttotal}`}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <span>Gst Tax</span>
                <span>{`${tax}`}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
                <span>Total</span>
                <span>{`${Total}`}</span>
            </div>
            <div className="my-3 text-center">
                <Link to="/checkout"><button className="btn text-uppercase border-black px-3">Proceed to Checkout</button></Link>

            </div>
            

        </div>
    </div>
    

  )
}

export default CartSummary