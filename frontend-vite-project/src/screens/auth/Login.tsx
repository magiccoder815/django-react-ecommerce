import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner'
import ErrorMessage from '../../components/ErrorMessage'
import { useDispatch } from 'react-redux';
import { UserLogin } from '../../hooks/actions/UserAction';
import { useAppSelector } from '../../store';
import { useNavigate } from 'react-router';

function Login() {

    const dispatch = useDispatch();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const {userLogin, error ,loading} =useAppSelector((state)=>state.userLogin);

    useEffect(()=>{
        if(!error && userLogin)
        {
            navigate('/')
        }
    }, [userLogin, error, navigate])
 


    const handleLogin = (e) =>{

        e.preventDefault();

        dispatch(UserLogin(email,password))
       
    }



  return (
    <div>
        

        <div className="container py-16">

<div className="max-w-lg mx-auto px-7 py-7 shadow-xl rounded-xl overflow-hidden">
    <h2 className="text-3xl uppercase font-medium mb-1">Login</h2>
    <p className="text-gray-600 mb-6 text-sm">Lorem ipsum dolor sit amet.</p>

    {loading && <LoadingSpinner/>}
    {error && <ErrorMessage errorMessage={error}></ErrorMessage>}
    <form onSubmit={handleLogin}>

        <div className="space-y-5">
            <div>
                <label className="text-gray-600 mb-3 block"> Email Adress <span className="text-primary" > * </span></label>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="input-box" placeholder="example@example.com"/>
            </div>
            <div>
                <label className="text-gray-600 mb-3 block"> Password <span className="text-primary" > * </span></label>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="input-box" placeholder="Enter Password"/>
            </div>


        </div>

     
        <div className="mt-4">
            <button type="submit" className="block w-full py-2 text-center text-white bg-primary border
             border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition ">Login</button>


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

export default Login