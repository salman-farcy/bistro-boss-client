import { Helmet } from "react-helmet-async";
import SectionTitel from "../../../Components/SectionTitel";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../../../Hooks/axiosSecureHook";


const PaymentHistory = () => {
     const { user } = useAuth()

     const { data: payments = [] } = useQuery({
          queryKey: ['payments', user.email],
          queryFn: async () => {
               const res = await axiosSecure.get(`/payments/${user.email}`)
               return res.data;
          }
     })

     return (
          <div>
               <Helmet>
                    <title>Bistro Boss | Dashbord/Payment History</title>
               </Helmet>
               <div className="bg-red-100 mb-5">
                    <SectionTitel subHeading={"---At a Glance!---"} heading={"PAYMENT HISTORY"}></SectionTitel>
               </div>
               <div className="flex justify-between p-5">
                         <h2 className="text-3xl font-semibold">Items: {payments.length}</h2>
                         <h2 className="text-3xl font-semibold">Items Price: ${payments.price}</h2>
                    </div>
               <div className="bg-red-100">
                    <div className="overflow-x-auto">
                    <table className="table">
                              {/* head */}
                              <thead>
                                   <tr>
                                        <th>Q</th>
                                        <th>EMAIL</th>
                                        <th>TOTAL PRICE</th>
                                        <th>Status</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {
                                        payments.map((payment, index) => <tr className="hover:bg-red-200 hover:font-semibold" key={payment._id}>
                                             <td>{index + 1}</td>
                                             <td>{payment?.email}</td>
                                             <td>${payment?.price}</td>
                                             <td>{payment?.status}</td>

                                        </tr>)
                                   }
                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
     );
};

export default PaymentHistory;