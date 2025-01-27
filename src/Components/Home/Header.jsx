import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="py-5 px-3 text-white " style={{display:"flex",alignItems:"center", flexDirection:"column", backgroundColor:"#7161ef"}}>
      <h2 className='pb-3 text-center fs-1'>Welcome to the Shopitty Official Website</h2>
      <h5 className='pb-3 text-center'>Discover the latest models and Trends with Our website</h5>
      <button className='btn btn-primary' style={{overflow:"hidden"}}><Link to="/" className='py-3 text-center text-white text-decoration-none fw-bold'>Shopnow</Link></button>
    </div> 
  )
}

export default Header