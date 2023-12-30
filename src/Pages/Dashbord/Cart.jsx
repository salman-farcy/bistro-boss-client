import { FaDeleteLeft, FaTrash } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";


const Cart = () => {
     const [cart] = useCart();
     const totalPrice = cart.reduce((total, item) => total + item.price, 0)
     return (
          <div className="bg-red-100">
               <div className="flex justify-between p-5">
                    <h2 className="text-3xl font-semibold">Items: {cart.length}</h2>
                    <h2 className="text-3xl font-semibold">Items: {totalPrice}</h2>
                    <button className=" bg-red-100 px-5 py-2 hover:bg-red-200">Pay</button>
               </div>

               <div className="overflow-x-auto  ">
                    <table className="table ">
                         {/* head */}
                         <thead className="bg-red-200">
                              <tr>
                                   {/* <th>
                                        <label>
                                             <input type="checkbox" className="checkbox" />
                                        </label>
                                   </th> */}
                                   <th>Name</th>
                                   <th>Job</th>
                                   <th>Favorite Color</th>
                                   <th>Dtail</th>
                                   <th>Trast</th>
                              </tr>
                         </thead>

                         <tbody>
                              {
                                   cart.map(( item, index ) => <tr className="overflow-y-hidden" key={item._id}>
                                        <th>
                                             {index + 1}
                                        </th>
                                        <td>
                                             <div className="flex items-center gap-3">
                                                  <div className="avatar">
                                                       <div className="mask  w-12 h-12">
                                                            <img src={item.image} />
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="font-bold">{item?.name}</div>
                                                       <div className="text-sm opacity-50 font-bold">${item?.price}</div>
                                                  </div>
                                             </div>
                                        </td>
                                        <td>
                                             Zemlak, Daniel and Leannon
                                             <br />
                                             <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                             <button className="btn btn-ghost btn-md">
                                                  <FaTrash className="text-red-500"></FaTrash>
                                             </button>
                                        </th>
                                   </tr>)
                              }
                              
                              
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default Cart;