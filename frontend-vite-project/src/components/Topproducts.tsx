import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import LoadingSpinner from './LoadingSpinner';
import Product from './Product';
import { getTopProduct } from '../hooks/actions/ProductAction';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';

function Topproducts() {

    const dispatch = useDispatch();
    const {topproducts, error:protopError ,loading:protopLoading} =useAppSelector((state)=>state.topproducts);


    useEffect(()=>{
        dispatch(getTopProduct());
    },[dispatch]);



  return (
    <div className='pt-8 pb-8 px-20 bg-slate-200'>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
     
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       

        {protopLoading && <LoadingSpinner/>}
{protopError && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{topproducts.map((product)=>(

<SwiperSlide key={product.id}>     
<Product product={product}></Product>
</SwiperSlide>
    ))}

  
      </Swiper>
    </div>


  )
}

export default Topproducts