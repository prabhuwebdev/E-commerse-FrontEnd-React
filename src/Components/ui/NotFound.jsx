
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <>
        <div className="py-5 px-3 text-white vh-100 d-flex align-items-center justify-content-center " style={{display:"flex",alignItems:"center", flexDirection:"column", backgroundColor:"#7161ef"}}>
            <h2 className='pb-3 text-center fs-1'>Page Not Found</h2>
            <h5 className='pb-3 text-center'>The page you tried to access does not exist</h5>
            <button className='btn btn-primary overflow-hidden'><Link className='py-3 text-center text-white text-decoration-none fw-bold' to="/">Back</Link></button>
        </div>
    </>
  )
}

export default NotFound