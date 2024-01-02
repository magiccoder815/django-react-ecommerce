import React, { useEffect } from 'react'
import { logoutAction, userControl } from '../hooks/actions/UserAction';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { useNavigate } from 'react-router';

function ProfileScreen() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userInfo, error:UserInfoError ,loading:UserInfoLoading} =useAppSelector((state)=>state.user);
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

  


    const handleLogout = ()=>
    {
        dispatch(logoutAction());
    }


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

    <div class="col-span-3">

        <div class="px-4 shadow-lg flex bg-gray-100 items-center rounded-sm">
          
            <div class="ml-2">

                <p class="text-gray-500"> Hello....</p>
                <p class="text-gray-700 font-semibold">Efe Görkem Ümit Youtube</p>
            </div>


        </div>


        <div class="mt-6 bg-gray-100 shadow-lg rounded-sm divide-y divide-gray-200 space-y-4 text-gray-600">

            <div class="space-y-1 pl-8">
                <a href="#" class="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                    <i class="fa-solid fa-receipt"></i> Manage Account
                </a>

                <a href="#" class="hover:text-primary transition block" >Change Password</a>
                <a href="#" class="hover:text-primary transition block">Profile Status</a>

            </div>

            <div class="space-y-1 pl-8">
                <a href="#" class="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                    <i class="fa-solid fa-basket-shopping"></i> Manage Shipping
                </a>

                <a href="#" class="hover:text-primary transition block" >History Shipping</a>
                <a href="#" class="hover:text-primary transition block">Cancelled Shipping</a>

            </div>

            <div class="space-y-1 pl-8">
                <a href="#" class="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                    <i class="fa-solid fa-location-pin"></i> Address
                </a>

                <a href="#" class="hover:text-primary transition block" >Change Address</a>
                <a href="#" class="hover:text-primary transition block">Update Address</a>

            </div>

            <div class="space-y-1 pl-8 pt-2 pb-0">
                <a href="#" class="hover:text-primary transition block text-xl" >     <i class="fa-solid fa-basket-shopping"></i> Card</a>
            </div>
            <div class="space-y-1 pl-8 pt-2 pb-0">
                <a href="#" class="hover:text-primary transition block text-xl items-center justify-center" ><i class="fa-solid fa-heart"></i> Whislist</a>
            </div>

            <div class="space-y-1 pl-8 pt-2 pb-2">
                <a  onClick={handleLogout}  class="hover:text-primary transition block text-xl"> <i class="fa-solid fa-right-from-bracket"></i> Logout</a>
            </div>



        </div>

    


        


    </div>



      <div class="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-1">

        <div class="shadow-xl bg-gray-100 px-4 pt-6 ">
            <div class="flex justify-between items-center mb-4">
                <h3 class=" text-gray-900 font-semibold text-lg">Address Details</h3>
                <a  class="text-primary" href="#">Edit</a>
            </div>
            <div class="space-y-1 mb-5">
                <h3 class="text-gray-600 font-semibold  text-base">Kam Kam Street</h3>
                <p class="text-sm text-gray-600">lorem  city</p>
                <p class="text-sm text-gray-600">Number 33</p>


            </div>


        </div>

        <div class="shadow-xl bg-gray-100 px-4 pt-6 ">
            <div class="flex justify-between items-center mb-4">
                <h3 class=" text-gray-900 font-semibold text-lg">Personal Details</h3>
                <a  class="text-primary" href="#">Edit</a>
            </div>
            <div class="space-y-1 mb-5">
                <h3 class="text-gray-600 font-semibold  text-base">Efe Görkem Ümit</h3>
                <p class="text-sm text-gray-600">efegorkem@umit.com</p>
                <p class="text-sm text-gray-600">(+90) 555 666 22 33</p>


            </div>


        </div>
        <div class="shadow-xl bg-gray-100 px-4 pt-6 ">
            <div class="flex justify-between items-center mb-4">
                <h3 class=" text-gray-900 font-semibold text-lg">Card Details</h3>
                <a  class="text-primary" href="#">Edit</a>
            </div>
            <div class="space-y-1 mb-5">
                <h3 class="text-gray-600 font-semibold  text-base">58** **** **** **55 </h3>
                <p class="text-sm text-gray-600">12/24</p>
                <p class="text-sm text-gray-600">200</p>


            </div>


        </div>





      </div>
    



</div>















     




</div>


  )
}

export default ProfileScreen