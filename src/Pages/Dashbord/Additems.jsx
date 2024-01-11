import { Helmet } from "react-helmet-async";
import SectionTitel from "../../Components/SectionTitel";
import { useForm } from "react-hook-form"
import { ImSpoonKnife } from "react-icons/im";
import useAxiosPublic from "../../Hooks/axiosPublickHook/useAxiosPublic";
import useAxiosSecure from "../../Hooks/axiosSecureHook/useAxiosSecure";
import toast from "react-hot-toast";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Additems = () => {
     const { register, handleSubmit, reset } = useForm()
     const axiosPublic = useAxiosPublic();
     const axiosSecure = useAxiosSecure();

     const onSubmit = async (data) => {
          console.log(data)

          //image upload to imagbb and then get an url
          const imageFile = {image: data.image[0]}
          const res = await axiosPublic.post(image_hosting_api, imageFile, {
               headers: {
                    'content-type': 'multipart/form-data'
               }
          })

          if(res.data.success){
               const menuItem = { 
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
               }

               const menuRes = await axiosSecure.post('/menu', menuItem)
               console.log("🚀 ~ onSubmit ~ menuRes:", menuRes.data)
               if(menuRes.data.insertedId){
                    //show success popup
                    reset();
                    toast.success('Item add is Successfull')
               }    
          }
          console.log(res.data)
     }

     return (
          <div>
               <Helmet>
                    <title>Bistro Boss | Dashbord/Add-Items</title>
               </Helmet>
               <div className="bg-red-100 mb-5">
                    <SectionTitel subHeading={"---What's new?---"} heading={"ADD AN ITEM"}></SectionTitel>
               </div>

               <div className="bg-red-100 p-8">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                         <div className="">
                              <label htmlFor="name">
                                   Recipe Name*
                              </label>
                              <input
                                   {...register("name", { required: true })}
                                   type="name"
                                   name="name"
                                   id="name"
                                   placeholder="Recipe Name" className='w-full px-3 py-2 border rounded-md border-red-300 focus:outline-red-300 bg-red-200 text-gray-900' data-temp-mail-org='0'
                              />
                         </div>

                         <div className="flex gap-5">
                              <div className="w-full">
                                   <label htmlFor="category">
                                        Category*
                                   </label>
                                   <select defaultValue="default" {...register("category", { required: true })} type="text"
                                        name="category"
                                        id="category"
                                        placeholder="Category" className='w-full px-3 py-2 border rounded-md border-red-300 focus:outline-red-300 bg-red-200 text-gray-900'>
                                        <option value="default" disabled  className="text-lg font-bold text-black">Select A Category</option>
                                        <option value="salad">Salad</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="soup">Soup</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drinks">Drinks</option>
                                        <option value="popular">Popular</option>
                                        <option value="offered">Offered</option>
                                   </select>
                              </div>

                              <div className="w-full">
                                   <label htmlFor="price">
                                        Price*
                                   </label>
                                   <input
                                        {...register('price', { required: true })}
                                        type="text"
                                        name="price"
                                        id="price"
                                        placeholder="Price" className='w-full px-3 py-2 border rounded-md border-red-300 focus:outline-red-300 bg-red-200 text-gray-900' data-temp-mail-org='0'
                                   />
                              </div>
                         </div>

                         <div className="">
                              <label htmlFor="recipe">
                                   Recipe Details*
                              </label>
                              <textarea
                                   {...register("recipe", { required: true })}
                                   type="text"
                                   rows="5" 
                                   name="recipe"
                                   id="recipe"
                                   className="textarea textarea-bordered w-full px-3 py-2 border rounded-md border-red-300 focus:outline-red-300 bg-red-200 text-gray-900" placeholder="Recipe Details">
                              </textarea>
                         </div>

                         <div className="">
                              <input
                              {...register('image', {required: true})}
                               type="file" ></input>
                         </div>
                         
                         <button className='flex gap-3 px-3 py-2 border rounded-md border-red-300 focus:outline-red-300 bg-red-200 hover:bg-red-300 text-gray-900' type="submit">Add Item <ImSpoonKnife fontSize={30} className="mr-2" /></button>
                    </form>
               </div>
          </div>
     );
};

export default Additems;