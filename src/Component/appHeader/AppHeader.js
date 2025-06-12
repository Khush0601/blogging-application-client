import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { RxCross2 } from "react-icons/rx";
const AppHeader = ({headerTitle,headerDesc,learnmore}) => {
  const [isOpen,setIsOpen]=useState(false)
 const navigate=useNavigate()
  return (
   
    <div className="w-screen bg-black h-[440px] md:px-28 flex flex-col  items-center">
     <div className="text-white flex  mt-4 w-full items-center justify-between py-2  sm:px-6 ">
       <div className=" mx-2 flex items-center justify-center  cursor-pointer">logo</div>
         <div className="text-white  mx-2 cursor-pointer flex justify-end md:hidden" onClick={()=>setIsOpen(true)}>menu</div>
         <div className="hidden md:flex cursor-pointer mx-8 lg:mx-16 xl:mx-24  items-center justify-center">
          <div className=" text-lg font-medium lg:mr-7">Home</div>
          <div className=" text-lg font-medium mx-4 lg:mx-7" onClick={()=>navigate('/about')}>About</div>
          <div className=" text-lg font-medium mx-4 lg:mx-7" onClick={()=>navigate('/services')}>Services</div>
          <div className=" text-lg font-medium mx-4 lg:mx-7" onClick={()=>navigate('/blog')}>Blogs</div>
          <div className=" text-lg font-medium mx-4 lg:mx-7" onClick={()=>navigate('/contact')}>Contact</div>
        </div>

       
        <div className="hidden md:flex cursor-pointer text-base font-medium bg-amber-600 rounded-lg text-white px-6 py-2 ml-4 items-center justify-center">
          Login
        </div>
      </div>

     
      <div className="text-white px-32 my-16 flex flex-col  items-center  ">
        <div className='text-6xl font-medium'>{headerTitle}</div>
        <div className='text-center my-7 text-lg font-base'>
       
        {headerDesc}
         </div>
         <div className='text-center  text-lg font-base' >{learnmore}</div>
      </div>
      {
        isOpen && 
        <div className="fixed top-0 right-0 h-full w-64 bg-gray-500 text-white z-50 p-4 shadow-lg transition-all duration-300">
          <div className="flex justify-end cursor-pointer">
            <button onClick={() => setIsOpen(false)} ><RxCross2/></button>
            
          </div>
           <ul className="mt-4 space-y-4">
               <li onClick={()=>navigate('/home')}>Home</li>
               <li onClick={()=>navigate('/about')}>About</li>
               <li onClick={()=>navigate('/services')}>Services</li>
               <li onClick={()=>navigate('/contact')}>Contact</li>
               <li onClick={()=>navigate('/blog')}>Blogs</li>
               <li onClick={()=>navigate('/signIn')}>Login</li>
    </ul>
        </div>
      }
    </div>
  );
};

export default AppHeader;
