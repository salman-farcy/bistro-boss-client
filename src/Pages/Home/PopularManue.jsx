
import { Link } from "react-router-dom";
import SectionTitel from "../../Components/SectionTitel";
import useMenu from "../../Hooks/UseMenu";
import MemuItem from "../Shared/MemuItem";


const PopularManue = () => {
     const [ , menu, ,] = useMenu();
     const popular = menu.filter(item => item.category === 'popular' )

     return (
          <section className="container mx-auto px-4 py-10">
               <SectionTitel
                    subHeading={"Check it out"}
                    heading={"FROM OUR MENU"}
               >
               </SectionTitel>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                         popular.map(item => <MemuItem
                              key={item._id}
                              item={item}
                         ></MemuItem>)
                    }
               </div>

               <div className="text-center pt-5">
                    <Link to='/menu'><button  className="btn border-0 border-b-4 border-gray-700 text-gray-700 btn-outline">View Full  Menu</button></Link>
               </div>
          </section>
     );
};

export default PopularManue;