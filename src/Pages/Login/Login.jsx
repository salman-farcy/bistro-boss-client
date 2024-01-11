
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImagesh from '../../assets/others/authentication2.png'
// import loginBgImagesh from '../../assets/others/authentication.png'
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import SocailLogn from '../../Components/SocailLogn';

const Login = () => {
     //* state control component
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     // const captchaRef = useRef(null)
     const [disabled, setDisabled] = useState(true)

     const { signIn } = useAuth()

     const navigate = useNavigate()
     const location = useLocation()

     const from = location.state?.from?.pathname || "/";
     // console.log('state in the Location Login page ', location.state);
     

     useEffect(() => {
          loadCaptchaEnginge(4);
     }, [])

     const handleLogin = event => {
          event.preventDefault();
          console.log(email, password);



          //*User Login
          signIn(email, password)
               .then(result => {
                    const user = result.user
                    console.log(user);
                    toast.success('User Login Successfully ');
                    navigate(from, {replace: true})
               })
     }

     const handleValidateCaptcha = (e) => {
          const user_captcha_value = e.target.value;
          console.log(user_captcha_value);

          if (validateCaptcha(user_captcha_value)) {
               setDisabled(false)
          }
          else{
               setDisabled(true)
          }

     }

     return (

          <>
               <Helmet>
                    <title>Login</title>
               </Helmet>
               <div className='container mx-auto px-4 flex flex-col justify-center lg:flex-row items-center   gap-5'>
                    <div className="lg:w-1/2">
                         <img className='mx-auto' src={loginImagesh} alt="" />
                    </div>

                    <div className='lg:w-1/2 flex flex-col max-w-md p-2 md:p-4 lg:p-6 rounded-md sm:p-10  text-gray-900'>
                         <div className='mb-8 text-center'>
                              <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                              <p className='text-sm text-gray-400'>
                                   Sign in to access your account
                              </p>
                         </div>

                         <form
                              onSubmit={handleLogin}
                              noValidate=''
                              action=''
                              className='space-y-6 ng-untouched ng-pristine ng-valid'
                         >
                              <div className='space-y-4'>
                                   <div>
                                        <label htmlFor='email' className='block mb-2 text-sm'>
                                             Email address
                                        </label>
                                        <input
                                             onBlur={(e) => setEmail(e.target.value)}
                                             type='email'
                                             name='email'
                                             id='email'
                                             required
                                             placeholder='Enter Your Email Here'
                                             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                             data-temp-mail-org='0'
                                        />
                                   </div>

                                   <div>
                                        <div className='flex justify-between'>
                                             <label htmlFor='password' className='text-sm mb-2'>
                                                  Password
                                             </label>
                                        </div>
                                        <input
                                             onBlur={(e) => setPassword(e.target.value)}
                                             type='password'
                                             name='password'
                                             autoComplete='current-password'
                                             id='password'
                                             required
                                             placeholder='*******'
                                             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        />
                                   </div>

                                   <div>
                                        <label htmlFor='text' className='block mb-2 text-sm'>
                                             <LoadCanvasTemplate />
                                        </label>
                                        <input
                                             onBlur={handleValidateCaptcha}
                                             // ref={captchaRef}
                                             type='text'
                                             name='captcha' 
                                             id='text'
                                             required
                                             placeholder='Enter Your Capca Here'
                                             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                             data-temp-mail-org='0'
                                        />
{/* 
                                        <button
                                             // onClick={handleValidateCaptcha}
                                             className='bg-red-400 px-6 py-1 mt-5 rounded-md text-white'>Validate</button> */}
                                   </div>


                              </div>

                              <div>
                                   {/* <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading ? <TbFidgetSpinner className='animate-spin m-auto' />
                : <p>Continue</p>}
            </button> */}
                                   <button
                                        disabled={disabled}
                                        type='submit'
                                        className='bg-rose-500 w-full rounded-md py-3 text-white disabled:bg-rose-400'
                                   >
                                        <p>LogIn</p>
                                   </button>
                                   <div className="divider divider-error"></div> 
                                   <SocailLogn />
                              </div>
                         </form>

                         <div className='space-y-1'>
                              <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                                   Forgot password?
                              </button>
                         </div>
                         <div className='flex items-center pt-4 space-x-1'>
                              <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                              <p className='px-3 text-sm dark:text-gray-400'>
                                   Login with social accounts
                              </p>
                              <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                         </div>

                         {/* <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div> */}

                         <p className='px-6 text-sm text-center text-gray-400'>
                              Don&apos;t have an account yet?{' '}
                              <Link
                                   to='/signup'
                                   className='hover:underline hover:text-rose-500 text-gray-600'
                              >
                                   Sign Up
                              </Link>
                              
                         </p>

                         
                    </div>
               </div>
          </>


     );
};

export default Login;