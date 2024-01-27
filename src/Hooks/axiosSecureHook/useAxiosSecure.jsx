import { useNavigate } from "react-router-dom";
import axiosSecure from ".";
import useAuth from "../useAuth";



const useAxiosSecure = () => {
     const navigate = useNavigate();
     const { logOut } = useAuth();
     
     // request interceptor to add authorization header for every secure call to the api
     axiosSecure.interceptors.request.use(config => {
          const token = localStorage.getItem('access-token')
          // console.log('request stopped by inerceptors before adding token', token);
          config.headers.authorization = `Bearer ${token}`
          return config
     },  (error) => {
          return Promise.reject(error)
     })

     //interceptors 401 and 403 status
     axiosSecure.interceptors.response.use(response => {
          return response
     }, async (error) => {
          console.log(error);
          
          const status = error.response.status;
          console.log('status error in the interceptor', status);

          //for 401 or 403 logout the user and move the user to the login
          if (status === 401 || status === 403){
               await logOut()
               navigate("/login")
          }
          return Promise.reject(error);
     })
     return axiosSecure;
};

export default useAxiosSecure;