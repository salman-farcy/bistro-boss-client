import axiosSecure from ".";



const useAxiosSecure = () => {
     //request interceptor
     axiosSecure.interceptors.request.use( config => {
          const token = localStorage.getItem('access-token')
          console.log('request stopped by inerceptors', token);
          config.headers.authorization = `Bearer ${token}`
          return config
     }, function (error) {
          return Promise.reject(error)
     })
     return axiosSecure;
};

export default useAxiosSecure;