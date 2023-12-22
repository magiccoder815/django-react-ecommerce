import React from 'react'

function FilterBar() {
  return (
    <div>
         <div className="col-span-1 bg-gray-100 px-4 pb-6 shadow-xl rounded-md overflow-hidden w-96 md:absolute lg:static left-4 top-7 z-10 lg:w-full lg:block">

<div className="divide-gray-500 divide-y space-y-5 relative">
  

    <div className="relative">
        <div className="text-gray-400 absolute right-0 top-0 cursor-pointer"></div>

        <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Categories</h3>
        <div className="space-y-2">


            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Shoes</label>
                <div className="ml-auto text-gray-600 text-sm">(10)</div>

            </div>
            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Watch</label>
                <div className="ml-auto text-gray-600 text-sm">(50)</div>

            </div>

            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Sport</label>
                <div className="ml-auto text-gray-600 text-sm">(3)</div>

            </div>

            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Dress</label>
                <div className="ml-auto text-gray-600 text-sm">(100)</div>

            </div>

            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Computer</label>
                <div className="ml-auto text-gray-600 text-sm">(2)</div>

            </div>

            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Mobile Phone</label>
                <div className="ml-auto text-gray-600 text-sm">(2)</div>

            </div>



            

        </div>


    </div>

    <div className="relative">
        <div className="text-gray-400 absolute right-0 top-0 cursor-pointer"></div>

        <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Brand</h3>
        <div className="space-y-2">


            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Apple</label>
                <div className="ml-auto text-gray-600 text-sm">(10)</div>

            </div>
            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Zara</label>
                <div className="ml-auto text-gray-600 text-sm">(50)</div>

            </div>

            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Dym</label>
                <div className="ml-auto text-gray-600 text-sm">(3)</div>

            </div>

            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Success</label>
                <div className="ml-auto text-gray-600 text-sm">(100)</div>

            </div>

            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950">Danger</label>
                <div className="ml-auto text-gray-600 text-sm">(2)</div>

            </div>

            <div className="flex items-center mt-1">
                <input type="checkbox" className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
                <label className="ml-3 text-gray-950"> Phone</label>
                <div className="ml-auto text-gray-600 text-sm">(2)</div>

            </div>



            

        </div>


    </div>
    

     <div className="pt-4 relative">
        <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Price</h3>

        <div className="mt-4 flex items-center">
            <input className="w-full border-gray-500 py-1 px-3 text-gray-600 text-sm shadow-sm rounded" placeholder="min" />
           <span className="mx-3 text-gray-600"> - </span>
            <input className="w-full border-gray-500 py-1 px-3 text-gray-600 text-sm shadow-sm rounded" placeholder="min" />


        </div>


     </div>

    
      <div className="pt-4 relative">
        <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Size</h3>
        <div className="flex items-center gap-2">
    
       
        <div className="size-selector">

            <input type="radio" name="size" className="hidden" id="size-xs"/>
            <label htmlFor="size-xs" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
            items-center justify-center cursor-pointer shadow-sm text-gray-900" >XS</label>

        </div>

        <div className="size-selector">

            <input type="radio" name="size" className="hidden" id="size-s"/>
            <label htmlFor="size-s" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
            items-center justify-center cursor-pointer shadow-sm text-gray-900" >S</label>

        </div>

        <div className="size-selector">

            <input type="radio" name="size" className="hidden" id="size-m"/>
            <label htmlFor="size-m" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
            items-center justify-center cursor-pointer shadow-sm text-gray-900" >M</label>

        </div>

        <div className="size-selector">

            <input type="radio" name="size" className="hidden" id="size-l"/>
            <label htmlFor="size-l" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
            items-center justify-center cursor-pointer shadow-sm text-gray-900" >L</label>

        </div>


        <div className="size-selector">

            <input type="radio" name="size" className="hidden" id="size-xl"/>
            <label htmlFor="size-xl" className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
            items-center justify-center cursor-pointer shadow-sm text-gray-900" >XL</label>

        </div>

    </div>




       


     </div>

    
       <div className="pt-4 relative">
        <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Color</h3>
     




       


     </div>




</div>




</div>

    </div>
  )
}

export default FilterBar