import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret";
import DashBord from "../Layout/DashBord";
import Cart from "../Pages/Dashbord/User/Cart";
import UserHome from "../Pages/Dashbord/User/UserHome";
import AllUsers from "../Pages/Dashbord/Admin/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Additems from "../Pages/Dashbord/Admin/Additems";
import ManageItems from "../Pages/Dashbord/Admin/ManageItems";
import UpdateItem from "../Pages/Dashbord/Admin/UpdateItem";
import Payment from "../Pages/Dashbord/User/Payments/Payment";
import PaymentHistory from "../Pages/Dashbord/User/PaymentHistory";
import AdminHome from "../Pages/Dashbord/Admin/AdminHome";


const bistroRouter = createBrowserRouter([
     {
          path: "/",
          element: <MainLayout />,
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
               //User Routes
               {
                    path: 'userhome',
                    element: <UserHome />
               },
               {
                    path: 'cart',
                    element: <Cart />
               },
               {
                    path: 'payment',
                    element: <Payment />
               },
               {
                    path: 'paymenthistory',
                    element: <PaymentHistory />
               },


               // Admin Routes
               {
                    path: 'adminhome',
                    element: <AdminRoute><AdminHome /></AdminRoute>
               },
               {
                    path: 'additems',
                    element: <AdminRoute><Additems /></AdminRoute>
               },
               {
                    path: 'manageitems',
                    element: <AdminRoute><ManageItems /></AdminRoute>
               },
               {
                    path: 'updateItem/:id',
                    element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                    loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
               },
               {
                    path: 'users',
                    element: <AdminRoute><AllUsers /></AdminRoute>
               }

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