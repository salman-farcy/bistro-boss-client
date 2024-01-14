import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/axiosSecureHook/useAxiosSecure";
import useCart from "../../../../Hooks/useCart";
import useAuth from "../../../../Hooks/useAuth";


const CheckoutForm = () => {
     const [error, setError] = useState('')
     const [clientSecret, setClientSecret] = useState('')
     const [transactionId, setTransactionId] = useState('')
     const stripe = useStripe()
     const elements = useElements()
     const axiosSecure = useAxiosSecure()
     const {user} = useAuth()
     const [cart] = useCart()
     const totalPrice = cart.reduce((total, item) => total + item.price, 0)
     
     
     useEffect(() => {
          const res = axiosSecure.post('/create-payment-intent', { price: totalPrice })
               .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
               })

     }, [axiosSecure, totalPrice])

     const handleSubmite = async event => {
          event.preventDefault();

          if (!stripe || !elements) {
               return
          }

          const card = elements.getElement(CardElement)
          if (card === null) {
               return
          }

          const { error, paymentMethod } = await stripe.createPaymentMethod({
               type: 'card',
               card
          })

          if (error) {
               console.log('payment error', error);
               setError(error.message)

          }
          else {
               console.log('payment method', paymentMethod);
               setError('')
          }

          //Confirm Payment
          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret, {
               payment_method: {
                    card: card,
                    billing_details:{
                         email : user?.email || 'anonymous',
                         name: user?.displayName || 'anonymous'
                    }
               }
          })

          if(confirmError){
               console.log('confirm error');
          }
          else{
               console.log('Payment intent', paymentIntent);
               if(paymentIntent.status === 'succeeded'){
                    console.log('transaction id', paymentIntent.id);
                    setTransactionId(paymentIntent.id)
               }
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

               <button
                    disabled={!stripe || !clientSecret}
                    className="bg-red-200 px-5 py-2 hover:bg-red-300 disabled:bg-gray-300" type="submit"
               >
                    Pay
               </button>
               <p className="text-red-400">{error}</p>
               {transactionId && <p className="text-green-600">Your Transaction id:{transactionId}</p>}
          </form>
     );
};

export default CheckoutForm;