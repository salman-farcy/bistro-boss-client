import Banner from "./Banner";
import Fectured from "./Fectured/Fectured";
import OrderOnline from "./OnlineOrder/OrderOnline";
import PopularManue from "./PopularManue";
import Testimonials from "./Testimonials";


const Home = () => {
     return (
          <div className="">


               <div className="">
                    <Banner></Banner>
                    <OrderOnline></OrderOnline>
                    <PopularManue></PopularManue>
                    <Fectured></Fectured>
                    <Testimonials></Testimonials>
               </div>
          </div>
     );
};

export default Home;