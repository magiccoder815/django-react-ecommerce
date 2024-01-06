import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../store';
import { userChangePassword, userControl } from '../../hooks/actions/UserAction';
import ProfilePart from '../../components/ProfilePart';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMesage';

function ChangePasswordScreen() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {userLogin} =useAppSelector((state)=>state.userLogin);

    const {Cpassword, error ,loading} =useAppSelector((state)=>state.userRegister);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const {userInfo} =useAppSelector((state)=>state.user);


    const [oldpassword, setoldpassword] = useState('');
    const [newpassword, setnewpassword] = useState('');
    const [newpasswordrepeat, setnewpasswordrepeat] = useState('');



    useEffect(()=>{
        if(!userInfo)
        {
            navigate('/auth/login')
        }
    }, [userInfo, navigate])
    
    useEffect(()=>{
        dispatch(userControl())
    },[dispatch]);

  
    const handlePasswordChange = (e) =>{

       
       
        e.preventDefault();

      


        if(newpassword !==newpasswordrepeat){
            setErrorMessage("password dont match")
            setTimeout(()=>setErrorMessage(null),5000)
            return;
        }

      




        dispatch(userChangePassword(oldpassword,newpassword,newpasswordrepeat))
        setSuccessMessage('RegisterSuccess')
        setTimeout(()=>setErrorMessage(null),5000)
        return;


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



    <ProfilePart></ProfilePart>



   
    <div class="col-span-9 grid bg-gray-100 p-5 gap-4 mt-6 lg:mt-1">
    {loading && <LoadingSpinner/>}
    {error && <ErrorMessage errorMessage={error}></ErrorMessage>}
    {errorMessage && <ErrorMessage errorMessage={errorMessage}></ErrorMessage>}
    {successMessage &&<SuccessMessage SuccessMessage={successMessage} ></SuccessMessage>}
        <form  onSubmit={handlePasswordChange}>
            <h3 class="text-lg font-medium mb-10">Change Password</h3>

            <div class="space-y-5">
                <div>
                    <label class="text-gray-600 mb-3 block"> Old Password <span class="text-primary" > * </span></label>
                    <input  type="password" value={oldpassword} onChange={(e)=>setoldpassword(e.target.value)}   class="input-box" placeholder="Old Password"/>
                </div>
            
            </div>

            <div class="space-y-5">
                <div>
                    <label class="text-gray-600 mb-3 block"> New Password <span class="text-primary" > * </span></label>
                    <input type="password" value={newpassword} onChange={(e)=>setnewpassword(e.target.value)}  class="input-box" placeholder="New Password"/>
                </div>
            
            </div>

            <div class="space-y-5">
                <div>
                    <label class="text-gray-600 mb-3 block"> New Password Repeat <span class="text-primary" > * </span></label>
                    <input type="password" value={newpasswordrepeat} onChange={(e)=>setnewpasswordrepeat(e.target.value)}  class="input-box" placeholder="New Password Repeat"/>
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