import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import bannerImage1 from '../../assets/home/01.jpg'
import bannerImage2 from '../../assets/home/02.jpg'
import bannerImage3 from '../../assets/home/03.png'
import bannerImage4 from '../../assets/home/04.jpg'
import bannerImage5 from '../../assets/home/05.png'
import bannerImage6 from '../../assets/home/06.png'


const Banner = () => {
     return (
          <div  className="text-center mx-auto">
               <Carousel  autoPlay='true' infiniteLoop='true' interval='1000' className="">
                    <div className="">
                         <img src={bannerImage1} className="object-cover " alt="" />
                    </div>
                    <div className="">
                         <img src={bannerImage2} className="object-cover " alt="" />
                    </div>
                    <div className="">
                         <img src={bannerImage3} className="object-cover " alt="" />
                    </div>
                    <div className="">
                         <img src={bannerImage4} className="object-cover " alt="" />
                    </div>
                    <div className="">
                         <img src={bannerImage5} className="object-cover " alt="" />
                    </div>
                    <div className="">
                         <img src={bannerImage6} className="object-cover " alt="" />
                    </div>
               </Carousel>
          </div>
     );
};

export default Banner;