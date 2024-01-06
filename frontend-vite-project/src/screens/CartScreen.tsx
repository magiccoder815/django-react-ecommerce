import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearCart, removeFromCart, updateQuantity } from '../hooks/actions/CartAction';
import { useAppSelector } from '../store';
import { CLOUD_URL } from '../configUrl';
import { useNavigate } from 'react-router';
import ErrorMessage from '../components/ErrorMessage';

function CartScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const {cart} =useAppSelector((state)=>state.cart);


    const handleDecrement=(itemId)=>{
        const updatedQ = (cart.find((item)=>item.id === itemId)?.quantity) - 1;
        if(updatedQ>=1){
            dispatch(updateQuantity(itemId, updatedQ))
        }


    };
    const handleIncrement=(itemId)=>{
        const updatedQ = (cart.find((item)=>item.id === itemId)?.quantity || 0) +1;
        dispatch(updateQuantity(itemId, updatedQ))
    };

    const handleClearCart = ()=>{

        dispatch(clearCart())
    }

    const handleRemoveFromCart = (itemId)=>{
        dispatch(removeFromCart(itemId))
    }

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


    const handleSteptwo  =()=>{
        if(cart.length>0)
        { 
            navigate('/cart/step2')
        }

        else
        {

            setErrorMessage(" Cart is empty ")
            setTimeout(()=>setErrorMessage(null),6000)

            return;
           
        }

    }


    


  return (
    <div>

        
<div class="container py-4 flex justify-between">
    <div class="flex gap-3 items-center">
        <a class="text-primary text-base" href="index.html"> <i class="fa fa-home"></i></a>
        <span class="text-sm text-gray-600"> <i class="fa-solid fa-angle-right fa-lg"></i></span>
        <p class="text-gray-900 font-medium">Card</p>

    </div>
</div>






<div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">


    <div class="xl:col-span-9 lg:col-span-8">
        <div class="bg-second py-3 pl-12 pr-12 mb-4 rounded-lg  xl:pr-28 hidden md:flex">
        
            <p class="text-center text-white">Product</p>
            <p class="text-center ml-auto mr-16 xl:mr-24 text-white">Quntity</p>
            <p class="text-center text-white">Total</p>


        </div>

        {cart.map((item)=>(


     

                <div class="space y-2">

                    <div class="flex items-center p-6 bg-stone-200 md:justify-between gap-4 md:gap-6 border border-gray-800 rounded-lg flex-wrap md:flex-nowrap">

                        <div class="w-32 flex-shrink-0">
                            <img src={CLOUD_URL+ item.image} class="w-full"/>
                        </div>

                        <div class="md:w-1/3 w-full">
                            <h2>{item.name}</h2>
                            <p>${item.price}</p>
                            <p>Size : {item.size}</p>
                         

                        </div>

                        <div class="flex border border-gray-500 text-gray-600 divide-x divide-gray-500 w-max">
                            <div class="h-7 w-7 text-xl flex items-center justify-center cursor-pointer"  onClick={()=> handleDecrement(item.id)} > - </div>
                            <div class="h-7 w-7 text-2xl flex items-center justify-center " id="quantity"> {item.quantity} </div>
                            <div class="h-7 w-7 text-xl flex items-center justify-center cursor-pointer"  onClick={()=> handleIncrement(item.id)}> + </div>
            
                        </div>

                        <div class="ml-auto md:ml-0">
                            <p>${item.quantity * item.price}</p>


                        </div>
                        <div onClick={() =>handleRemoveFromCart(item.id)} class="text-second hover:text-primary cursor-pointer ">
                            <i class="fa-solid fa-trash"></i>
                        </div>


                    </div>

                    


                </div>

))}



    </div>

    <div class="xl:col-span-3 lg:col-span-4 border border-gray-300 bg-white rounded-xl mt-6 md:mt-0">

        <h3 class="text-2xl font-medium mb-10 mt-2 uppercase p-3 items-center justify-center">Order summary</h3>


        <div class="space-y-1 text-gray-700 pb-3 border-b border-gray-300">

            <div class="flex justify-between ml-2  mr-2 font-medium">
                <p>Subtotal</p>
                <p>${calculateSubTotal()}</p>
            </div>

            <div class="flex justify-between ml-2  mr-2 font-medium">
                <p>Delivery</p>
                <p>${delivery()}</p>
            </div>

            <div class="flex justify-between ml-2 mr-2 font-medium">
                <p>Tax</p>
                <p>${tax()}</p>
            </div>

            <div class="flex justify-between ml-2  mr-2 font-medium">
                <p>Total</p>
                <p>${calculateTotal()}</p>
            </div>

         
           




        </div>
        <a onClick={handleClearCart} class="bg-gray-600 border text-center cursor-pointer  text-white px-5 py-4 mt-6 block font-medium rounded-lg w-full">
        <i class="fa-solid fa-trash"></i> Remove Cart
                        </a>
                        

        <a onClick={handleSteptwo} class="bg-primary border text-center border-primary text-white px-5 py-4 mt-6 block font-medium rounded-lg w-full">
        <i class="fa-solid fa-arrow-right"></i>   Checkout
                        </a>
                        


                        {errorMessage && <ErrorMessage errorMessage={errorMessage}></ErrorMessage>}

      



    </div>













</div>


    </div> 
  )
}

export default CartScreen