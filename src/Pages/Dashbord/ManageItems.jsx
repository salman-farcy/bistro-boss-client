import useMenu from '../../Hooks/UseMenu';
import { Helmet } from 'react-helmet-async';
import SectionTitel from '../../Components/SectionTitel';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FaRegPenToSquare } from "react-icons/fa6";
import useAxiosSecure from '../../Hooks/axiosSecureHook/useAxiosSecure';


const ManageItems = () => {
     const [refetch, menu, , ] = useMenu()
     const axiosSecure = useAxiosSecure()
     //User Delete Operation
     const handleDeleteItem =  item => {
          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
               if (result.isConfirmed) {
                    // data fatch
                    const res = await axiosSecure.delete(`/menu/${item._id}`)
                    console.log(res);
                    if (res.data.deletedCount > 0) {
                         refetch()
                         Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${item.name} has been deleted`,
                              showConfirmButton: false,
                              timer: 1500
                            });
                    }
               }
          });
     }





     return (
          <div>
               <Helmet>
                    <title>Bistro Boss | Dashbord/ManageItems</title>
               </Helmet>
               <div className="bg-red-100 mb-5">
                    <SectionTitel subHeading={"---Hurry Up!---"} heading={"MANAGE ALL ITEMS"}></SectionTitel>
               </div>
               <div className="bg-red-100">
                    <div className="overflow-x-auto">
                         <table className="table">
                              {/* head */}
                              <thead>
                                   <tr>
                                        <th>Q</th>
                                        <th>Item Image</th>
                                        <th>Item Name</th>
                                        <th>Price</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        menu.map((item, index) => <tr className="hover:bg-red-200 hover:font-semibold" key={item._id}>
                                             <td>{index + 1}</td>
                                             <td><img src={item?.image} className='mask w-12 h-12' /></td>
                                             <td>{item?.name}</td>
                                             <td>${item?.price}</td>

                                             <td>
                                                  <button className="bg-red-300 hover:outline text-white p-2 rounded-sm">
                                                       <FaRegPenToSquare />
                                                  </button>
                                             </td>

                                             <td>
                                                  <button onClick={() => handleDeleteItem(item)} className="bg-red-500 hover:outline text-white p-2 rounded-sm">
                                                       <FaTrash />
                                                  </button>
                                             </td>
                                        </tr>)
                                   }
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default ManageItems;