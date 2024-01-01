import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/axiosPublickHook/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocailLogn = () => {
     const { googleSignIn } = useAuth();
     const axiosPublic = useAxiosPublic()
     const navigate = useNavigate()

     const handleGoogleSignIn = () => {
          googleSignIn()
          .then(result => {
               console.log(result.user.email);
               const userInfo = { 
                    email: result?.user?.email,
                    name: result?.user?.displayName
               }

               axiosPublic.post('/users', userInfo)
               .then(res => {
                    console.log(res.data);
                    navigate('/')
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