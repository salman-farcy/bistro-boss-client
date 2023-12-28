import useCart from "../../Hooks/useCart";


const Cart = () => {
     const [cart] = useCart();
     const totalPrice = cart.reduce((total, item) => total + item.price, 0 )
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