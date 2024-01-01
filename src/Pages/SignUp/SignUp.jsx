import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import loginImagesh from '../../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";


const SignUp = () => {
     const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: { email: "@gmail.com" } });
     const { createUser, updateUserProflie } = useAuth()
     const navigate = useNavigate()
     // const location = useLocation()

     // const from = location.state?.from?.pathname || "/";

     const onSubmit = (data) => {
          console.log(data)
          createUser(data.email, data.password)
               .then(result => {
                    const loggedUser = result.user
                    console.log(loggedUser);
                    toast.success('User SignUp Successfully');
                    navigate('/')

                    //? Update Your Profile
                    updateUserProflie(data.name, data.photoURL)
                         .then(() => {
                              //?create user entry in the database
                              
                              toast.success('User Update Successfully');
                              reset();
                              navigate('/')
                         })
                         .catch(error => console.log(error))

               })
     }







     return (
          <>
               <Helmet>
                    <title>Sign Up</title>
               </Helmet>
               <div className='container mx-auto px-4 flex flex-col justify-center lg:flex-row items-center   gap-5'>
                    <div className="lg:w-1/2">
                         <img className='mx-auto' src={loginImagesh} alt="" />
                    </div>

                    <div className='lg:w-1/2 flex flex-col max-w-md p-2 md:p-4 lg:p-6 rounded-md sm:p-10  text-gray-900'>
                         <div className='mb-8 text-center'>
                              <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                              <p className='text-sm text-gray-400'>
                                   Sign in to access your account
                              </p>
                         </div>

                         <form
                              onSubmit={handleSubmit(onSubmit)}
                              noValidate=''
                              action=''
                              className='space-y-6 ng-untouched ng-pristine ng-valid'
                         >
                              <div className='space-y-4'>

                                   <div>
                                        <label htmlFor='email' className='block mb-2 text-sm'>
                                             Name
                                        </label>
                                        <input
                                             {...register("name", { required: true, maxLength: 7 })}
                                             type='name'
                                             name='name'
                                             id='name'
                                             placeholder='Enter Your Name Here'
                                             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                             data-temp-mail-org='0'
                                        />
                                        {errors.name && <span className="text-red-500 font-semibold">Name is required</span>}

                                   </div>

                                   <div>
                                        <label htmlFor='Photo' className='block mb-2 text-sm'>
                                             Photo
                                        </label>
                                        <input
                                             {...register("photoURL", { required: true, })}
                                             type='url'
                                             id='photoUrl'
                                             placeholder='Photo URL'
                                             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                             data-temp-mail-org='0'
                                        />
                                        {errors.photoURL && <span className="text-red-500 font-semibold">Photo URL is required</span>}

                                   </div>

                                   <div>
                                        <label htmlFor='email' className='block mb-2 text-sm'>
                                             Email address
                                        </label>
                                        <input
                                             {...register("email", { required: 'Email is required sss' })}
                                             type='email'
                                             name='email'
                                             id='email'
                                             placeholder='Enter Your Email Here'
                                             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                             data-temp-mail-org='0'
                                        />
                                        {errors.email && <span className="text-red-500 font-semibold">{errors?.email?.message}</span>}
                                   </div>

                                   <div>
                                        <div className='flex justify-between'>
                                             <label htmlFor='password' className='text-sm mb-2'>
                                                  Password
                                             </label>
                                        </div>
                                        <input
                                             {...register("password", { required: true, minLength: 6, maxLength: 26, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/ })}

                                             type='password'
                                             name='password'
                                             autoComplete='current-password'
                                             id='password'
                                             placeholder='*******'
                                             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        />
                                        {errors?.password?.type === 'required' && <span className="text-red-500 font-semibold">Password is required</span>}
                                        {errors?.password?.type === 'minLength' && <span className="text-red-500 font-semibold">Password Must be 6 characters</span>}
                                        {errors?.password?.type === 'maxLength' && <span className="text-red-500 font-semibold">Password Maximum Use 26 characters</span>}
                                        {errors?.password?.type === 'pattern' && <span className="text-red-500 font-semibold">puron korte hobe</span>}

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
                                        // disabled={disabled}
                                        type='submit'
                                        className='bg-rose-500 w-full rounded-md py-3 text-white disabled:bg-rose-400'
                                   >
                                        <p>Sign Up</p>
                                   </button>
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
                              All Rady have an account yet?{' '}
                              <Link
                                   to='/login'
                                   className='hover:underline hover:text-rose-500 text-gray-600'
                              >
                                   Sing In
                              </Link>
                              .
                         </p>
                    </div>
               </div>
          </>
     );
};

export default SignUp;