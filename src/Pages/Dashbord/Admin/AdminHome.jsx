import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/axiosSecureHook/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'green'];


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

     const { data: cartData = [] } = useQuery({
          queryKey: ['order-stats'],
          queryFn: async () => {
               const res = await axiosSecure.get('/order-stats')
               return res.data;
          }
     })

     // Custom shape for the bar chart
     const getPath = (x, y, width, height) => {
          return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
          ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;
     };

     const TriangleBar = (props) => {
          const { fill, x, y, width, height } = props;

          return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
     };

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

               <div className="flex gap-5">
                    {/* chart 01 */}
                    <div className="">
                    
                         <BarChart
                              width={800}
                              height={500}
                              data={cartData}
                              margin={{
                                   top: 50,
                                   right: 30,
                                   left: 20,
                                   bottom: 5,
                              }}
                         >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="category" />
                              <YAxis />
                              <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                   {cartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % 7]} />
                                   ))}
                              </Bar>
                         </BarChart>
                         
                    </div>

                    {/* chart 02 */}
               </div>
          </div>


     );
};

export default AdminHome;