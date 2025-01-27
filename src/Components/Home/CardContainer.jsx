/* eslint-disable react/prop-types */
import HomeCard from './HomeCard'


const CardContainer = ({products}) => {
  return (
    <div className='d-flex justify-content-center align-item-center flex-column m-4 height-auto'>
      <div className='text-center mb-3'>
        <h3 className='py-3'>Our Products</h3>
      </div>
      
      <div>
        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
          {products.map(product=> <HomeCard  key={product.id} product={product}/>)}
          
        </div>
        
        
        
        

      </div>
        
      
    </div>
  )
}

export default CardContainer