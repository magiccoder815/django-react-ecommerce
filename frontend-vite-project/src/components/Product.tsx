import React from 'react'
import { CLOUD_URL } from '../configUrl';
import StarRating from './StarRating';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { resetProductDetail } from '../hooks/actions/ProductAction';

const Product =({product})=> {

    if(!product){
        return <p>No Product</p>
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {productDetail} =useAppSelector((state)=>state.productDetail);

    const handleProductClick = () =>{

     
      navigate(`/product/${slug}`);
      dispatch(resetProductDetail());


    }


    const {title, price, discount, rating, image, slug} = product;
  return (
    <div>

         
<div className="group rounded-xl bg-white shadow-lg overflow-hidden" onClick={handleProductClick}>
    <div className="relative">
            <img src={CLOUD_URL+image} className="w-full" />

      <div className="absolute inset-0 flex items-center justify-center text-xl
            text-white font-roboto font-medium  opacity-0 bg-black bg-opacity-0  group-hover:opacity-100 group-hover:bg-opacity-30 transition">

            <a  className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                <i className="fa-solid fa-magnifying-glass fa-xl"></i>

            </a>

            <a  className="text-primary text-lg w-9 h-9 rounded-full items-center justify-center">
                <i className="fa-solid fa-heart fa-xl"></i>

            </a>
        </div>
      </div>

      <div className="pt-4 pb-3 px-4">

        <a >
            <h4 className=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">{title}</h4> 
            
        </a>


        <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-roboto font-semibold"> ${price}</p>
            <p className="text-sm text-gray-500 font-roboto line-through"> ${discount}</p>


        </div>

        <div className="flex items-center">
          <StarRating rating={rating}></StarRating>


        </div>
       
    
       </div>
      
       <a className="block w-full py-2 text-center text-white bg-primary border
       border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


     </div>


    </div>
  )
}

export default Product