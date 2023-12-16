import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MemuItem from "../../Shared/MemuItem";


const MenuCatagory = ({ items, title, img }) => {


     return (
          <div className="container mx-auto pb-10 px-4">
               {title && <Cover img={img} title={title}></Cover>}
               <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                         items.map(item => <MemuItem
                              key={item._id}
                              item={item}
                         ></MemuItem>)
                    }
               </div>
               <div className="text-center">
                    <Link to={`/order/${title}`}><button className="btn  border-0 border-b-4 border-gray-600 text-gray-600 btn-outline">Order Now</button></Link>
               </div>
          </div>
     );
};

export default MenuCatagory;