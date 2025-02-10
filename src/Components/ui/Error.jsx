import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Error = () => {
  return (
    <div className='row d-flex justify-content-center align-items-center mt-sm-1'style={{display:"flex",alignContent:"center",justifyContent:"center", height:"100vh"}}>
      <div className='image-fluid d-flex align-items-center justify-content-center mb-sm-1'>  
    <DotLottieReact
      src="https://lottie.host/8a4a10d2-18f3-42aa-bc41-f029998f4e29/Jam0jQjBjY.lottie"
      loop
      autoplay
      style={{height:"auto",width:"100%",maxWidth:"500px"}}
    />
      </div>
         <h3 className='overflow-hidden text-center mt-4'>Some Error Occured Plz Refresh The Page</h3>
    </div>
  )
}

export default Error