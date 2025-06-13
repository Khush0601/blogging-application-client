import React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { RxCross2 } from "react-icons/rx";
const AppHeader = ({headerTitle,headerDesc,learnmore}) => {
  const [isOpen,setIsOpen]=useState(false)
 const navigate=useNavigate()
 const location=useLocation()
 const isActive=(path)=>location.pathname===path;
  return (
   
    <div className="w-full px-2 bg-black h-[420px] xs: h-[440px] flex flex-col  items-center">
     <div className="text-white flex  mt-4 w-full items-center justify-between gap-16 py-2  md:px-4 ">
       <div className=" mx-1 flex items-center justify-center  cursor-pointer">logo</div>
        <div className="text-white  mx-2 cursor-pointer flex justify-end md:hidden" onClick={()=>setIsOpen(true)}>menu</div>
         <div className="hidden md:flex cursor-pointer mx-2 lg:mx-16 xl:mx-24  items-center justify-center">
          <div className={`text-lg font-medium lg:mr-7 pb-2 border-b-2 transition-all 
          duration-200 ${isActive('/home')? 'border-amber-600  font-semibold': 'border-transparent text-lg'}`} 
          onClick={()=>navigate('/home')} >Home</div>
          <div className={`text-lg font-medium lg:mr-7 pb-2 border-b-2 transition-all 
          duration-200 ${isActive('/about')? 'border-amber-600  font-semibold': 'border-transparent text-lg'}`}  onClick={()=>navigate('/about')}>About</div>
          <div className={`text-lg font-medium lg:mr-7 pb-2 border-b-2 transition-all 
          duration-200 ${isActive('/services')? 'border-amber-600  font-semibold': 'border-transparent text-lg'}`}  onClick={()=>navigate('/services')}>Services</div>
          <div className={`text-lg font-medium lg:mr-7 pb-2 border-b-2 transition-all 
          duration-200 ${isActive('/blog')? 'border-amber-600  font-semibold': 'border-transparent text-lg'}`}  onClick={()=>navigate('/blog')}>Blogs</div>
          <div className={`text-lg font-medium lg:mr-7 pb-2 border-b-2 transition-all 
          duration-200 ${isActive('/contact')? 'border-amber-600  font-semibold': 'border-transparent text-lg'}`}  onClick={()=>navigate('/contact')}>Contact</div>
          <div className="hidden md:flex cursor-pointer text-base font-medium bg-amber-600 rounded-lg text-white px-6 py-2 mx-6 items-center justify-center">
          Login
        </div>
         <div className="hidden md:flex cursor-pointer text-base font-medium bg-amber-600 rounded-lg text-white px-6 py-2 mx-6 items-center justify-center ">
          Profile
        </div>
        </div>
 </div>

      <div className="text-white px-10 my-8  flex flex-col  items-center xs:px-20 my-12 md:px-32 my-16 ">
        <div className='text-3xl text-center font-medium md:text-4xl'>{headerTitle}</div>
        <div className='text-center my-10 text-base font-base md:text-lg my-12  px-16 lg:px-32'>
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
