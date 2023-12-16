import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Fectured from "./Fectured/Fectured";
import OrderOnline from "./OnlineOrder/OrderOnline";
import PopularManue from "./PopularManue";
import Testimonials from "./Testimonials";


const Home = () => {
     return (
          <div className="">
               <Helmet>
                    <title>Bistro Boss | Home</title>
               </Helmet>

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