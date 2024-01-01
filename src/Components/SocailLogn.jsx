import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";


const SocailLogn = () => {
     const { googleSignIn } = useAuth();

     const handleGoogleSignIn = () => {
          googleSignIn()
          .then(result => {
               console.log(result.user);
          })
     }
 
     return (
          <div>
               <div className="">
                    <button onClick={handleGoogleSignIn} className="btn btn-block ">
                         <FcGoogle fontSize={40} />
                         Google
                    </button>
               </div>
          </div>
     );
};

export default SocailLogn;