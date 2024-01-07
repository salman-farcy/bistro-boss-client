import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret";
import DashBord from "../Layout/DashBord";
import Cart from "../Pages/Dashbord/Cart";
import UserHome from "../Pages/Dashbord/UserHome";
import AllUsers from "../Pages/Dashbord/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


const bistroRouter = createBrowserRouter([
     {
         path: "/",
         element:  <MainLayout />,
         children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: 'menu',
                    element: <Menu></Menu>
               },
               {
                    path: 'order/:category',
                    element: <Order></Order>
               },
               {
                    path: 'login',
                    element: <Login></Login>
               },
               
         ]
     },
     {
          path: 'dashbord',
          element: <PrivateRoute><DashBord /></PrivateRoute>,
          children: [
               {
                    path: 'cart',
                    element: <Cart />
               },
               {
                    path: 'userhome',
                    element: <UserHome />
               },


               // Admin routes
               {
                    path: 'users',
                    element: <AdminRoute><AllUsers /></AdminRoute>
               },
               
          ]
     },
     {
          path: 'signUp',
          element: <SignUp />
     },
     {
          path: 'secret',
          element: <PrivateRoute><Secret /></PrivateRoute> 
     }
])

export default bistroRouter;