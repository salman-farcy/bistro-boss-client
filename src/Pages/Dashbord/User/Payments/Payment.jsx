import { Helmet } from "react-helmet-async";
import SectionTitel from "../../../../Components/SectionTitel";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";

//TODO: ADD publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PUBLISHABLE_KEY);
const Payment = () => {
     return (
          <div>
               <Helmet>
                    <title>Bistro Boss | Dashbord/Add-Items</title>
               </Helmet>
               <div className="bg-red-100 mb-5">
                    <SectionTitel subHeading={"---Please Pay to eat---"} heading={"PAYMENT"}></SectionTitel>
               </div>

               <div className="">
                    <Elements stripe={stripePromise}>
                         <CheckoutForm />
                    </Elements>
               </div>
          </div>
     );
};

export default Payment;