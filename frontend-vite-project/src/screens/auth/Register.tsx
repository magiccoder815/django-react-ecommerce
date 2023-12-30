import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Userregister } from '../../hooks/actions/UserAction';
import { useAppSelector } from '../../store';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/SuccessMesage';
import LoadingSpinner from '../../components/LoadingSpinner';

function Register() {

    const dispatch = useDispatch();
    const [email, setemail] = useState('');
    const [firstName, setFirstname] = useState('');
    const [username, setusername] = useState('');
    const [lastname, setlastname] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');
    const {userRegister, error ,loading} =useAppSelector((state)=>state.userRegister);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const [termsChecked, setTermsChecked] = useState(false);


    const handleRegister = (e) =>{

       
       
        e.preventDefault();

        if(password.length<6){
            setErrorMessage("Password at least 6 charc")
            setTimeout(()=>setErrorMessage(null),5000)
            return;
        }


        if(password !==confirmpassword){
            setErrorMessage("password dont match")
            setTimeout(()=>setErrorMessage(null),5000)
            return;
        }

        if(!termsChecked){
            setErrorMessage("Accept the terms")
            setTimeout(()=>setErrorMessage(null),5000)
            return;
        }
        




        dispatch(Userregister(email, username, firstName, lastname, password, true))
        setSuccessMessage('RegisterSuccess')
        setTimeout(()=>setErrorMessage(null),5000)
        return;


    }





  return (
    <div>

        
<div className="container py-16">

<div className="max-w-lg mx-auto px-7 py-7 shadow-xl rounded-xl overflow-hidden">
    <h2 className="text-3xl uppercase font-medium mb-1">Register</h2>
    <p className="text-gray-600 mb-6 text-sm">Lorem ipsum dolor sit amet.</p>
    {loading && <LoadingSpinner/>}
    {error && <ErrorMessage errorMessage={error}></ErrorMessage>}
    {errorMessage && <ErrorMessage errorMessage={errorMessage}></ErrorMessage>}
    {successMessage &&<SuccessMessage SuccessMessage={successMessage} ></SuccessMessage>}

    <form onSubmit={handleRegister}>

        <div className="space-y-5">
            <div>
                <label className="text-gray-600 mb-3 block"> First Name <span className="text-primary" > * </span></label>
                <input type="text" value={firstName} onChange={(e)=>setFirstname(e.target.value)} className="input-box" placeholder="example@example.com" required/>
            </div>
            <div>
                <label className="text-gray-600 mb-3 block"> Last Name <span className="text-primary" > * </span></label>
                <input type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} className="input-box" placeholder="example@example.com" required/>
            </div>
            <div>
                <label className="text-gray-600 mb-3 block"> Email Adress <span className="text-primary" > * </span></label>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="input-box" placeholder="example@example.com" required/>
            </div>
            <div>
                <label className="text-gray-600 mb-3 block"> Password <span className="text-primary" > * </span></label>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="input-box" placeholder="Enter Password"/>
            </div>
            <div>
                <label className="text-gray-600 mb-3 block"> Confirm Password <span className="text-primary" > * </span></label>
                <input type="password"  value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} className="input-box" placeholder="Enter Password"/>
            </div>


        </div>

        <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
                <input 
                checked={termsChecked}
                onChange={()=>setTermsChecked(!termsChecked)}
                type="checkbox" className="text-primary focus:ring-0 rounded-xl cursor-pointer"/>
                <label className="text-gray-800 ml-3">
                   <a href="#" className="text-primary"> term & conditions </a>
                </label>


            </div>


        </div>
        <div className="mt-4">
            <button type="submit" className="block w-full py-2 text-center text-white bg-primary border
             border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition ">Register</button>


        </div>


        <div className="mt-6 flex justify-center relative">
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-500"></div>
            <div className="text-gray-600 px-3 relative bg-white">
                OR LOGIN IN WITH
            </div>


        </div>

        <div className="mt-4 flex gap-4">
            <a href="#" className="block w-1/2 py-2 text-center text-white bg-blue-700  hover:bg-blue-800 rounded-xl uppercase font-roboto">
                Facebook
            </a>
            <a href="#" className="block w-1/2 py-2 text-center text-white bg-red-600 hover:bg-red-700 rounded-xl uppercase font-roboto">
                Google
            </a>


        </div>

        <p className="mt-4 text-gray-700 text-center">Don't have a account <a className="text-primary font-semibold" href="register.html">Register Now</a></p>


    </form>



</div>


</div>






    </div>
  )
}

export default Register