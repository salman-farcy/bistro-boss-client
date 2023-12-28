import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { FaSplotch } from "react-icons/fa6";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineReorder } from "react-icons/md";
import { FaPersonSkiingNordic } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { AiFillHome } from "react-icons/ai";




const DashBord = () => {
     return (
          <div className="flex ">
               <Helmet>
                    <title>Bistro Boss | Dashbord</title>
               </Helmet>

               <div className="w-64  min-h-screen bg-orange-300">
                    <ul className="menu">
                         <li>
                              <NavLink to="/dashbord/userhome">
                                   <AiFillHome fontSize={30} className="mr-2" /> User Home
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/dashbord/reservation">
                                   <FaCalendar fontSize={30} className="mr-2" /> Reservation 
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/dashbord/cart">
                                   <FaCartShopping fontSize={30} className="mr-2" /> My Cart
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/dashbord/review">
                                   <FaSplotch fontSize={30} className="mr-2"  /> Add Review
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/dashbord/bookings">
                                   <BsFillJournalBookmarkFill fontSize={30} className="mr-2"  /> My Bookings
                              </NavLink>
                         </li>
                         
                         <div className="divider"></div>

                         <li>
                              <NavLink to="/">
                                   <AiFillHome fontSize={30} className="mr-2" /> Home
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/order/salad">
                                   <FaPersonSkiingNordic fontSize={30} className="mr-2" /> Order
                              </NavLink>
                         </li>

                         <li>
                              <NavLink to="/menu">
                                   <MdOutlineReorder fontSize={30} className="mr-2" /> Menu
                              </NavLink>
                         </li>

                    </ul>
               </div>

               <div className="flex-1">
                    <Outlet></Outlet>
               </div>

          </div>
     );
};

export default DashBord;