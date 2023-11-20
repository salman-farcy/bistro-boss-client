import SectionTitel from "../../Components/SectionTitel";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
// import { Rating } from "keep-react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import { FaQuoteLeft } from "react-icons/fa";



const Testimonials = () => {
     const [reviews, setReviews] = useState([]);

     useEffect(() => {
          fetch('revews.json')
               .then(res => res.json())
               .then(data => setReviews(data))
     }, [])

     return (
          <div className="mb-10">
               <SectionTitel
                    subHeading={"What Our Clients Say"}
                    heading={"TESTIMONIALS"}
               >
               </SectionTitel>

               <div className="sm:pt-6 md:pt-8 lg:pt-10">

                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                         {
                              reviews.map(review => <SwiperSlide
                                   key={review._id}
                              >
                                   <div className="space-y-6 md:space-y-7 lg:space-y-8 flex flex-col justify-center items-center px-8 md:px-20 lg:px-32 xl:px-40">
                                        <div className="">
                                             <Rating
                                                  style={{ maxWidth: 180 }}
                                                  value={review.rating}
                                                  readOnly
                                             />
                                        </div>
                                        <FaQuoteLeft size={100} />
                                        <p className="text-center">{review.details}</p>
                                        <h3 className="text-2xl text-orange-400">{review.name}</h3>
                                   </div>
                              </SwiperSlide>)
                         }
                    </Swiper>

               </div>
          </div>
     );
};

export default Testimonials;