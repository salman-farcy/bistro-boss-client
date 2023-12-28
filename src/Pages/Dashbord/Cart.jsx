import useCart from "../../Hooks/useCart";


const Cart = () => {
     const [cart] = useCart();
     
     return (
          <div>
              <div className="">
                  <h2>Items: {cart.length}</h2>
                  <h2>Items: {totalPrice}</h2>
                  <button>Pay</button>
               </div>
          </div>
     );
};

export default Cart;