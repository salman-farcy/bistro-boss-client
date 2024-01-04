import { Helmet } from "react-helmet-async";
import SectionTitel from "../../Components/SectionTitel";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/axiosSecureHook/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import Swal from "sweetalert2";



const AllUsers = () => {
     const axiosSecure = useAxiosSecure()
     const { refetch, data: users = [] } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await axiosSecure.get('/users', {
                    headers: {
                         authorization: `Bearer ${localStorage.getItem('access-token')}`
                    }
               });
               return res.data;
          }
     })

     //User Delete Operation
     const handleDeletUser = user => {
          console.log('deleted', user);

          Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
          }).then((result) => {
               if (result.isConfirmed) {

                    //data fatch
                    axiosSecure.delete(`/users/${user?._id}`)
                         .then(res => {
                              console.log(res);

                              if (res.data.deletedCount > 0) {
                                   refetch()
                                   Swal.fire({
                                        title: "Deleted!",
                                        text: "Your file has been deleted.",
                                        icon: "success"
                                   });
                              }

                         })
               }
          });
     }

     //admin create and patch opration
     const handleMakeAdmin = user => {
          axiosSecure.patch(`/users/admin/${user?._id}`)
               .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                         refetch()
                         Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${user?.name} is an admin now`,
                              showConfirmButton: false,
                              timer: 1500
                         });
                    }

               })
     }

     return (
          <div>
               <Helmet>
                    <title>Bistro Boss | Dashbord/All Users</title>
               </Helmet>
               <div className="bg-red-100 mb-5">
                    <SectionTitel subHeading={"---How many??---"} heading={"MANAGE ALL USERS"}></SectionTitel>
               </div>


               <div className="flex justify-evenly bg-red-100 py-4">
                    <h2>All Users</h2>
                    <h2>Total Users: {users.length}</h2>
               </div>

               <div className="overflow-x-auto">
                    <table className="table">
                         {/* head */}
                         <thead>
                              <tr>
                                   <th>Q</th>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Roll</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   users.map((user, index) => <tr className="hover:bg-red-100 hover:font-semibold" key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>

                                        {
                                             user.role === 'admin' ? 'Admin' : <td>
                                                  <button onClick={() => handleMakeAdmin(user)} className="bg-red-300 hover:outline text-white p-2 rounded-sm">
                                                       <HiMiniUserGroup />
                                                  </button>
                                             </td>
                                        }
                                        <td>
                                             <button onClick={() => handleDeletUser(user)} className="bg-red-500 hover:outline text-white p-2 rounded-sm">
                                                  <FaTrash />
                                             </button>
                                        </td>
                                   </tr>)
                              }
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default AllUsers;