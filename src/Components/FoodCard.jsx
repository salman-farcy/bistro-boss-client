import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from 'react-hot-toast';
// import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
     const {_id, name, recipe, image, price } = item;
     const {user} = useAuth()
     const navigate = useNavigate();
     const location = useLocation()
     const axiosSecureForThe = useAxiosSecure()


     const handleAddToCart = food => {
          // console.log(food, user.email);
          if(user && user.email){
               //TODO: send cart item to the database
               console.log(user.email, food);
               const cardItem = {
                    menuId: _id,
                    email: user.email,
                    name, 
                    image,
                    price
               }

               axiosSecureForThe.post('/carts', cardItem)
               .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                         toast.success('Cart Add Successfully');
                    }
               })

          }
          else{
               toast.error('Plz Login to able to the cart ?')
               //send the user to the login page
               navigate('/login', {state: {from: location}})
          }
          
     }

     return (
          <div className="card bg-base-100 shadow-xl">
               <figure><img src={image} alt="Shoes" /></figure>
               <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                         <button
                              onClick={() => handleAddToCart(item)}
                              className="btn bg-gray-500 text-white">
                              Add To Cart</button>
                    </div>
               </div>
          </div>
     );
};

export default FoodCard;