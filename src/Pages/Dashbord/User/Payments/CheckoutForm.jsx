import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
     const [error, setError] = useState('')
     const stripe = useStripe()
     const elements = useElements()

     const handleSubmite = async event => {
          event.preventDefault();

          if(!stripe || !elements){
               return
          }

          const card = elements.getElement(CardElement)
          if(card === null){
               return
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
               type: 'card',
               card
          })

          if(error){
               console.log('payment error', error);
               setError(error.message)
               
          }
          else{
               console.log('payment method', paymentMethod);
               setError('')
          }
     }

     return (
          <form onSubmit={handleSubmite}>
               <CardElement
                    options={{
                         style: {
                              base: {
                                   fontSize: '16px',
                                   color: '#424770',
                                   '::placeholder': {
                                        color: '#aab7c4',
                                   },
                              },
                              invalid: {
                                   color: '#9e2146',
                              },
                         },
                    }}
               />

               <button className="bg-red-200 px-5 py-2 hover:bg-red-300 disabled:bg-gray-300" type="submit" disabled={!stripe}>
                    Pay
               </button>
               <p className="text-red-400">{error}</p>
          </form>
     );
};

export default CheckoutForm;