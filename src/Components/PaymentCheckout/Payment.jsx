import api from "../../api"

const Payment = () => {

    const cart_code=localStorage.getItem("cart_code")
    const Payment=()=>{
        api.post("initiate-payment/",{cart_code})
        .then(res=>{
            console.log(res.data)
            console.log(res.data.short_url)
            window.location.href=res.data.short_url
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

  return (
    <div className='col-md-4'>
        <div className='card'>
            <div className='d-flex align-items-center card-header'>
                <h5 className='text-center' style={{overflow:"hidden"}}>Payment Options</h5>
            </div>
            <div className='card-body mt-3'>
                {/* button for paypal */}
                <button className='mb-3 btn w-100' style={{backgroundColor:"#9d4edd"}}onClick={Payment} >
                    <i className='bi bi-razorpay'> Pay With Razorpay</i>
                </button>

                {/* button for creditcard */}

                <button className='btn mb-2 w-100' style={{backgroundColor:"#ffc300"}}>
                    <i className='bi bi-credit-card'></i> Pay Via CreditCard
                </button>
            </div>
        </div>
    </div>
  )
}

export default Payment