import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaSplotch } from "react-icons/fa6";
import { BsFillJournalBookmarkFill } from "react-icons/bs";




const DashBord = () => {
     return (
          <div className="flex ">

               <div className="w-64  min-h-screen bg-orange-300">
                    <ul className="menu">
                         <li>
                              <NavLink to="/dashbord/userhome">
                                   <IoHomeSharp fontSize={30} className="mr-2" /> User Home
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
                    </ul>
               </div>

               <div className="flex-1">
                    <Outlet></Outlet>
               </div>

          </div>
     );
};

export default DashBord;