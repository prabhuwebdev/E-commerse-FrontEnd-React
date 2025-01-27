import { useState } from "react";
import api from "../../api";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
    const [formdata,setformdata]=useState({
        "username":"",
        "first_name":"",
        "last_name":"",
        "email":"",
        "password":"",
        "confirm_password":""
    })
    const [Error,setError]=useState([])
    const navigate=useNavigate()
    // const[Error1,setError1]=useState()

const handlechange=(e)=>{
    const {name,value}=e.target
    setformdata({
        ...formdata,
        [name]:value
    })
}


const handlesubmit=(e)=>{
    e.preventDefault()
    api.post("register-user/register/",formdata)
    .then(res=>{
        console.log(res.data)
        // setError(null)
        if(res.data.username){
          setError(res.data.username[0])
          console.log(Error)
        } 
        else if(res.data.email){
          setError(res.data.email)
        }
        else if(res.data.password){
          setError(res.data.password[0])
          console.log(Error)
        }
        else{
          setTimeout(() => {
            navigate("/login")
          }, 1500);
          
        }
    })
    .catch(err=>{
        console.log(err.message)
        
    })
}




    return (
      <div className="d-flex flex-column min-vh-100 overflow-hidden vh-100">
      <section className="flex-grow-1 d-flex align-items-center justify-content-center gradient-custom-3 overflow-hidden vh-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-center">
              <div
                className="card form-container my-3"
                style={{
                  borderRadius: "15px",
                  maxWidth: "400px",
                  width: "100%",
                  boxShadow:"1px 1px 20px 1px rgb(198, 195, 195)"
                }}
            
              >
                <div className="card-body p-4">
                  <h2
                    className="text-uppercase text-center mb-4 overflow-hidden"
                    style={{ fontSize: "1.5rem" }}
                  >
                    Create an account
                  </h2>
    
                  <form onSubmit={handlesubmit}>
                    <div data-mdb-input-init className="form-outline mb-3">
                      <input
                        type="text"
                        name="username"
                        value={formdata.username}
                        className="form-control form-control-lg text-center"
                        placeholder="UserName"
                        onChange={handlechange}
                        style={{ fontSize: "0.9rem" }}
                      />
                    </div>
    
                    <div data-mdb-input-init className="form-outline mb-3">
                      <input
                        type="text"
                        name="first_name"
                        value={formdata.first_name}
                        className="form-control form-control-lg text-center"
                        placeholder="First Name"
                        onChange={handlechange}
                        style={{ fontSize: "0.9rem" }}
                      />
                    </div>
    
                    <div data-mdb-input-init className="form-outline mb-3">
                      <input
                        type="text"
                        name="last_name"
                        value={formdata.last_name}
                        className="form-control form-control-lg text-center"
                        placeholder="Last Name"
                        onChange={handlechange}
                        style={{ fontSize: "0.9rem" }}
                      />
                    </div>
    
                    <div data-mdb-input-init className="form-outline mb-3">
                      <input
                        type="email"
                        name="email"
                        value={formdata.email}
                        className="form-control form-control-lg text-center"
                        placeholder="E-Mail"
                        onChange={handlechange}
                        style={{ fontSize: "0.9rem" }}
                      />
                    </div>
    
                    <div data-mdb-input-init className="form-outline mb-3">
                      <input
                        type="password"
                        name="password"
                        value={formdata.password}
                        className="form-control form-control-lg text-center"
                        placeholder="Password"
                        onChange={handlechange}
                        style={{ fontSize: "0.9rem" }}
                      />
                    </div>
    
                    <div data-mdb-input-init className="form-outline mb-3">
                      <input
                        type="password"
                        name="confirm_password"
                        value={formdata.confirm_password}
                        className="form-control form-control-lg no-shadow text-center"
                        placeholder="Confirm Password"
                        onChange={handlechange}
                        style={{ fontSize: "0.9rem", outline:"none"}}
                      />
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <p className="text-danger" style={{ fontSize: "0.8rem" }}>
                          {Error}
                        </p>
                      </div>
                    </div>
    
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn  btn-block btn-sm text-body text-center"
                        style={{
                          fontSize: "0.9rem",
                          padding: "0.5rem 1.5rem",
                          backgroundColor:"#7161ef",
                          color:"#ffffff"
                        }}
                      >
                        Register
                      </button>
                    </div>
    
                    <p
                      className="text-center text-muted mt-4 mb-0"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Have already an account?{" "}
                      <a href="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    


    );
  };
  
  export default SignIn;
  
