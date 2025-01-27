/* eslint-disable react/prop-types */
import { baseurl } from "../../api"
import image from "./images/88363bdd-b903-4e0d-8b89-75ddd347b081.jpg"

const UserInfo = ({userdetail}) => {
  return (
    <div className="container mb-sm-4">
        <div className='row'>
        <div className='card col-md-4 text-center d-flex justify-content-center align-items-center mobile-md-4'>
            <img src={`${image}`} className='image-fluid rounded-circle objectfit-cover  mb-2'  style={{width:"120px", height:"120px", border:"1px solid black"}}/>
            <h4 style={{overflow:"hidden"}}>{userdetail.username}</h4>
            <p className='text-muted mt-2'></p>
            <button className='btn  mb-3 text-white' style={{border:"1px solid black", backgroundColor:"#6050DC"}}>Edit Profle</button>
        </div>
        <div className='col-md-8 mt-sm-3'>
            <div className='card'>
                <div className='card-header p-3 m-2'style={{backgroundColor:"#6050DC", color:"white"}}>
                    <h3 style={{overflow:"hidden"}}>ACCOUNT OVERVIEW</h3>
                </div>
                <div className='card-body'>
                    <div className='row d-flex justify-content-between'> 
                        <div className='col-md-6 p-3'>
                            <p className='my-3'>
                                <strong>Full Name:</strong> {`${userdetail.first_name}`} {`${userdetail.last_name}`}
                            </p>
                            <p className='my-3'>
                                <strong>E-Mail:</strong>{userdetail.email}
                            </p>
                            <p className='my-3'>
                                <strong>Phone Number:</strong>{userdetail.phone}
                            </p>
                        </div>
                        <div className='col-md-6'>
                            <p className='my-3'>
                                <strong>City:</strong>{userdetail.city}
                            </p>
                            <p className='my-3'>
                                <strong>State:</strong> {userdetail.state}
                            </p>
                            <p className='my-3'>
                                <strong>Member Since</strong> 6 January 2025
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
    </div>
    
  )
}

export default UserInfo