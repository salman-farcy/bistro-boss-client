import { Outlet } from "react-router-dom";
import SectionTitel from "../../../Components/SectionTitel";


const UserHome = () => {
     return (
          <div>
               <div className="bg-red-100 mb-5">
                    <SectionTitel subHeading={"---My Cart---"} heading={"WANNA ADD MORE?"}></SectionTitel>
               </div>

               <h2 className="text-4xl bg-red-100">Home</h2>
          </div>
     );
};

export default UserHome;