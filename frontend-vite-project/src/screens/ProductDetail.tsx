import React, { useEffect, useState } from 'react'
import Topproducts from '../components/Topproducts'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { BASE_URL, CLOUD_URL } from '../configUrl';
import { getProductDetail, resetProductDetail } from '../hooks/actions/ProductAction';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { postWishlistAction } from '../hooks/actions/UserAction';
import { AddToCart } from '../hooks/actions/CartAction';
import ErrorMessage from '../components/ErrorMessage';
import SuccessMessage from '../components/SuccessMesage';

function ProductDetail() {

    const {slug} = useParams();
    const navigate = useNavigate();


    const [quantity, setQuantity] = useState(1);
    const [mainImg, setmainImg] = useState('img/product/shoes-1.png');
    const [selectedThumbnail, setselectedThumbnail] = useState('img/product/shoes-1.png');

    const handleDecrement=()=>{
        if(quantity > 1 ) setQuantity(quantity-1);
    };
    const handleIncrement=()=>{
       setQuantity(quantity+1);
    };

    const handleImageClick = (imgPath:string)=>{
        setmainImg(imgPath);
        setselectedThumbnail(imgPath);

    };

    const dispatch = useDispatch();
    const {productDetail, error ,loading} =useAppSelector((state)=>state.productDetail);
    const url = BASE_URL+"/product/select/"+slug;

    useEffect(()=>{
        if(!productDetail.id){
            const fetchProductDetail = async ()=>{
                await dispatch(getProductDetail(url));
               
            }
            
            fetchProductDetail();

            return()=>{
               

            }
        }


        
    },[dispatch, productDetail.id, url ]);

    useEffect(()=>{
        if(productDetail.id){
            setmainImg(CLOUD_URL+productDetail.image);
            setselectedThumbnail(CLOUD_URL+productDetail.image);
        }


    }, [productDetail])

    
    const handleWish = ()=>{

        dispatch(postWishlistAction(productDetail.id))
        navigate("/auth/wishlist");
       

    };

    const [selectedSize, setSelectedSize] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleAddToCart = ()=>{
        if(!selectedSize){
            setErrorMessage(" Size Required")
            setTimeout(()=>setErrorMessage(null),1000)

            return;
        }
        const item = {
            id:productDetail.id,
            name:productDetail.title,
            quantity:quantity,
            image:productDetail.image,
            price:productDetail.price,
            size:selectedSize,


        }

        dispatch(AddToCart(item));

        setSuccessMessage('Cart Add')
        setTimeout(()=>setSuccessMessage(null),2000)


    }




  return (
<div>

    {loading && <LoadingSpinner/>}
    {error && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
    {Object.keys(productDetail).length>0 ?(
    
    <div key={productDetail.id}>
        
        
        
    <div>
        


        <div class="container py-4 flex justify-between">
            <div class="flex gap-3 items-center">
                <a class="text-primary text-base" href="index.html"> <i class="fa fa-home"></i></a>
                <span class="text-sm text-gray-600"> <i class="fa-solid fa-angle-right fa-lg"></i></span>
                <p class="text-primary  text-base  uppercase">Shop</p>
                <span class="text-sm text-gray-600"> <i class="fa-solid fa-angle-right fa-lg"></i></span>
                <p class="text-gray-900 font-medium uppercase">{productDetail.title}</p>
        
        
        
        
            </div>
        </div>
        
        
        
        
        
        
        
        <div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        
            <div>
        
                <div>
                    <img id="main-img" src= {mainImg} class="w-full" />
                </div>
        
                <div class="grid grid-cols-5 gap-4 mt-4">
                 
                 
                    <div>
                        <img 
                        src={CLOUD_URL+productDetail.image}
                         class={`"single-img cursor-pointer border  w-full 
                         ${selectedThumbnail === CLOUD_URL+productDetail.image ? 'border-primary' : '' } `}
                         onClick={()=>handleImageClick(`${CLOUD_URL+productDetail.image}`)}
                         
                         />
                    </div>
        
                    <div>
                        <img 
                        src={CLOUD_URL+productDetail.image2}
                         class={`"single-img cursor-pointer border  w-full 
                         ${selectedThumbnail === CLOUD_URL+productDetail.image2 ? 'border-primary' : '' } `}
                         onClick={()=>handleImageClick(`${CLOUD_URL+productDetail.image2}`)}
                         
                         />
                    </div>
        
        
                    <div>
                        <img 
                        src={CLOUD_URL+productDetail.image3}
                         class={`"single-img cursor-pointer border  w-full 
                         ${selectedThumbnail === CLOUD_URL+productDetail.image3 ? 'border-primary' : '' } `}
                         onClick={()=>handleImageClick(`${CLOUD_URL+productDetail.image3}`)}
                         
                         />
                    </div>
                  
            
        
        
        
                </div>
        
        
            </div>
            
        
        
        
        <div>
            <h2 class="uppercase md:text-3xl text-2xl font-medium mb-2">{productDetail.title} </h2>
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
            
            <div class="space-y-3">
                <p class="space-x-4 mt-2">
                    <span class="text-xl">Avaible : </span>
                    <span class="text-xl text-green-600 font-semibold" >{productDetail.available===true ? 'Stock' : 'No Stock'}</span>
        
                </p>
                <p class="space-x-4 mt-2">
                    <span class="text-xl">Brand : </span>
                    <span class="text-xl " >{productDetail.brand.title}</span>
        
                </p>
        
                <p class="space-x-4 mt-2">
                    <span class="text-xl">Category : </span>
                    <span class="text-xl " >{productDetail.category.title}</span>
        
                </p>
        
                <p class="space-x-4 mt-2">
                    <span class="text-xl"> ID : </span>
                    <span class="text-xl " > {productDetail.id} </span>
        
                </p>
                <div class="mt-4 flex items-center gap-3">
                    <span class="text-xl text-primary font-semibold"> ${productDetail.discount} </span>
                    <span class="text-sm line-through " > ${productDetail.price} </span>
        
                </div>

                {errorMessage && <ErrorMessage errorMessage={errorMessage}></ErrorMessage>}
                {successMessage &&<SuccessMessage SuccessMessage={successMessage} ></SuccessMessage>}

        
                <div class="pt-1">
                    <h3 class="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Size</h3>
                    <div class="flex items-center gap-2">
                
                   
                    <div class="size-selector">
        
                        <input type="radio" 
                        name="size" 
                        class="hidden"
                        checked={selectedSize==='XS'}
                        onChange={()=>setSelectedSize('XS')}
                         id="size-xs"/>
                        <label for="size-xs" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" >XS</label>
        
                    </div>
        
                    <div class="size-selector">
        
                        <input type="radio" name="size" class="hidden"
                         checked={selectedSize==='S'}
                         onChange={()=>setSelectedSize('S')}
                         id="size-s"/>
                        <label for="size-s" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" >S</label>
        
                    </div>
        
                    <div class="size-selector">
        
                        <input type="radio" name="size" 
                         checked={selectedSize==='M'}
                         onChange={()=>setSelectedSize('M')}
                        class="hidden" id="size-m"/>
                        <label for="size-m" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" >M</label>
        
                    </div>
        
                    <div class="size-selector">
        
                        <input type="radio" name="size" 
                         checked={selectedSize==='L'}
                         onChange={()=>setSelectedSize('L')}
                         class="hidden" id="size-l"/>
                        <label for="size-l" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" >L</label>
        
                    </div>
        
        
                    <div class="size-selector">
        
                        <input type="radio" name="size" 
                         checked={selectedSize==='XL'}
                         onChange={()=>setSelectedSize('XL')}
                         class="hidden" id="size-xl"/>
                        <label for="size-xl" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                        items-center justify-center cursor-pointer shadow-sm text-gray-900" >XL</label>
        
                    </div>
        
                </div>
                </div>
        
             
               
        
                <div class="mt-4">
                    <h3 class="text-gray-700 mb-2 text-lg">Quantity</h3>
                    <div class="flex border border-gray-500 text-gray-600 divide-x divide-gray-500 w-max">
                        <div class="h-7 w-7 text-xl flex items-center justify-center cursor-pointer" onClick={handleDecrement} > - </div>
                        <div class="h-7 w-7 text-2xl flex items-center justify-center " id="quantity"> {quantity} </div>
                        <div class="h-7 w-7 text-xl flex items-center justify-center cursor-pointer" onClick={handleIncrement}> + </div>
        
                    </div>
        
                  
        
        
                </div>
        
                <div onClick={handleAddToCart} class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                    <a href="#" class="bg-primary border border-primary text-white px-10 py-4 
                    hover:bg-transparent hover:text-primary transition flex items-center font-medium rounded-lg uppercase">
                    <span class="mr-3"><i class="fa-solid fa-cart-shopping"></i> 
                    </span> 
                    Add to Cart
                    </a>
                   
                    <a onClick={handleWish} class="bg-second border border-gray-950 text-white px-10 py-4 
                    hover:bg-primary hover:text-white transition flex items-center font-medium rounded-lg uppercase">
                    <span class="mr-3"><i class="fa-solid fa-heart"></i> 
                    </span>   Whishlist
                    </a>
        
        
                </div>
                <div class="flex space-x-5">
                    <a href="#" class="text-gray-400 text-sm font-poppins hover:text-gray-100">
                        <i class="fa-brands fa-facebook"></i>
        
                    </a>
        
                    <a href="#" class="text-gray-400 text-sm font-poppins hover:text-gray-100">
                        <i class="fa-brands fa-twitter"></i>
        
                    </a>
        
                    <a href="#" class="text-gray-400 text-sm font-poppins hover:text-gray-100">
                        <i class="fa-brands fa-instagram"></i>
        
                    </a>
        
                    <a href="#" class="text-gray-400 text-sm font-poppins hover:text-gray-100">
                        <i class="fa-brands fa-github"></i>
        
                    </a>
        
                    <a href="#" class="text-gray-400 text-sm font-poppins hover:text-gray-100">
                        <i class="fa-brands fa-youtube"></i>
        
                    </a>
        
        
                </div>
               
        
                
            </div>
        
            
        
        
        
        </div>
        
        </div>
        
        
        <div class="container">
        <h3 class=" border-b border-gray-400 text-gray-900 text-xl pb-3">Product Details</h3>
        
        
            <div class="lg:w-5/5 xl:5/5 pt-6 pb-6">
                <p class="text-gray-500 mb-2">
                {productDetail.description}
                    
                           </p>
                
        
        
            </div>
        </div>
        
        
        <h2 class="text-2xl mt-20 md:text-3xl font-medium uppercase font-poppins mb-6 text-gray-800 text-center" > </h2>
        
        
        <Topproducts></Topproducts>
        
          
        
        
        
            </div>
        
    </div>
    
    ):
    <div>No product</div>
    
    }





    </div>
  )
}

export default ProductDetail