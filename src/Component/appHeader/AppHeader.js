import React, { useContext } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { RxCross2 } from "react-icons/rx";
import logo from '../../Assets/blogging-icon-27.jpg'
import { FaMoon } from 'react-icons/fa';
import { ThemeContext, UserContext } from '../../App';
import { SuccessToast } from '../../utils/toast';

 

const AppHeader = ({headerTitle,headerDesc,learnmore}) => {
  const [isOpen,setIsOpen]=useState(false)
  const { isLight, setIsLight } = useContext(ThemeContext)
const {user,setUser}=useContext(UserContext)
 const navigate=useNavigate()
 const location=useLocation()
 const isActive=(path)=>location.pathname===path;

 const handleTheme=()=>{
  setIsLight((prev)=>!prev)
 }


 const handleLogout=()=>{
  localStorage.removeItem("token");
  setUser(null);
  SuccessToast("Logout successfully");
  setTimeout(() => {
    navigate("/signIn");
  }, 2000);
 }
  return (
   
    <div className="w-full px-2 bg-black  flex flex-col  items-center">
     <div className="text-white flex  mt-2 w-full items-center justify-between gap-16 py-2  md:px-4 ">
       <div className="mx-1 flex items-center justify-center cursor-pointer">
       <img src={logo} alt="app logo" className="w-12 h-12 object-contain" />
     </div>

        <div className="text-white  mx-2 cursor-pointer flex justify-end md:hidden" onClick={()=>setIsOpen(true)}>menu</div>
         <div className="hidden md:flex cursor-pointer mx-2 lg:mx-16 xl:mx-24  items-center justify-center">
          <div className={`text-lg font-medium mr-4 pb-2 border-b-2  
          ${isActive('/home')? 'border-amber-600  font-semibold': 'border-transparent text-lg'} lg:mr-7`} 
          onClick={()=>navigate('/home')} >Home</div>
          <div className={`text-lg font-medium mr-4 pb-2 border-b-2 
           ${isActive('/about')? 'border-amber-600  font-semibold': 'border-transparent text-lg'} lg:mr-7`}  onClick={()=>navigate('/about')}>About</div>
          <div className={`text-lg font-medium mr-4 pb-2 border-b-2  
           ${isActive('/services')? 'border-amber-600  font-semibold': 'border-transparent text-lg'} lg:mr-7`}  onClick={()=>navigate('/services')}>Services</div>
          <div className={`text-lg font-medium mr-4 pb-2 border-b-2  
           ${isActive('/blog')? 'border-amber-600  font-semibold': 'border-transparent text-lg'} lg:mr-7`}  onClick={()=>navigate('/blog')}>Blogs</div>
          <div className={`text-lg font-medium mr-4 pb-2 border-b-2  
          ${isActive('/contact')? 'border-amber-600  font-semibold': 'border-transparent text-lg'} lg:mr-7`}  onClick={()=>navigate('/contact')}>Contact</div>

         <div>
  {user ? (
   
    <div
      className="hidden md:flex cursor-pointer text-base font-medium bg-amber-600 rounded-lg text-white px-6 py-2 mx-2 items-center justify-center"
      onClick={handleLogout}
    >
      Logout
    </div>
  ) : (
     <div
      className="hidden md:flex cursor-pointer text-base font-medium bg-amber-600 rounded-lg text-white px-6 py-2 mx-2 items-center justify-center"
      onClick={() => navigate("/signIn")}
    >
      Login
    </div>
  )}
</div>



         <div className="hidden md:flex cursor-pointer text-base font-medium bg-amber-600 rounded-lg text-white px-6 py-2 ml-2 items-center justify-center " 
         onClick={()=>navigate('/dashboard/userBlog')}>
          Dashboard
        </div>

        <div  className="hidden md:flex cursor-pointer px-4 py-2 ml-2 hover:scale-110 transition"  onClick={handleTheme}>
          <FaMoon size={28} className="text-white-700" />
        </div>
        </div>
 </div>

      <div className="text-white px-2   mb-6 flex flex-col justify-center items-center xs:px-20 md:mb-32 md:mt-20 md:mb-32">
        <div className='text-3xl text-center font-medium md:text-4xl mt-8'>{headerTitle}</div>
        <div className='text-center my-4 text-base font-base md:text-lg my-12  px-16 lg:px-32'>
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
           <div className="mt-4 space-y-4">
               <div onClick={()=>navigate('/home')} >Home</div>
               <div onClick={()=>navigate('/about')}>About</div>
               <div onClick={()=>navigate('/services')}>Services</div>
               <div onClick={()=>navigate('/contact')}>Contact</div>
               <div onClick={()=>navigate('/blog')}>Blogs</div>
               <div onClick={user ? handleLogout : () => navigate('/signIn')}>
               {user ? "Logout" : "Login"}
               </div>
               <div onClick={()=>navigate('/dashboard')}>Dashboard</div>
              <div  className="flex cursor-pointer px-2 py-2 hover:scale-110 transition"  onClick={handleTheme}>
               <FaMoon size={28} className="text-white" />
               </div>
           </div>
        </div>
      }
    </div>
  );
};

export default AppHeader;
