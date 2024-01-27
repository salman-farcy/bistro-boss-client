import { Link } from "react-router-dom";
import Logo from '../../../public/logo.png'
import useAuth from "../../Hooks/useAuth";
import userProfile from "../../assets/others/profile.png";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";


const Navbar = () => {
     const { user, logOut } = useAuth();
     const [cart] = useCart()
     const [isAdmin] = useAdmin()

     const handleLogout = () => {
          logOut()
               .then(() => { })
               .catch(error => console.log(error))
     }


     const navOption = <>
          <li className="text-white"><Link to="/">Home</Link></li>
          <li className="text-white"><Link to="/menu">Menu</Link></li>
          <li className="text-white"><Link to="order/salad">Order</Link></li>
          <li className="text-white"><Link to="/secret">Secret</Link></li>

          {
               user && !isAdmin && <li className="text-white"><Link to="/dashbord/userhome">Dashbord</Link></li>
          }
          {
               user && isAdmin && <li className="text-white"><Link to="/dashbord/adminhome">Dashbord</Link></li>
          }

          {
               user ?
                    <>
                         {/* <li className="text-white"><Link to="/dashbord">Dashbord</Link></li> */}
                         <button onClick={handleLogout} className="btn btn-neutral">LogOut</button>
                    </>

                    : <><li className="text-white"><Link to="/login">Login</Link></li></>
          }
          <li>
               <Link to="/dashbord/cart">
                    <button className="btn">
                         <FaCartShopping fontSize={30} className="mr-2" />
                         <div className="badge badge-secondary">+{cart.length}</div>
                    </button>
               </Link>
          </li>
     </>
     return (
          <div className="navbar  px-0 bg-[#15151580]  sm:px-4 md:px-6 lg:px-8 xl:px-10  py-1 md:py-2  fixed z-10">
               <div className="navbar-start ">
                    <div className="dropdown">
                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                         </label>
                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              {navOption}
                         </ul>
                    </div>
                    <Link to='/'>
                         <img className=" w-10 sm:w-12 md:w-14 lg:w-16 " src={Logo} alt="" />
                    </Link>
               </div>
               <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                         {navOption}
                    </ul>
               </div>
               <div className="navbar-end">
                    <div className="flex items-center gap-5">
                         <span className="text-white">{user?.displayName}</span>
                         <img className="h-10 w-10 rounded-full" src={user && user.photoURL ? user.photoURL : userProfile} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Navbar;