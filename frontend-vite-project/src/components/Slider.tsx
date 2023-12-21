import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Slider() {
  return (
    <div>
 <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className=''>
                <img src='img/slider/banner1.png'/>
            </div>



        </SwiperSlide>
        <SwiperSlide>
        <div className=''>
                <img src='img/slider/banner2.png'/>
            </div>

        </SwiperSlide>
      
      </Swiper>

    </div>
  )
}

export default Slider