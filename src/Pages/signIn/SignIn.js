import React, { useContext } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router'
import axios from 'axios';
import { ErrorToast, SuccessToast } from '../../utils/toast';
import { signInWithPopup } from 'firebase/auth';
import { useFirebaseContext } from '../../Context/Firebase.Context';
import { UserContext } from '../../App';

const SignIn = () => {
  const {user,setUser}=useContext(UserContext)
  const navigate=useNavigate()
  const {auth,fbProvider} = useFirebaseContext();
  const onGoogleLogin=async()=>{
    try{
     const googleResponse=await  signInWithPopup(auth,fbProvider)
     console.log(googleResponse)
     let googleToken= await googleResponse.user.getIdToken()
     let data = '';
  
    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:8000/bloggingApplication/api/v1/user/googleLogin',
    headers: { 
      'Authorization': `Bearer${googleToken}`
    },
    data : data
  };
   let registeredData=await axios.request(config)
   setUser(registeredData.data)
   SuccessToast('Login successfully')
   setTimeout(()=>{
    navigate('/home')
   },2000)

    console.log('userlogin',registeredData)
    }
    catch(e){

      console.error("Login error:", e);
      ErrorToast(e.message || "Google Login failed");
    }
    }
    console.log('user',user)
    
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
        <div className='w-full  xs:w-96 m-2.5 p-2.5 flex flex-col items-center justify-center '>
       <div className='text-3xl  my-8'>Welcome Back</div>
       <div className='my-10 '>
       
        <div className='flex gap-2 items-center  p-2  w-64 my-2 border-solid border-black rounded-lg  bg-stone-200 xs:w-80'>
         <div><EmailIcon/></div>
         <input type='text' className='outline-none  bg-transparent' placeholder='Enter Email'/>
        </div>
        <div className='flex gap-2 items-center  p-2  w-64 my-2 border-solid border-black rounded-lg  bg-stone-200 xs:w-80'>
         <div><KeyIcon/></div>
         <input type='text' className='outline-none  bg-transparent' placeholder='Enter password'/>
        </div>
       </div>
       <div className='text-normal text-white bg-black px-5 py-1 rounded-2xl my-2'>Sign In</div>
      <div className='my-4 text-gray-400'>OR</div>
      <div className='flex gap-2 px-10 items-center bg-black text-white rounded-3xl py-2 my-4 xs:px-16'>
        <div ><GoogleIcon sx={{fontSize:'20px'}}/></div>
        <div className='text-sm' onClick={onGoogleLogin}>Continue with Google</div>
      </div>
      <div className='flex text-sm text-gray-400'>
        <div>Don't have  account ?</div>
        <Link to='/signUp' className='underline'>Sign Up</Link>
      </div>
    </div>
    </div>
  )
}

export default SignIn