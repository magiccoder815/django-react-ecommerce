import React, { useState } from 'react'
import { useAppSelector } from '../store';
import { useDispatch } from 'react-redux';
import { addAddress, removeAddress } from '../hooks/actions/CartAction';

function CartStep2() {

    const {cart} =useAppSelector((state)=>state.cart);
    const {addresses} =useAppSelector((state)=>state.addresses);

    const delivery = ()=>{
        if(cart.length>0){ return 50; }
        else{return 0;}
    }

    const tax = ()=>{
        if(cart.length>0){ return 20; }
        else{return 0;}
    }
    const calculateSubTotal =()=>{
        return cart.reduce((total,item) =>total + item.quantity*item.price,0 );
    }

    const  calculateTotal =()=>{
        return calculateSubTotal()+ tax() + delivery()
    }

    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const [userDetails, setUserDetails] =useState({
        name:'',
        surname:'',
        phone:'',
        city:'',
        country:'',
        street:'',
        companyName:'',


    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUserDetails((prevDetails)=>({...prevDetails, [name]:value}));
    }

    const handleSaveAddress=()=>{
        dispatch(addAddress(userDetails))
    }

    const handleClearCart=(addressId)=>{
        console.log("a")
        dispatch(removeAddress(addressId))
    }


  return (
    <div>

        
<div class="container py-4 flex justify-between">
    <div class="flex gap-3 items-center">
        <a class="text-primary text-base" href="index.html"> <i class="fa fa-home"></i></a>
        <span class="text-sm text-gray-600"> <i class="fa-solid fa-angle-right fa-lg"></i></span>
        <p class="text-gray-900 font-medium">Checkout</p>

    </div>
</div>




<div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">

    <div class="lg:col-span-8 border border-gray-600 bg-gray-300 rounded-lg px-4">
            <h3 class="text-lg font-medium mb-10 mt-2">User Details Form</h3>

            <div class="space-y-7 mb-7">
                    <div class="grid sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label class="text-gray-600 mb-3 block"> Name <span class="text-primary" > * </span></label>
                            <input type="text" name="name" value={userDetails.name} onChange={handleChange} class="input-box" placeholder="name"/>
                        </div>
                        <div>
                            <label class="text-gray-600 mb-3 block"> Surname <span class="text-primary" > * </span></label>
                            <input type="text" name="surname" value={userDetails.surname} onChange={handleChange} class="input-box" placeholder="Surname"/>
                        </div>

                    </div>

                

                    <div>
                        <label class="text-gray-600 mb-3 block"> Phone <span class="text-primary" > * </span></label>
                        <input type="text" name="phone" value={userDetails.phone} onChange={handleChange} class="input-box" placeholder="Phone"/>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label class="text-gray-600 mb-3 block"> City <span class="text-primary" > * </span></label>
                            <input type="text" name="city" value={userDetails.city} onChange={handleChange} class="input-box" placeholder="City"/>
                        </div>
                        <div>
                            <label class="text-gray-600 mb-3 block"> Country <span class="text-primary" > * </span></label>
                            <input type="text" name="country" value={userDetails.country} onChange={handleChange} class="input-box" placeholder="Country"/>
                        </div>

                    </div>

                    <div>
                        <label class="text-gray-600 mb-3 block"> Street <span class="text-primary" > * </span></label>
                        <input type="text" name="street" value={userDetails.street} onChange={handleChange}  class="input-box" placeholder="Phone"/>
                    </div>

               

                    

                    <div>
                        <label class="text-gray-600 mb-3 block"> Company Name </label>
                        <input type="text" name="companyName" value={userDetails.companyName} onChange={handleChange} class="input-box" placeholder="name"/>
                    </div>

                    <div class="mt-4">
            <button onClick={handleSaveAddress} class="block mb-4 w-full py-2 text-center text-white bg-second border
             border-second rounded-xl uppercase hover:bg-transparent hover:text-second transition ">SAVE ADDRESS</button>


        </div>

                 
            
             </div>


    </div>

    <div class="lg:col-span-4 border border-gray-600 bg-gray-300 rounded-lg px-4">

        <div>
        <h3 class="text-lg font-medium mb-10 mt-2">Checkout Review </h3>

        <div class="space-y-7 mb-7">

        {cart.map((item)=>(

            <div class="flex justify-between">
                <div>
                    <h5 class="font-medium uppercase">{item.name}</h5>

                </div>
                    <p class="text-sm"> {item.quantity}</p>
                    <p class="font-medium">${item.price}</p>
                
            </div>

))}
          

        </div>
        <div class="flex justify-between">
           <h4 class="uppercase font-medium">subtotal</h4>
           <p class="uppercase font-medium">${calculateSubTotal()}</p> 
        </div>

        <div class="flex justify-between">
            <h4 class="uppercase font-medium">Shipping</h4>
            <p class="uppercase font-medium">${delivery()+tax()}</p> 
         </div>

         <div class="flex justify-between">
            <h4 class="uppercase font-medium">Total</h4>
            <p class="uppercase font-medium">${calculateTotal()}</p> 
         </div>


         <div class="flex mt-10 justify-between ml-2  mr-2 font-medium">
                <p className='text-2xl'> <i class="fa-solid fa-credit-card"></i> Cart</p>
                <p className='text-2xl'><input type='radio' name="pay"  /></p>
            </div>

            <div class="flex justify-between ml-2  mr-2 font-medium">
                <p className='text-2xl'> <i class="fa-solid fa-money-bill"></i> Cash</p>
                <p className='text-2xl'><input type='radio' name="pay"  /></p>
            </div>


            <div  class=" flex items-center justify-between mt-6">
                {addresses.addresses && addresses.addresses.map((adres)=>(
                    <div key={adres.id}>
                      <div>{adres.name}  {adres.surname} </div>  
                      <div>{adres.phone}   </div>  
                      <div> {adres.city}  {adres.country}  {adres.street}</div> 
                      <div>{adres.companyName}   </div>  

                    <div  className='cursor-pointer text-primary'> 
                    <i  onClick={()=>handleClearCart(adres.id)} class="fa-solid fa-trash"></i>
                    </div>
                      

                    </div>


                ))}
            </div>


         <div class=" flex items-center justify-between mt-32">

            <div class="flex items-center">
                <input type="checkbox" class="text-primary focus:ring-0 rounded-xl cursor-pointer"/>
                <p class="text-gray-800 ml-3">I agree</p>

            </div>
        </div>

        

        <div class="mt-4">
            <button type="submit" class="block mb-4 w-full py-2 text-center text-white bg-primary border
             border-primary rounded-xl uppercase hover:bg-transparent hover:text-primary transition ">CHECKOUT</button>


        </div>

        </div>

      

        

    
    
    </div>



</div>

    </div>
  )
}

export default CartStep2