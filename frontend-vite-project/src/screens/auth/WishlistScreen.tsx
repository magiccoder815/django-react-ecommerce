import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../store';
import { getWishlistAction, userControl } from '../../hooks/actions/UserAction';
import ProfilePart from '../../components/ProfilePart';
import Product from '../../components/Product';
import Wish from '../../components/Wish';

function WishListScreen() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userLogin} =useAppSelector((state)=>state.userLogin);
    const {getWish, error ,loading} =useAppSelector((state)=>state.getWish);
    const {userInfo, error:UserInfoError ,loading:UserInfoLoading} =useAppSelector((state)=>state.user);

    useEffect(()=>{
        if(!userInfo)
        {
            navigate('/auth/login')
        }
    }, [userInfo, navigate])
    
    useEffect(()=>{
        dispatch(userControl())
        dispatch(getWishlistAction())
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

        {getWish.product && getWish.product.map((productId)=>(
            <p key={productId}>
                <Wish productId={productId}></Wish>
            </p>


        ))}






</div>

    



</div>















     




</div>


  )
}

export default WishListScreen