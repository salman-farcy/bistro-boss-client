import { FaCalendar, FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { FaSplotch } from "react-icons/fa6";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineReorder } from "react-icons/md";
import { FaPersonSkiingNordic } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";
import { AiFillHome } from "react-icons/ai";
import useCart from "../Hooks/useCart";
import { FaShoppingBag } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { GiBanknote } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBook } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";




const DashBord = () => {
     const [cart] = useCart()

     //TODO: get is isAdmin value from the database
     const isAdmin = true;


     return (
          <div className=" ">
               <Helmet>
                    <title>Bistro Boss | Dashbord</title>
               </Helmet>

               <div className="flex  bg-gray-50">
                    <div className="w-64  min-h-screen bg-red-100">
                         <ul className="menu">
                              {
                                   isAdmin ? <>
                                        <li>
                                             <NavLink to="/dashbord/adminhome">
                                                  <AiFillHome fontSize={30} className="mr-2" /> Admin Home
                                             </NavLink>
                                        </li>

                                        <li>
                                             <NavLink to="/dashbord/additems">
                                                  <ImSpoonKnife fontSize={30} className="mr-2" /> Add Items
                                             </NavLink>
                                        </li>

                                        <li>
                                             <NavLink to="/dashbord/manageitems">
                                                  <TfiMenuAlt fontSize={30} className="mr-2" /> Manage Items
                                             </NavLink>
                                        </li>

                                        <li>
                                             <NavLink to="/dashbord/managebookings">
                                                  <FaBook fontSize={30} className="mr-2" /> Manage bookings
                                             </NavLink>
                                        </li>

                                        <li>
                                             <NavLink to="/dashbord/allusers">
                                                  <HiUserGroup fontSize={30} className="mr-2" /> All Users
                                             </NavLink>
                                        </li>

                                   </>
                                        : <>
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
                                                  <NavLink to="/dashbord/paymenthistory">
                                                       <GiBanknote fontSize={30} className="mr-2" /> Payment History
                                                  </NavLink>
                                             </li>


                                             <li>
                                                  <NavLink to="/dashbord/cart">
                                                       <FaCartShopping fontSize={30} className="mr-2" /> My Cart <span className="badge">{cart.length}</span>
                                                  </NavLink>
                                             </li>

                                             <li>
                                                  <NavLink to="/dashbord/addreview">
                                                       <FaSplotch fontSize={30} className="mr-2" /> Add Review
                                                  </NavLink>
                                             </li>

                                             <li>
                                                  <NavLink to="/dashbord/mybookings">
                                                       <BsFillJournalBookmarkFill fontSize={30} className="mr-2" /> My Bookings
                                                  </NavLink>
                                             </li>
                                        </>
                              }

                              <div className="divider"></div>
                              {/* Shared Nav Links */}
                              <li>
                                   <NavLink to="/">
                                        <AiFillHome fontSize={30} className="mr-2" /> Home
                                   </NavLink>
                              </li>

                              <li>
                                   <NavLink to="/menu">
                                        <MdOutlineReorder fontSize={30} className="mr-2" /> Menu
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink to="/order/salad">
                                        <FaPersonSkiingNordic fontSize={30} className="mr-2" /> Order
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink to="/order/salad">
                                        <FaShoppingBag fontSize={30} className="mr-2" /> Shop
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink to="/order/salad">
                                        <BiSolidContact fontSize={30} className="mr-2" /> Contact
                                   </NavLink>
                              </li>


                         </ul>
                    </div>

                    <div className="flex-1 px-5 ">
                         <Outlet></Outlet>
                    </div>
               </div>
          </div>
     );
};

export default DashBord;