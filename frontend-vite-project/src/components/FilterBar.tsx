import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { getCategories, getbrands } from '../hooks/actions/ProductAction';
import { Link, useNavigate } from 'react-router-dom';

function FilterBar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sizes = ['xs', 's', 'm', 'l', 'xl'];
    const [selectedSize, setSelectedSize] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setmaxPrice] = useState('');
    const [selectedCategories, setselectedCategories] = useState([]);
    const [selectedBrand, setselectedBrand] = useState([]);
    const {categories, error ,loading} =useAppSelector((state)=>state.categories);
    const {brands, error:branderror ,brandloading} =useAppSelector((state)=>state.brands);


    useEffect(()=>{
        dispatch(getCategories());
        dispatch(getbrands());
    },[dispatch]);

    const handleFilter =()=>{

        const queryParams = new URLSearchParams();

        if(selectedCategories.length>0){
            selectedCategories.forEach(categoryId=>{
                queryParams.append('category', categoryId)
            })
        }

        if(selectedBrand.length>0){
            selectedBrand.forEach(brandId=>{
                queryParams.append('brand', brandId)
            })
        }


        if(selectedSize.length>0){
            queryParams.append('size', selectedSize)
        }
        if(minPrice!==''){
            queryParams.append('min_price',minPrice)
        }
        if(maxPrice!==''){
            queryParams.append('max_price',maxPrice)
        }
       

        navigate(`/shop?${queryParams.toString()}`)
      

    };

    const handeSizeSelection =(selectedSize) =>{
        setSelectedSize([selectedSize]);
    };

    const handleCategorySelection=(categoryId)=>{
        const updateCategories = selectedCategories.includes(categoryId)
        ? selectedCategories.filter((id)=>id !==categoryId)
        : [...selectedCategories, categoryId];
        setselectedCategories(updateCategories);

    }

    const handleBrandSelection=(brandId)=>{
        const updateBrands = selectedBrand.includes(brandId)
        ? selectedBrand.filter((id)=>id !==brandId)
        : [...selectedBrand, brandId];
        setselectedBrand(updateBrands);

    }

    useEffect(()=>{

        const searchparams = new URLSearchParams(location.search)

        setSelectedSize(searchparams.get('size') || '');
        setMinPrice(searchparams.get('min_price') || '');
        setmaxPrice(searchparams.get('max_price') || '');

        const SelectedCategoriesParams = searchparams.getAll('category');
        setselectedCategories(SelectedCategoriesParams.map(Number));

        const SelectedbrandParams = searchparams.getAll('brand');
        setselectedBrand(SelectedbrandParams.map(Number));



    },[location.search])

  




  return (
    <div>
         <div className="col-span-1 bg-gray-100 px-4 pb-6 shadow-xl rounded-md overflow-hidden w-96 md:absolute lg:static left-4 top-7 z-10 lg:w-full lg:block">

<div className="divide-gray-500 divide-y space-y-5 relative">
  

    <div className="relative">
        <div className="text-gray-400 absolute right-0 top-0 cursor-pointer"></div>

        <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Categories</h3>
        <div className="space-y-2">

            

{loading && <LoadingSpinner/>}
{error && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{categories.map((category)=>(

<div key={category.id} className="flex items-center mt-1">
<input
 type="checkbox" 
 checked={selectedCategories.includes(category.id)}
 onChange={()=>handleCategorySelection(category.id)}
 className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
<label className="ml-3 text-gray-950">{category.title}</label>
<div className="ml-auto text-gray-600 text-sm">( {category.product_count} )</div>

</div>

    ))}



        </div>


    </div>

    <div className="relative">
        <div className="text-gray-400 absolute right-0 top-0 cursor-pointer"></div>

        <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Brand</h3>
        <div className="space-y-2">

            
{brandloading && <LoadingSpinner/>}
{branderror && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{brands.map((brand)=>(

<div key={brand.id} className="flex items-center mt-1">
<input type="checkbox" 
 checked={selectedBrand.includes(brand.id)}
 onChange={()=>handleBrandSelection(brand.id)}
className="text-primary focus:ring-0 cursor-pointer rounded-sm"/>
<label className="ml-3 text-gray-950">{brand.title}</label>
<div className="ml-auto text-gray-600 text-sm">( {brand.product_count} )</div>

</div>

    ))}

 

        </div>


    </div>
    

     <div className="pt-4 relative">
        <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Price</h3>

        <div className="mt-4 flex items-center">
            <input value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} className="w-full border-gray-500 py-1 px-3 text-gray-600 text-sm shadow-sm rounded" placeholder="min" />
           <span className="mx-3 text-gray-600"> - </span>
            <input value={maxPrice} onChange={(e)=>setmaxPrice(e.target.value)}  className="w-full border-gray-500 py-1 px-3 text-gray-600 text-sm shadow-sm rounded" placeholder="min" />


        </div>


     </div>

    
      <div className="pt-4 relative">
        <h3 className="text-xl text-gray-800 uppercase mb-4 mt-3 font-medium">Size</h3>
        <div className="flex items-center gap-2">
    
     {sizes.map((size)=>(
   <div key={size} className="size-selector">

   <input 
   type="radio"
    name="size" 
    className="hidden"
    onChange={()=>handeSizeSelection(size)}
    checked={selectedSize.includes(size)}
     id={`size-${size.toLowerCase()}`}
     />
   <label htmlFor={`size-${size.toLowerCase()}`}className="text-xs border border-gray-200  rounded-sm h-7 w-7 flex 
   items-center justify-center cursor-pointer shadow-sm text-gray-900 uppercase" >{size}</label>

   </div>

     ))}

         


      
       

       

    </div>




       


     </div>

    
       <div className="pt-4 relative">
       
       <a onClick={(e)=>{
        e.preventDefault(); handleFilter();
       }} class="block w-full py-2 text-center text-white bg-primary border
       border-primary rounded-xl font-medium hover:bg-transparent hover:text-primary">Filter</a>


<Link to={`/shop`}>

        <a class="block w-full py-2 mt-3 text-center text-white bg-second border
       border-primary rounded-xl font-medium hover:bg-transparent hover:text-second">Clear</a>
</Link>
       


     </div>




</div>




</div>

    </div>
  )
}

export default FilterBar