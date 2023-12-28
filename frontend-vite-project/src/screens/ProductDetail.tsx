import React, { useEffect, useState } from 'react'
import Topproducts from '../components/Topproducts'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { BASE_URL } from '../configUrl';
import { getProductDetail } from '../hooks/actions/ProductAction';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

function ProductDetail() {

    const {id} = useParams();


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
    const url = BASE_URL+"/product/select/"+id;

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




  return (
    <div>
        


<div class="container py-4 flex justify-between">
    <div class="flex gap-3 items-center">
        <a class="text-primary text-base" href="index.html"> <i class="fa fa-home"></i></a>
        <span class="text-sm text-gray-600"> <i class="fa-solid fa-angle-right fa-lg"></i></span>
        <p class="text-primary  text-base  uppercase">Shop</p>
        <span class="text-sm text-gray-600"> <i class="fa-solid fa-angle-right fa-lg"></i></span>
        <p class="text-gray-900 font-medium uppercase">COMPUTER ONE</p>




    </div>
</div>







<div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">

    <div>

        <div>
            <img id="main-img" src={mainImg} class="w-full" />
        </div>

        <div class="grid grid-cols-5 gap-4 mt-4">
         
         
            <div>
                <img 
                src="img/product/shoes-1.png"
                 class={`"single-img cursor-pointer border  w-full 
                 ${selectedThumbnail === 'img/product/shoes-1.png' ? 'border-primary' : '' } `}
                 onClick={()=>handleImageClick('img/product/shoes-1.png')}
                 
                 />
            </div>

            <div>
                <img 
                src="img/product/shoes-2.png"
                 class={`"single-img cursor-pointer border  w-full 
                 ${selectedThumbnail === 'img/product/shoes-2.png' ? 'border-primary' : '' } `}
                 onClick={()=>handleImageClick('img/product/shoes-2.png')}
                 
                 />
            </div>

            <div>
                <img 
                src="img/product/shoes-3.png"
                 class={`"single-img cursor-pointer border  w-full 
                 ${selectedThumbnail === 'img/product/shoes-3.png' ? 'border-primary' : '' } `}
                 onClick={()=>handleImageClick('img/product/shoes-3.png')}
                 
                 />
            </div>
          
    



        </div>


    </div>
    



<div>
    <h2 class="uppercase md:text-3xl text-2xl font-medium mb-2">Itailan Shoes </h2>
    <div class="flex items-center">
        <div class="flex gap-1 text-sm text-yellow-500">
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>


        </div>
        <div class="text-xs text-gray-500 ml-3">(120)</div>


        {loading && <LoadingSpinner/>}
{error && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{Object.keys(productDetail).length>0 ?(

<div key={productDetail.id}>
    
    {productDetail.title}
</div>

):
<div>No product</div>

}

</div>
    
    <div class="space-y-3">
        <p class="space-x-4 mt-2">
            <span class="text-xl">Avaible : </span>
            <span class="text-xl text-green-600 font-semibold" >Stock</span>

        </p>
        <p class="space-x-4 mt-2">
            <span class="text-xl">Brand : </span>
            <span class="text-xl " >Juss</span>

        </p>

        <p class="space-x-4 mt-2">
            <span class="text-xl">Category : </span>
            <span class="text-xl " >Shoes</span>

        </p>

        <p class="space-x-4 mt-2">
            <span class="text-xl"> ID : </span>
            <span class="text-xl " > #161665656 </span>

        </p>
        <div class="mt-4 flex items-center gap-3">
            <span class="text-xl text-primary font-semibold"> $250.00 </span>
            <span class="text-sm line-through " > $350.00 </span>

        </div>

        <div class="pt-1">
            <h3 class="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Size</h3>
            <div class="flex items-center gap-2">
        
           
            <div class="size-selector">

                <input type="radio" name="size" class="hidden" id="size-xs"/>
                <label for="size-xs" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                items-center justify-center cursor-pointer shadow-sm text-gray-900" >XS</label>

            </div>

            <div class="size-selector">

                <input type="radio" name="size" class="hidden" id="size-s"/>
                <label for="size-s" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                items-center justify-center cursor-pointer shadow-sm text-gray-900" >S</label>

            </div>

            <div class="size-selector">

                <input type="radio" name="size" class="hidden" id="size-m"/>
                <label for="size-m" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                items-center justify-center cursor-pointer shadow-sm text-gray-900" >M</label>

            </div>

            <div class="size-selector">

                <input type="radio" name="size" class="hidden" id="size-l"/>
                <label for="size-l" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                items-center justify-center cursor-pointer shadow-sm text-gray-900" >L</label>

            </div>


            <div class="size-selector">

                <input type="radio" name="size" class="hidden" id="size-xl"/>
                <label for="size-xl" class="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
                items-center justify-center cursor-pointer shadow-sm text-gray-900" >XL</label>

            </div>

        </div>
        </div>

     
        <p class="pt-7">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nam reiciendis molestias quasi vitae cum.

</p>

        <div class="mt-4">
            <h3 class="text-gray-700 mb-2 text-lg">Quantity</h3>
            <div class="flex border border-gray-500 text-gray-600 divide-x divide-gray-500 w-max">
                <div class="h-7 w-7 text-xl flex items-center justify-center cursor-pointer" onClick={handleDecrement} > - </div>
                <div class="h-7 w-7 text-2xl flex items-center justify-center " id="quantity"> {quantity} </div>
                <div class="h-7 w-7 text-xl flex items-center justify-center cursor-pointer" onClick={handleIncrement}> + </div>

            </div>

          


        </div>

        <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <a href="#" class="bg-primary border border-primary text-white px-10 py-4 
            hover:bg-transparent hover:text-primary transition flex items-center font-medium rounded-lg uppercase">
            <span class="mr-3"><i class="fa-solid fa-cart-shopping"></i> 
            </span> 
            Add to Cart
            </a>
           
            <a href="" class="bg-second border border-gray-950 text-white px-10 py-4 
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
        <p class="text-gray-500 mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ipsam veritatis cumque, cupiditate quam mollitia, ex, totam autem voluptas quae hic magnam. Ipsum numquam ullam ratione exercitationem eaque, fuga atque veritatis. Quam officia deleniti assumenda illo beatae? Et, asperiores similique.
        </p>
        <p class="text-gray-500 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque expedita aut quisquam ipsa? Fuga reprehenderit eveniet molestiae optio velit quibusdam, numquam, vero iste ut libero distinctio nesciunt vitae officiis iusto eaque quo, cupiditate quisquam nihil debitis dicta magnam. Expedita, atque itaque veritatis, ut magnam autem ratione obcaecati, deleniti molestiae similique sit! Mollitia corporis soluta facilis nemo quam similique! Eos laboriosam iure totam odio corrupti, eligendi soluta iusto suscipit excepturi voluptas deserunt non, minus error aut officia officiis laudantium doloribus quisquam vitae adipisci. Commodi laboriosam ipsa quod sunt laborum vitae deserunt atque accusantium voluptatem dolorem amet tenetur facere, autem doloribus impedit consequuntur aspernatur alias illum. Libero laboriosam numquam autem praesentium repellat quidem rerum debitis, tempore ad veritatis accusantium, iste error? Dolor provident tempora quas consectetur ipsum neque impedit maiores maxime officiis, temporibus excepturi esse consequatur dolore, molestiae libero dignissimos dicta modi. Atque quae eaque officiis illum ducimus. Rerum earum praesentium deleniti?</p>
        <p class="text-gray-500 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto atque non, at sit voluptatibus asperiores dicta. Est vitae eius modi? Voluptates doloribus atque repellat, provident cumque voluptatum assumenda officia aliquid odit commodi, similique dolore corrupti veritatis alias autem? Voluptate qui nisi in sint aliquam, voluptates dolores itaque non culpa deleniti?</p>


        


    </div>
</div>


<h2 class="text-2xl mt-20 md:text-3xl font-medium uppercase font-poppins mb-6 text-gray-800 text-center" > </h2>


<Topproducts></Topproducts>

  



    </div>
  )
}

export default ProductDetail