import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { FaSplotch } from "react-icons/fa6";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineReorder } from "react-icons/md";
import { FaPersonSkiingNordic } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { AiFillHome } from "react-icons/ai";
import SectionTitel from "../Components/SectionTitel";




const DashBord = () => {
     return (
          <div className=" ">
               <Helmet>
                    <title>Bistro Boss | Dashbord</title>
               </Helmet>

               <div className="flex  bg-gray-50">
                    <div className="w-64  min-h-screen bg-red-100">
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
                                        <FaSplotch fontSize={30} className="mr-2" /> Add Review
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/dashbord/bookings">
                                        <BsFillJournalBookmarkFill fontSize={30} className="mr-2" /> My Bookings
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

                    <div className="flex-1 px-5 ">
                         <div className="bg-red-100 mb-5">
                              <SectionTitel subHeading={"---My Cart---"} heading={"WANNA ADD MORE?"}></SectionTitel>
                         </div>

                         <div className="">
                              <Outlet></Outlet>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DashBord;