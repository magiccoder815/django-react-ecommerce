import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import Topproducts from '../components/Topproducts'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store';
import { categoriesFail, categoriesRequest, categoriesSuccess, getCategories, getProduct } from '../hooks/actions/ProductAction';
import { BASE_URL } from '../configUrl';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import Product from '../components/Product';

function HomeScreen() {

    const dispatch = useDispatch();
    const {categories, error ,loading} =useAppSelector((state)=>state.categories);
    const {products, error:proError ,loading:proLoading} =useAppSelector((state)=>state.products);


    useEffect(()=>{
        dispatch(getCategories());
        dispatch(getProduct());
    },[dispatch]);

  

  return (
    <div><Slider></Slider>

    <div className='bg-second text-white p-4 text-center'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, necessitatibus.,</p>
    </div>



  

 

<ul>


</ul>


<Topproducts></Topproducts>




<div class="container pb-16 pt-8 text-center">
<h2 class="text-2xl md:text-3xl font-medium uppercase font-poppins mb-6 text-gray-800" >Shop by Category</h2>

<div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">


{loading && <LoadingSpinner/>}
{error && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{categories.map((category)=>(

            <div key={category.id} class="overflow-hidden relative group rounded-xl">
        <img src={category.photo} class="w-full"/>
        <a href="#" class="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition"> {category.title}</a>
    </div>

    ))}

  



</div>

</div>

       <div class=" pb-16  hidden lg:block">
        <a href="#">

            <img src="img/offer.jpg" class="w-full" />
        </a>



       </div>

       <div class="container pb-16   lg:hidden">
        <a href="#">

            <img src="img/offer-mobile.jpg" class="w-full" />
        </a>



       </div>




<div class="container pb-16">
    <h2 class="text-2xl md:text-3xl font-medium uppercase font-poppins mb-6 text-gray-800" >Recommed For You</h2>

    <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">



    {proLoading && <LoadingSpinner/>}
{proError && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{products.map((product)=>(

          
<Product product={product}></Product>

    ))}

      


        </div>

            



</div>




    
    
    
    </div>
  )
}

export default HomeScreen