import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store';
import { getSocials } from '../hooks/actions/SettingsAction';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

function Footer() {

    const dispatch = useDispatch();
    const {socials, error ,loading} =useAppSelector((state)=>state.socials);


    useEffect(()=>{
        dispatch(getSocials());
    },[dispatch]);


  return (
    <div>


<footer className="bg-second pt-16 pb-12 border-t border-primary">
  <div className="container">
     <div className="xl:grid xl:grid-cols-3 xl:gap-8">
         <div className="space-y-8 xl:col-span-1">
             <img src="img/logo.png" className="w-64 h-auto" alt="Youtube Efe Görkem Ümit" />
             <p className="text-gray-400 text-sm font-poppins" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, reprehenderit.</p>

             <div className="flex space-x-5">


             {loading && <LoadingSpinner/>}
{error && <ErrorMessage errorMessage={error.message} ></ErrorMessage> }
{socials.map((social)=>(

<a href={social.urllink} target='_blank' className="text-gray-400 text-sm font-poppins hover:text-gray-100">
<i className={social.menuicon}></i>

</a>




    ))}



               



             </div>
         </div>

      <div className="mt-2 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
         <div className="md:grid md:grid-cols-2 md:gap-8">
             <div>
                 <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0"> Support</h3>
                 <div className="mt-4 space-y-4">
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Document</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Pricing</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Api</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Guides</a>
                 

                 </div>


             </div>

             <div>
                 <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0"> Community</h3>
                 <div className="mt-4 space-y-4">
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">GitHub</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Discord</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Present</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Plugins</a>
                 

                 </div>


             </div>


         </div>

         <div className="md:grid md:grid-cols-2 md:gap-8">
             <div>
                 <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0"> Project</h3>
                 <div className="mt-4 space-y-4">
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Download</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Changelog</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">All Versions</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Pricing</a>
                 

                 </div>


             </div>

             <div>
                 <h3 className="text-xl text-white font-semibold uppercase tracking-wide mt-10 lg:mt-0">  Started</h3>
                 <div className="mt-4 space-y-4">
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Editor Setup</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Browser Support</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Upgrade Guide</a>
                     <a href="#" className="text-gray-300 hover:text-white font-semibold block">Reusing Styles</a>
                 

                 </div>


             </div>


         </div>




      </div>

        
          

     </div>
     
  </div>
</footer>



          <div className="bg-primary py-5 mb-16 lg:mb-0">
             <div className="container flex items-center justify-between">
                 <p className="text-white font-semibold">© Youtube Efe Görkem Ümit</p>

                 <div>
                     <img src="img/pay.png" className="w-96" />
                 </div>



             </div>
          </div>



    </div>
  )
}

export default Footer