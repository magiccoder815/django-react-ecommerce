import React, { useEffect } from 'react'
import Slider from '../components/Slider'
import Topproducts from '../components/Topproducts'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../store';
import { categoriesFail, categoriesRequest, categoriesSuccess, getCategories } from '../hooks/actions/ProductAction';
import { BASE_URL } from '../configUrl';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import Product from '../components/Product';

function HomeScreen() {

    const dispatch = useDispatch();
    const {categories, error ,loading} =useAppSelector((state)=>state.categories);

    useEffect(()=>{
        dispatch(getCategories());
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


        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/cp-2.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Computer Two</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $100.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $150.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      

        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/shoes-2.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Shoes Two</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $200.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $350.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      

        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/dress-2.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Dress Two</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $120.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $170.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      

        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/mp-2.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Mobile Phone Two</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $1000.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $1200.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      

       
        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/shoes-8.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Shoes Eight</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $100.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $150.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      

        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/shoes-4.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Shoes Four</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $200.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $350.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      

       
        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/shoes-6.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Spor Six</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $120.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $170.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      

        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/mp-4.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Mobile Phone Four</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $1000.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $1200.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      


            
        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/sport-2.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Sport Two</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $100.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $150.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/watch-2.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Watch Two</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $200.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $350.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      


        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/dress-3.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Dress Three</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $120.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $170.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      



        <div class="group rounded-xl bg-white shadow-lg overflow-hidden">
            <div class="relative">
                    <img src="img/product/mp-3.png" class="w-full" />

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
                    <h4 class=" uppercase font-medium text-xl mb-2 text-gray-900 hover:text-primary transition">Mobile Phone Three</h4> 
                    
                </a>


                <div class="flex items-baseline mb-1 space-x-2">
                    <p class="text-xl text-primary font-roboto font-semibold"> $1000.00</p>
                    <p class="text-sm text-gray-500 font-roboto line-through"> $1200.00</p>


                </div>

                <div class="flex items-center">
                    <div class="flex gap-1 text-sm text-yellow-500">
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-solid fa-star"></i></span>


                    </div>
                    <div class="text-xs text-gray-500 ml-3">(120)</div>



                </div>
               
            
               </div>
               <a href="view.html" class="block w-full py-2 text-center text-white bg-primary border
               border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Add To cart</a>


             </div>
      


        </div>

            



</div>




    
    
    
    </div>
  )
}

export default HomeScreen