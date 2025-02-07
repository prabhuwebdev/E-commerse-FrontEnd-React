import { FaInstagram,FaFacebook,FaTwitterSquare } from "react-icons/fa"
import styles from './Footer.module.css'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
        <div className="container text-center">
            <div className="mb-4 pt-3">
                {/* <a href="#" className=" text-decoration-none text-white fw-bold mx-4">Home</a> */}
                <Link to="/" className=" text-decoration-none text-white fw-bold mx-4">Home</Link>
                <a href="#" className=" text-decoration-none text-white fw-bold mx-4">About</a>
                <a href="#" className=" text-decoration-none text-white fw-bold mx-4 ">Contact Us</a>
            </div>

            <div className="mb-3">
            <a href="#" className="text-white fw-bold mx-3"style={{fontSize:"28px"}}><FaFacebook /></a>
            <a href="#" className="text-white fw-bold mx-3"style={{fontSize:"28px"}}><FaInstagram /></a>
            <a href="#" className="text-white fw-bold mx-2"style={{fontSize:"28px"}}><FaTwitterSquare /></a>  
            </div>
            <div  className="py-2 fw-bold">
            <p style={{color:"white"}}>&copy2024 Shopitty</p>
            </div>
            

        </div>

    </footer>
  )
}

export default Footer