import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchIDProductDetail } from '../hooks/actions/ProductAction';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { CLOUD_URL } from '../configUrl';
import { Link } from 'react-router-dom';
import { deleteWishlistAction } from '../hooks/actions/UserAction';

function Wish({productId}) {

    const dispatch = useDispatch();
    const [productDetail, setProductDetail] = useState({});
    const { loading, error } = productDetail;
    
    useEffect(()=>{
        if(!productId)
        {
            return;
        }

        const FetchProduct = async () =>{

            try{

            
                const productData = await dispatch(fetchIDProductDetail(productId))
                setProductDetail(productData);
        
            }
            catch(error){
    
            }
            
        }

        FetchProduct();
       
      
    },[dispatch, productId]);


    const handleDelete = () =>{
        dispatch(deleteWishlistAction(productId))
    }

    if(!productId || loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if (error){
        return <ErrorMessage errorMessage={error}></ErrorMessage>
    }

    const {title, price, image, available, slug} = productDetail;

  return (
    
<div class="flex items-center mt-3 mb-3 p-4 rounded-lg border-gray-300 flex-wrap md:flex-nowrap bg-gray-100 md:justify-between gap-4">
    <div onClick={handleDelete} class="text-gray-700 hover:text-primary cursor-pointer justify-center items-center">
        <i class="fa-solid fa-trash"></i>
    </div>

    
    <div class="w-28 flex-shrink-0">
        <img src={CLOUD_URL+ image} class="w-full"/>


    </div>


    <div class="md:w-1/3 w-full">
        <h2 class="text-gray-900 mb-1 xl:text-xl text-lg font-medium uppercase">{title}</h2>
        <p class="text-sm text-gray-500"> Avaible {available===true ? 'Stock' : 'No Stock'}</p>


    </div>
   
    <div>
        <p class="text-primary text-lg font-semibold"> ${price} </p>
    </div>

<Link class="block w-full py-2 text-center text-white bg-primary border
            border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition " to={`/product/${slug}`}>
       Add To Cart
           
            </Link>
   

</div>
  )
}

export default Wish