import { Helmet } from "react-helmet-async";
import SectionTitel from "../../Components/SectionTitel";
import { useForm } from "react-hook-form"
import { ImSpoonKnife } from "react-icons/im";

const Additems = () => {
     const { register, handleSubmit } = useForm()

     const onSubmit = (data) => {
          console.log(data)
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
                                   <select {...register("category", { required: true })} type="text"
                                        name="category"
                                        id="category"
                                        placeholder="Category" className='w-full px-3 py-2 border rounded-md border-red-300 focus:outline-red-300 bg-red-200 text-gray-900'>
                                        <option disabled >Select a category</option>
                                        <option value="salad">Salad</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="soup">Soup</option>
                                        <option value="dessert">Dessert</option>
                                        <option value="drinks">Drinks</option>
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