import { Helmet } from "react-helmet-async";
import SectionTitel from "../../Components/SectionTitel";


const AllUsers = () => {
     return (
          <div>
               <Helmet>
                    <title>Bistro Boss | Dashbord/All Users</title>
               </Helmet>
               <div className="bg-red-100 mb-5">
                    <SectionTitel subHeading={"---How many??---"} heading={"MANAGE ALL USERS"}></SectionTitel>
               </div>

               
               <div className="flex justify-evenly bg-red-100 py-4">
                    <h2>All Users</h2>
                    <h2>Total Users</h2>
               </div>
          </div>
     );
};

export default AllUsers;