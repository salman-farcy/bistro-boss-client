import FoodCard from "../../Components/FoodCard";


const OrderTab = ({items}) => {
     return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
               {
                    items.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
               }
          </div>
     );
};

export default OrderTab;