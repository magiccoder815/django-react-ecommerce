import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../store';
import { userControl } from '../../hooks/actions/UserAction';
import ProfilePart from '../../components/ProfilePart';

function ChangePasswordScreen() {

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



   
    <div class="col-span-9 grid bg-gray-100 p-5 gap-4 mt-6 lg:mt-1">
        <form method="" action="">
            <h3 class="text-lg font-medium mb-10">Change Password</h3>

            <div class="space-y-5">
                <div>
                    <label class="text-gray-600 mb-3 block"> Old Password <span class="text-primary" > * </span></label>
                    <input type="password" class="input-box" placeholder="Old Password"/>
                </div>
            
            </div>

            <div class="space-y-5">
                <div>
                    <label class="text-gray-600 mb-3 block"> New Password <span class="text-primary" > * </span></label>
                    <input type="password" class="input-box" placeholder="New Password"/>
                </div>
            
            </div>

            <div class="space-y-5">
                <div>
                    <label class="text-gray-600 mb-3 block"> New Password Repeat <span class="text-primary" > * </span></label>
                    <input type="password" class="input-box" placeholder="New Password Repeat"/>
                </div>
            
            </div>

          
           

            <div class="mt-6">
                <button type="submit" class="block w-full py-2 text-center text-white bg-primary border
                border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition"> Save</button>
            </div>
         



        </form>
      </div>
    
    



</div>















     




</div>


  )
}

export default ChangePasswordScreen