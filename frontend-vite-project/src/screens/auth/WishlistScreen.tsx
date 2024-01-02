import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../store';
import { userControl } from '../../hooks/actions/UserAction';
import ProfilePart from '../../components/ProfilePart';

function WishListScreen() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userLogin, error ,loading} =useAppSelector((state)=>state.userLogin);

    useEffect(()=>{
        if(!userLogin)
        {
            navigate('/')
        }
    }, [userLogin, navigate])
    
    useEffect(()=>{
        dispatch(userControl())
    },[dispatch]);

  


   


  return (
    <div>

        
<div class="container py-4 flex justify-between">
    <div class="flex gap-3 items-center">
        <a class="text-primary text-base" href="index.html"> <i class="fa fa-home"></i></a>
        <span class="text-sm text-gray-600"> <i class="fa-solid fa-angle-right fa-lg"></i></span>
        <p class="text-gray-900 font-medium">Account</p>

    </div>
</div>




<div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">



    <ProfilePart></ProfilePart>



    <div class="col-span-9  p-5 gap-4 mt-6 lg:mt-1">

<div class="flex items-center mt-3 mb-3 p-4 rounded-lg border-gray-300 flex-wrap md:flex-nowrap bg-gray-100 md:justify-between gap-4">
    <div class="text-gray-700 hover:text-primary cursor-pointer justify-center items-center">
        <i class="fa-solid fa-trash"></i>
    </div>

    
    <div class="w-28 flex-shrink-0">
        <img src="img/product/dress-2.png" class="w-full"/>


    </div>


    <div class="md:w-1/3 w-full">
        <h2 class="text-gray-900 mb-1 xl:text-xl text-lg font-medium uppercase">Dress Red Consept</h2>
        <p class="text-sm text-gray-500"> Avaible <span class="text-green-600 font-semibold">In Stock </span></p>


    </div>
   
    <div>
        <p class="text-primary text-lg font-semibold"> $560.00 </p>
    </div>

       <a href="#" class="block w-full py-2 text-center text-white bg-primary border
            border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition ">Add To Cart</a>

   

</div>


<div class="flex items-center mt-3 mb-3 p-4 rounded-lg border-gray-300 flex-wrap md:flex-nowrap bg-gray-100 md:justify-between gap-4">
    <div class="text-gray-700 hover:text-primary cursor-pointer justify-center items-center">
        <i class="fa-solid fa-trash"></i>
    </div>

    
    <div class="w-28 flex-shrink-0">
        <img src="img/product/dress-2.png" class="w-full"/>


    </div>


    <div class="md:w-1/3 w-full">
        <h2 class="text-gray-900 mb-1 xl:text-xl text-lg font-medium uppercase">Dress Red Consept</h2>
        <p class="text-sm text-gray-500"> Avaible <span class="text-green-600 font-semibold">In Stock </span></p>


    </div>
   
    <div>
        <p class="text-primary text-lg font-semibold"> $560.00 </p>
    </div>

       <a href="#" class="block w-full py-2 text-center text-white bg-primary border
            border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition ">Add To Cart</a>

   

</div>





</div>

    



</div>















     




</div>


  )
}

export default WishListScreen