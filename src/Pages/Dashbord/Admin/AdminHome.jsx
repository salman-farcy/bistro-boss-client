import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/axiosSecureHook/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";


const AdminHome = () => {
     const { user } = useAuth()
     const axiosSecure = useAxiosSecure();

     const { data: stats = {} } = useQuery({
          queryKey: ['admin-stats'],
          queryFn: async () => {
               const res = await axiosSecure.get('/admin-stats')
               return res.data;
          }
     })

     const {data: cartData = []} = useQuery({
          queryKey: ['order-stats'],
          queryFn: async () => {
               const res = await axiosSecure.get('/order-stats')
               return res.data;
          }
     })


     

     return (
          <div className="text-3xl font-semibold">
               <div className="mt-5">
                    <span>Hi, Welcome </span>
                    {
                         user?.displayName ? user.displayName : 'back'
                    }
               </div>

               <div className="mt-5">
                    <div className=" stats stats-vertical lg:stats-horizontal shadow w-full">

                         <div className="bg-[#D471F9] stat flex items-center justify-center">
                              <div className="stat-title">
                                   <GiWallet color="black" />
                              </div>

                              <div className="">
                                   <div className="stat-value">${stats?.revenue}</div>
                                   <div className="stat-desc">Revenue</div>
                              </div>
                         </div>

                         <div className="bg-[#E0B676] stat flex items-center justify-center">
                              <div className="stat-title">
                                   <FaUsers color="black" />
                              </div>

                              <div className="">
                                   <div className="stat-value">{stats?.users}</div>
                                   <div className="stat-desc">Customers</div>
                              </div>
                         </div>

                         <div className="bg-[#FE7DAB] stat flex items-center justify-center">
                              <div className="stat-title">
                                   <LuChefHat color="black" />
                              </div>

                              <div className="">
                                   <div className="stat-value">{stats?.menuItems}</div>
                                   <div className="stat-desc">Menu</div>
                              </div>
                         </div>

                         <div className="bg-[#84C7FF] stat flex items-center justify-center">
                              <div className="stat-title">
                                   <CiDeliveryTruck color="black" />
                              </div>

                              <div className="">
                                   <div className="stat-value">{stats?.orders}</div>
                                   <div className="stat-desc">Orders</div>
                              </div>
                         </div>

                    </div>
               </div>

               
          </div>


     );
};

export default AdminHome;