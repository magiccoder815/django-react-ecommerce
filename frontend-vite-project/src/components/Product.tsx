import React from 'react'
import { CLOUD_URL } from '../configUrl';
import StarRating from './StarRating';

const Product =({product})=> {

    if(!product){
        return <p>No Product</p>
    }

    const {title, price, discount, rating, image } = product;
  return (
    <div>

         
<div class="group rounded-xl bg-white shadow-lg overflow-hidden">
    <div class="relative">
            <img src={CLOUD_URL+image} class="w-full" />

      <div class="absolute inset-0 flex items-center justify-center text-xl
            text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

            <a href="view.html" class="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                <i class="fa-solid fa-magnifying-glass fa-xl"></i>

            </a>

            <a href="view.html" class="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                <i class="fa-solid fa-heart fa-xl"></i>

            </a>
        </div>
      </div>

      <div class="pt-4 pb-3 px-4">

        <a href="view.html">
            <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">{title}</h4> 
            
        </a>


        <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-xl text-primary font-roboto font-semibold"> ${price}</p>
            <p class="text-sm text-gray-500 font-roboto line-through"> ${discount}</p>


        </div>

        <div class="flex items-center">
          <StarRating rating={rating}></StarRating>


        </div>
       
    
       </div>
       <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
       border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


     </div>


    </div>
  )
}

export default Product