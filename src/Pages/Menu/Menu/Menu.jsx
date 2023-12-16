import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";

import menuImg from '../../../assets/menu/banner3.jpg'
import dessertsimg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../../assets/menu/pizza-bg.jpg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import soupimg from '../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../Hooks/UseMenu";
import SectionTitel from "../../../Components/SectionTitel";
import MenuCatagory from "../MenuCatagory/MenuCatagory";



const Menu = () => {
     const [menu] = useMenu()
     const desserts = menu.filter(item => item.category === 'dessert')
     const soup = menu.filter(item => item.category === 'soup')
     const salad = menu.filter(item => item.category === 'salad')
     const pizza = menu.filter(item => item.category === 'pizza')
     const offered = menu.filter(item => item.category === 'offered')
     return (
          <div>
               <Helmet>
                    <title>Bistro Boss | Menu</title>
               </Helmet>

               <Cover img={menuImg} title="Our Menu"></Cover>
               {/* main cover */}
               <SectionTitel subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitel>
               
               {/* offered */}
               <MenuCatagory items={offered}></MenuCatagory>

               {/* dessert menu items */}
               <MenuCatagory 
               items={desserts}
               title={"desserts"}
               img={dessertsimg}
               >
               </MenuCatagory>

               {/* pizza menu item */}
               <MenuCatagory
               items={pizza}
               title={"pizza"}
               img={ pizzaimg}
               ></MenuCatagory>

               {/* salad menu item */}
               <MenuCatagory
               items={salad}
               title={"salad"}
               img={ saladimg}
               ></MenuCatagory>

               {/* soup menu item */}
               <MenuCatagory
               items={soup}
               title={"soup"}
               img={ soupimg}
               ></MenuCatagory>
          </div>
     );
};

export default Menu;