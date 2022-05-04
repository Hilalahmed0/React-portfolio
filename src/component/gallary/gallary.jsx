
import React from 'react';
import './gallary.css'


import pic1 from '../../assets/gallary-iMg/p1.jpg'
import pic2 from '../../assets/gallary-iMg/p2.jpg'
import pic3 from '../../assets/gallary-iMg/p3.jpg'
import pic4 from '../../assets/gallary-iMg/p4.jpg'
import pic5 from '../../assets/gallary-iMg/p5.jpg'
import pic6 from '../../assets/gallary-iMg/p6.jpg'
import pic7 from '../../assets/gallary-iMg/p7.jpg'
import pic8 from '../../assets/gallary-iMg/p8.jpg'

// import Swiper core and required modules
import { Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const Gallary = () => {

     return (
          <section id='gallary'>
               <h5> Beautifull Memories</h5>
               <h2>My Gallary</h2>
             
               <div className="container gallary-container">
               

                    <Swiper 
                     modules={[ Pagination ]}
                     spaceBetween={30}
                     slidesPerView={1}
                     
                     pagination={{ clickable: true }}
                     scrollbar={{ draggable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log('slide change')}
                    >

                
                    <SwiperSlide>< img className='content' src={pic1} alt="ph" /></SwiperSlide>
                       <SwiperSlide>   < img className='content' src={pic2} alt="pho" /> </SwiperSlide>
                      <SwiperSlide>  < img className='content' src={pic3} alt="ph1" /></SwiperSlide>
                     <SwiperSlide>     < img className='content' src={pic4} alt="phoo" /></SwiperSlide>
                      <SwiperSlide>    < img className='content' src={pic5} alt="phot12o" /></SwiperSlide>
                      <SwiperSlide>  < img className='content' src={pic6} alt="pho1o" /></SwiperSlide>
                     <SwiperSlide>     < img className='content' src={pic7} alt="hi" /></SwiperSlide>
                      <SwiperSlide>    < img className='content' src={pic8} alt="pho12to" /></SwiperSlide>


                    </Swiper>
                  

               </div>
               <div className="view">
                         <button className='btn btn-primary'>View More </button>

                    </div>
          </section>

     )
}

export default Gallary