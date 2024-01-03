import { Helmet } from "react-helmet-async";
import SectionTitel from "../../Components/SectionTitel";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/axiosSecureHook/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";


const AllUsers = () => {
     const axiosSecure = useAxiosSecure()
     const { data: users = [] } = useQuery({
          queryKey: ['users'],
          queryFn: async () => {
               const res = await axiosSecure.get('/users');
               return res.data;
          }
     })

     

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

                                        <td>
                                             <button className="bg-red-300 hover:outline text-white p-2 rounded-sm">
                                                  <HiMiniUserGroup />
                                             </button>
                                        </td>
                                        <td>
                                             <button  className="bg-red-500 hover:outline text-white p-2 rounded-sm">
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