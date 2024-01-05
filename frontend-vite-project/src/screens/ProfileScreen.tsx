import React, { useEffect } from 'react'
import { logoutAction, userControl } from '../hooks/actions/UserAction';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { useNavigate } from 'react-router';
import ProfilePart from '../components/ProfilePart';

function ProfileScreen() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userInfo, error:UserInfoError ,loading:UserInfoLoading} =useAppSelector((state)=>state.user);
    const {userLogin, error ,loading} =useAppSelector((state)=>state.userLogin);

    useEffect(()=>{
        if(!userInfo)
        {
            navigate('/')
        }
    }, [userInfo, navigate])
    
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