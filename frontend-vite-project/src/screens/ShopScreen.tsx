import React, { useEffect } from 'react'
import FilterBar from '../components/FilterBar'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { getProduct } from '../hooks/actions/ProductAction';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Product from '../components/Product';

function ShopScreen() {

    
    const dispatch = useDispatch();
    const {products, error:proError ,loading:proLoading} =useAppSelector((state)=>state.products);


    useEffect(()=>{
        dispatch(getProduct());
    },[dispatch]);


  return (
    <div>


<div className="container py-4 flex justify-between">
    <div className="flex gap-3 items-center">
        <a className="text-primary text-base" href="index.html"> <i className="fa fa-home"></i></a>
        <span className="text-sm text-gray-600"> <i className="fa-solid fa-angle-right fa-lg"></i></span>
        <p className="text-gray-900 font-medium">Shop</p>

    </div>
</div>








<div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start">
   
   <FilterBar></FilterBar>


     <div className="col-span-3">

     
        <div className="mb-4 flex items-center">


            <select className="w-60 text-sm text-gray-700 px-4 py-3 border border-gray-950 shadow-lg rounded-md focus:ring-primary focus:border-primary focus:border">
                <option>Default Shorting</option>
                <option>Price Low-Shorting</option>
                <option>Price High-Shorting</option>

            </select>
        
        <div className="flex gap-2 ml-auto">
            <div className="border border-primary w-10 h-9 flex bg-white rounded-lg cursor-pointer items-center justify-center text-primary">
                <i className="fa-solid fa-list"></i>
            </div>


            <div className="border border-primary w-10 h-9 flex bg-primary rounded-lg cursor-pointer items-center justify-center text-white">
<i className="fa-solid fa-rectangle-list"></i>
            </div>

           
        </div>
   
   
   
         </div>
          

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">

          {proLoading && <LoadingSpinner/>}
{proError && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{products.map((product)=>(

          
<Product product={product}></Product>

    ))}
                          


              
                            
          </div>

       

     </div>

        



     







     </div>









     



     




</div>



  )
}

export default ShopScreen