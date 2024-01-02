import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/axiosPublickHook/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";


const SocailLogn = () => {
     const { googleSignIn } = useAuth();
     const axiosPublic = useAxiosPublic()
     const navigate = useNavigate()
     const location = useLocation()

     const from = location.state?.from?.pathname || "/";
     console.log('state in the Location Login page ', location.state);

     const handleGoogleSignIn = () => {
          googleSignIn()
          .then(result => {
               console.log(result.user.email);
               const userInfo = { 
                    name: result?.user?.displayName,
                    email: result?.user?.email
               }
               axiosPublic.post('/users', userInfo)
               .then(res => {
                    console.log(res.data);
                    navigate(from, {replace: true})
               })
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