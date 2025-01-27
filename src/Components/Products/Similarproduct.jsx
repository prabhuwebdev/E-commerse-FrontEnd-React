/* eslint-disable react/prop-types */
import HomeCard from "../Home/HomeCard"


const Similarproduct = ({products}) => {
  return (
    <div>
        <div className="">
            <div>
                <p className="display-5 d-flex justify-content-center mb-lg-3 my-sm-3 " style={{overflow:"hidden"}}>Related Products</p>
            </div>
            <div className="row justify-content-center gap-md-4">
                {products.map((val)=> <HomeCard  key={val.id} product={val}/>)}
            </div>
        </div>
    </div>
  )
}

export default Similarproduct