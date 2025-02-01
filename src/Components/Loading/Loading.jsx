// import { RotateLoader,HashLoader } from "react-spinners"

// const Loading = () => {
//   return (
//     <div style={{height:"100vh", width:"100%"}} className="d-flex align-items-center justify-content-center mt-5">
//         <HashLoader  color="black"  style={{overflow:"hidden"}}/>
//     </div>
//   )
// }

// export default Loading
import "./Loading.css"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  return (
    <div className="div">
      <DotLottieReact
      src="https://lottie.host/95500656-4500-4cf5-ab7f-d9e13ccec580/iBm90ZaoP4.lottie"
      loop
      autoplay
      className='loadingsize'
    />
    </div>
    
    
  );
};

export default Loading