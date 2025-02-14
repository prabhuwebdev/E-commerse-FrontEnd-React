import  { useContext, useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import  "./Login.css"
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Contex/AuthContext';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Login = () => {
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const [error,seterror]=useState("")
  const navigate=useNavigate()
  const location=useLocation()
  const {setisauthenticated,UserName}=useContext(AuthContext)
  

  const userInfo={username,password}

const SubmitInfo=(e)=>{
  e.preventDefault()
  api.post("token/",userInfo)
  .then(res=>{
    localStorage.setItem("access",res.data.access)
    localStorage.setItem("refresh",res.data.refresh)
    setusername("")
    setpassword("")
    UserName()
    setisauthenticated(true)
    console.log(res.data)
    const from =location.state?.from?.pathname || "/"
    console.log(from)
    navigate(from,{replace:true});
    
  })
  .catch(err=>{
    console.log(err.message)
    seterror("Username Or Password Is Incorrect")
  })


}

  return (
    <section className="h-100 gradient-custom vh-100">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-5">
          <div
            className="card my-3"
            style={{
              borderRadius: "1rem",
              backgroundColor: "white",
              color: "black",
              maxWidth: "400px",
              margin: "0 auto",
              boxShadow:"1px 1px 20px 1px rgb(198, 195, 195)"            }}
          >
            <div className="card-body p-4 text-center">
              <form onSubmit={SubmitInfo}>
                <div className="mb-md-4 mt-md-3 pb-4">
                  <h2
                    className="fw-bold mb-3 text-uppercase overflow-hidden"
                    style={{ fontSize: "1.4rem" }}
                  >
                    Login
                  </h2>
                  <p className="mb-4" style={{ fontSize: "0.9rem" }}>
                    Please enter your UserName and Password
                  </p>
  
                  <div data-mdb-input-init className="form-outline mb-3">
                    <input
                      type="text"
                      id="UserName"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      className="form-control form-control-sm text-center p-2"
                      placeholder="Username"
                      style={{ fontSize: "0.85rem" }}
                    />
                  </div>
  
                  <div data-mdb-input-init className="form-outline mb-3">
                    <input
                      type="password"
                      id="typePassword"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      className="form-control form-control-sm text-center p-2"
                      placeholder="Password"
                      style={{ fontSize: "0.85rem", }}
                    />
                  </div>
  
                  <p className="text-danger" style={{ fontSize: "0.8rem" }}>
                    {error}
                  </p>
                  <button
                    className="btn btn-outline-dark btn-sm px-4"
                    type="submit"
                    style={{ fontSize: "0.9rem", backgroundcolor:"#7161ef" ,}}
                  >
                    Login
                  </button>
  
                  <div className="d-flex justify-content-center mt-3">
                    <a
                      href="#!"
                      className="text-dark mx-2"
                      style={{ fontSize: "1.3rem" }}
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="#!"
                      className="text-dark mx-2"
                      style={{ fontSize: "1.3rem" }}
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#!"
                      className="text-dark mx-2"
                      style={{ fontSize: "1.3rem" }}
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </form>
  
              <div>
                <p className="mb-0">
                  Don’t have an account?{" "}
                  <a href="signin" className="fw-bold" style={{ fontSize: "0.9rem" }}>
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
};

export default Login;
