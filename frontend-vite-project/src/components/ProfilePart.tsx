import React, { useEffect } from 'react'
import { logoutAction, userControl } from '../hooks/actions/UserAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import { useAppSelector } from '../store';

function ProfilePart() {

    const dispatch = useDispatch();

  const {userInfo, error:UserInfoError ,loading:UserInfoLoading} =useAppSelector((state)=>state.user);

  useEffect(()=>{
    dispatch(userControl())

}, [dispatch]);

    const handleLogout = ()=>
    {
        dispatch(logoutAction());
    }

  return (
    <div class="col-span-3">

        <div class="px-4 shadow-lg flex bg-gray-100 items-center rounded-sm">
          
            <div class="ml-2">

                <p class="text-gray-500"> Hello....</p>
                <p class="text-gray-700 font-semibold">
                {UserInfoLoading ? (
        <p><LoadingSpinner></LoadingSpinner> </p>
      ) : UserInfoError ? (
        <p>Error</p>
      ): userInfo ? (
        <p>{userInfo.first_name}   {userInfo.last_name}</p>

      ):(
        <p> user not into</p>
      )

      
    }

                </p>
            </div>


        </div>


        <div class="mt-6 bg-gray-100 shadow-lg rounded-sm divide-y divide-gray-200 space-y-4 text-gray-600">

            <div class="space-y-1 pl-8">
                <a href="#" class="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                    <i class="fa-solid fa-receipt"></i> Manage Account
                </a>
                <Link to="/auth/change-password">
                <a  class="hover:text-primary transition block" >Change Password</a>
</Link>
            </div>

            <div class="space-y-1 pl-8">
                <a href="#" class="relative pt-4   font-medium text-xl hover:text-primary transition block text-primary">
                    <i class="fa-solid fa-basket-shopping"></i> Manage Shipping
                </a>

                <a href="#" class="hover:text-primary transition block" >History Shipping</a>
                <a href="#" class="hover:text-primary transition block">Cancelled Shipping</a>

            </div>

           

            <div class="space-y-1 pl-8 pt-2 pb-0">
            <Link to="/cart">
                <a class="hover:text-primary transition block text-xl" >     <i class="fa-solid fa-basket-shopping"></i> Card</a>
                </Link>
            </div>
            <div class="space-y-1 pl-8 pt-2 pb-0">
               <Link to="/auth/wishlist">
               <a href="#" class="hover:text-primary transition block text-xl items-center justify-center" ><i class="fa-solid fa-heart"></i> Whislist</a>

               </Link>
            </div>

            <div class="space-y-1 pl-8 pt-2 pb-2">
                <a  onClick={handleLogout}  class="hover:text-primary transition block text-xl"> <i class="fa-solid fa-right-from-bracket"></i> Logout</a>
            </div>



        </div>

    


        


    </div>
  )
}

export default ProfilePart