import { Link } from 'react-router-dom'
import img1 from "./images/bruno-kelzer-LvySG1hvuzI-unsplash.jpg"

const Header = () => {
  return (
    <div className="py-5 px-3 text-white " style={{display:"flex",alignItems:"center", flexDirection:"column", backgroundColor:"#7161ef"}}>
      <h2 className='pb-3 text-center fs-1'>Welcome to the BuyHive Official Website</h2>
      <h5 className='pb-3 text-center'>Discover the latest models and Trends with Our website</h5>
      <button className='btn btn-primary' style={{overflow:"hidden"}}><Link to="/" className='py-3 text-center text-white text-decoration-none fw-bold'>Shopnow</Link></button>
    </div> 
    
//     <div id="carouselExampleCaptions" className="carousel slide mt-4">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{color:"black"}}></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" style={{color:"black"}}></button>
//     <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" style={{color:"black"}}></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <div style={{ position:"relative"}}>
//       <img 
//         src={img1}
//         alt="Slide 1" 
//         className="d-block w-100" 
//         style={{ maxHeight: "80vh", width: "100%", objectFit: "cover", }} 
//       />
//       </div>
      
//       <div className="carousel-caption  d-md-block text-white mb-5" >
//         <h5 style={{font:"bold", fontSize:"25px"}}>First slide label</h5>
//         <p>Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img 
//         src="your-image-2.jpg" 
//         alt="Slide 2" 
//         className="d-block w-100" 
//         style={{ maxHeight: "70vh", width: "100%", objectFit: "cover" }} 
//       />
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Second slide label</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img 
//         src="your-image-3.jpg" 
//         alt="Slide 3" 
//         className="d-block w-100" 
//         style={{ maxHeight: "70vh", width: "100%", objectFit: "cover" }} 
//       />
//       <div className="carousel-caption d-none d-md-block">
//         <h5>Third slide label</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>



  )
}

export default Header