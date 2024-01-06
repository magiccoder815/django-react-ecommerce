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
import { Link } from 'react-router-dom';
import { getWishlistAction, userControl } from '../hooks/actions/UserAction';

function HomeScreen() {

    const dispatch = useDispatch();
    const {categories, error ,loading} =useAppSelector((state)=>state.categories);
    const {products, error:proError ,loading:proLoading} =useAppSelector((state)=>state.products);
    const {userInfo, error:UserInfoError ,loading:UserInfoLoading} =useAppSelector((state)=>state.user);
    const {getWish} =useAppSelector((state)=>state.getWish);


    useEffect(()=>{
        dispatch(getCategories());
        dispatch(getProduct());
        dispatch(userControl());
        dispatch(getWishlistAction())

    },[dispatch]);

  

  return (
    <div><Slider></Slider>

    <div className='bg-second text-white p-4 text-center'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, necessitatibus.,</p>
    </div>



  

 

<ul>


</ul>


<Topproducts></Topproducts>




<div className="container pb-16 pt-8 text-center">
<h2 className="text-2xl md:text-3xl font-medium uppercase font-poppins mb-6 text-gray-800" >Shop by Category</h2>

<div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">


{loading && <LoadingSpinner/>}
{error && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{categories.map((category)=>(

            <div key={category.id} className="overflow-hidden relative group rounded-xl">
        <img src={category.photo} className="w-full"/>
        <Link to={`/shop?category=${category.id}`}> 
        <a href="#" className="absolute inset-0 flex items-center justify-center text-xl
         text-white font-roboto font-medium bg-black bg-opacity-60 hover:bg-opacity-40 transition"> {category.title}</a>
   </Link>
    </div>

    ))}

  



</div>

</div>

       <div className=" pb-16  hidden lg:block">
        <a href="#">

            <img src="img/offer.jpg" className="w-full" />
        </a>



       </div>

       <div className="container pb-16   lg:hidden">
        <a href="#">

            <img src="img/offer-mobile.jpg" className="w-full" />
        </a>



       </div>




<div className="container pb-16">
    <h2 className="text-2xl md:text-3xl font-medium uppercase font-poppins mb-6 text-gray-800" >Recommed For You</h2>

    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">



    {proLoading && <LoadingSpinner/>}
{proError && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{products.map((product)=>(

          
<Product key={product.id} product={product}></Product>

    ))}

      


        </div>

            



</div>




    
    
    
    </div>
  )
}

export default HomeScreen