// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import slide6 from '../../../assets/home/slide6.jpg'
import slide7 from '../../../assets/home/slide7.jpg'
import slide8 from '../../../assets/home/slide8.jpg'
import slide9 from '../../../assets/home/slide2.jpg'
import SectionTitel from '../../../Components/SectionTitel';


const OrderOnline = () => {
     return (
          <div className='container mx-auto px-4'>
               <SectionTitel 
               subHeading={"Form 11.00am to 10.00pm"}
               heading={"ORDER ONLINE"}
               >
               </SectionTitel>

               <Swiper
                    slidesPerView={5}
                    spaceBetween={5}
                    // centeredSlides={true}
                    pagination={{
                         clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10"
               >
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide8} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide9} alt="" /></SwiperSlide>
               </Swiper>
          </div>
     );
};

export default OrderOnline;