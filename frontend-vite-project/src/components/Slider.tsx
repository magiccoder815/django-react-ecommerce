import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../my.css'
import anime from 'animejs/lib/anime.es.js';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { getSlider } from '../hooks/actions/SettingsAction';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { CLOUD_URL } from '../configUrl';



function Slider() {

  const dispatch = useDispatch();
  const {sliders, error ,loading} =useAppSelector((state)=>state.sliders);


  useEffect(()=>{
      dispatch(getSlider());
  },[dispatch]);

    
useEffect(()=>{
    const animateImage= ()=>{
      anime({
        targets: '.sliderchild',
        translateX:  ['0%', '25%'],
        translateY:  ['5%', '15%'],
        duration: 4000,
        easing:'linear',
        direction: 'alternate',
        loop:true,
      });
    };

    const animateImage2= ()=>{
      anime({
        targets: '.sliderbg',
        scale:  [1, 1.3],
        duration: 8000,
        easing:'linear',
        direction: 'alternate',
        loop:true,
      });
    };


    animateImage();
    animateImage2();

  },[sliders]);

 

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

{loading && <LoadingSpinner/>}
{error && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{sliders.map((slide)=>(



<SwiperSlide>
         
         <section className='relative h-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center sliderbg' style={{backgroundImage:`url(${CLOUD_URL+slide.sliderbg})`}}>
            </div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-20 bg-black'></div>
            <div className='flex flex-col lg:flex-row justify-between items-center py-1 px-20 relative z-10'>
         
                <div className='lg:w-1/2'>
                    <h2 className='text-3xl lg:text-6xl font-poppins font-semibold text-white'>Lorem, ipsum dolor.</h2>
         
         <p className='text-white mt-1 lg:mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam unde dolor doloremque sunt libero ducimus sapiente corporis sed perferendis itaque voluptate tempore tempora excepturi dolore voluptatem, eaque laborum mollitia.</p>
         
                </div>
                <div className='lg:w-1/2'>
                    <img src={CLOUD_URL+slide.sliderone} className='w-full h-auto sliderchild' />
                </div>
         
         
            </div>
          
         
         
         </section>
         
         
         
         </SwiperSlide>
          

    ))}



       

    
      
      </Swiper>

    </div>
  )
}

export default Slider