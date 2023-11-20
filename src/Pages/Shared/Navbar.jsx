import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'


const Navbar = () => {

     const navOption = <>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
          <li><a>Item 4</a></li>
          <li><a>Item 5</a></li>
     </>
     return (
          <div className="navbar px-0  sm:px-4 md:px-6 lg:px-8 xl:px-10 py-0 sm:py-1 md:py-2 lg:py-4 xl:py-6 fixed z-10">
               <div className="navbar-start">
                    <div className="dropdown">
                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                         </label>
                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              {navOption}
                         </ul>
                    </div>
                    <Link to='/'>
                         <img className=" w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20" src={Logo} alt="" />
                    </Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         {navOption}
                    </ul>
               </div>
               <div className="navbar-end">
                    <a className="btn">Button</a>
               </div>
          </div>
     );
};

export default Navbar;