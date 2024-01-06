import React from 'react'

function CartStep2() {
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
        <form>
            <h3 class="text-lg font-medium mb-10 mt-2">User Details Form</h3>

            <div class="space-y-7 mb-7">
                    <div class="grid sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label class="text-gray-600 mb-3 block"> Name <span class="text-primary" > * </span></label>
                            <input type="text" class="input-box" placeholder="name"/>
                        </div>
                        <div>
                            <label class="text-gray-600 mb-3 block"> Surname <span class="text-primary" > * </span></label>
                            <input type="text" class="input-box" placeholder="Surname"/>
                        </div>

                    </div>

                    <div>
                        <label class="text-gray-600 mb-3 block"> Email <span class="text-primary" > * </span></label>
                        <input type="text" class="input-box" placeholder="name"/>
                    </div>

                    <div>
                        <label class="text-gray-600 mb-3 block"> Phone <span class="text-primary" > * </span></label>
                        <input type="text" class="input-box" placeholder="Phone"/>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label class="text-gray-600 mb-3 block"> City <span class="text-primary" > * </span></label>
                            <input type="text" class="input-box" placeholder="City"/>
                        </div>
                        <div>
                            <label class="text-gray-600 mb-3 block"> Country <span class="text-primary" > * </span></label>
                            <input type="text" class="input-box" placeholder="Country"/>
                        </div>

                    </div>

                    <div>
                        <label class="text-gray-600 mb-3 block"> Street <span class="text-primary" > * </span></label>
                        <input type="text" class="input-box" placeholder="Phone"/>
                    </div>

                    <div>
                        <label class="text-gray-600 mb-3 block"> Posta Code <span class="text-primary" > * </span></label>
                        <input type="text" class="input-box" placeholder="Phone"/>
                    </div>

                    

                    <div>
                        <label class="text-gray-600 mb-3 block"> Company Name </label>
                        <input type="text" class="input-box" placeholder="name"/>
                    </div>

                 
            
             </div>


        </form>
    </div>

    <div class="lg:col-span-4 border border-gray-600 bg-gray-300 rounded-lg px-4">
        <h3 class="text-lg font-medium mb-10 mt-2">Checkout Review </h3>

        <div class="space-y-7 mb-7">

            <div class="flex justify-between">
                <div>
                    <h5 class="font-medium uppercase">COMPUTER TWO</h5>

                </div>
                    <p class="text-sm"> 3</p>
                    <p class="font-medium">$300</p>
                
            </div>

            <div class="flex justify-between">
                <div>
                    <h5 class="font-medium uppercase">COMPUTER Three</h5>

                </div>
                    <p class="text-sm"> 3</p>
                    <p class="font-medium">$300</p>
                
            </div>

        </div>
        <div class="flex justify-between">
           <h4 class="uppercase font-medium">subtotal</h4>
           <p class="uppercase font-medium">$900</p> 
        </div>

        <div class="flex justify-between">
            <h4 class="uppercase font-medium">Shipping</h4>
            <p class="uppercase font-medium">Free</p> 
         </div>

         <div class="flex justify-between">
            <h4 class="uppercase font-medium">Total</h4>
            <p class="uppercase font-medium">$900</p> 
         </div>

         <div class="flex items-center justify-between mt-6">

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
  )
}

export default CartStep2