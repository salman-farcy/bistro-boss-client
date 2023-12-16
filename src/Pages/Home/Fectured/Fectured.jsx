
import { Link } from 'react-router-dom';
import SectionTitel from '../../../Components/SectionTitel';
import fetcherd from '../../../assets/home/featured.jpg'
import './Fectured.css'

const Fectured = () => {
     return (
          <div className="featured-item bg-fixed text-white py-20 mb-10">

               <SectionTitel
                    subHeading={"Check it out"}
                    heading={"FROM OUR MENU"}
               ></SectionTitel>


               <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-10 items-center ">
                         <div className="w-full lg:w-1/2">
                              <img className="w-full" src={fetcherd} alt="" />
                         </div>
                         <div className="w-full lg:w-1/2 space-y-3">
                              <p> Aug 20 , 2029</p>
                              <p>WHERE CAN I GET SOME?</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                              <Link to="/menu"><button className="btn border-0 border-b-4 border-white text-white btn-outline">Order Now</button></Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Fectured;