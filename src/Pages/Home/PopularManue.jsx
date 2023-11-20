import { useEffect, useState } from "react";
import SectionTitel from "../../Components/SectionTitel";
import MemuItem from "../Shared/MemuItem";


const PopularManue = () => {
     const [menu, setMenu] = useState([]);

     useEffect(() => {
          fetch('menu.json')
               .then(res => res.json())
               .then(data => {
                    const popularItems = data.filter(item => item.category === 'popular')
                    setMenu(popularItems)
               })
     }, [])

     return (
          <section className="container mx-auto px-4 py-10">
               <SectionTitel
                    subHeading={"Check it out"}
                    heading={"FROM OUR MENU"}
               >
               </SectionTitel>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                         menu.map(item => <MemuItem
                              key={item._id}
                              item={item}
                         ></MemuItem>)
                    }
               </div>

               <div className="text-center pt-5">
                    <button className="btn border-0 border-b-4 border-gray-700 text-gray-700 btn-outline">View Full  Menu</button>
               </div>
          </section>
     );
};

export default PopularManue;