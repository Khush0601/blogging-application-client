import React, { useContext, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router'
import axios from 'axios';
import { ErrorToast, SuccessToast } from '../../utils/toast';
import { signInWithPopup } from 'firebase/auth';
import { useFirebaseContext } from '../../Context/Firebase.Context';
import { UserContext } from '../../App';
import BackButton from '../../Component/backButton/BackButton';
import { useEffect } from 'react';


const SignIn = () => {
  const {user,setUser}=useContext(UserContext)


  
    const [focusedField,setFocusedField]=useState(null)
  const navigate=useNavigate()
  const userObj={
    email:'',
    password:''
  }
  const [signInDetails,setSignInDetails]=useState(userObj)
  const onSignInDetailsUpdate=(e,type)=>{
   setSignInDetails((p)=>{
    return {...p,[type]:e.target.value}
   })
  }
  
 
useEffect(()=>{
 if(user){
  navigate(-1)
 }
},[user])

  const handleSignIn=async()=>{
  if(!signInDetails.email || !signInDetails.password){
    ErrorToast('please provide ')
    return
  }
  try {
    const response = await axios.post('http://localhost:8000/bloggingApplication/api/v1/user/signIn', {
      email: signInDetails.email,
      password: signInDetails.password,
    });
    // console.log('Login successful:', response.data);
    setUser( response.data)
    SuccessToast('Login successful!');
    setTimeout(()=>{
    navigate('/home')
   },2000)
    // navigate('/home')
   } 
   catch (error) {
    
    if (error.response) {
      ErrorToast(error.response.data.message || 'Login failed');
    } 
    else {
      ErrorToast('Something went wrong. Please try again.');
  }
}
  }

 
  const {auth,fbProvider} = useFirebaseContext();
  
  const onGoogleLogin=async()=>{
    try{
     const googleResponse=await  signInWithPopup(auth,fbProvider)
    //  console.log(googleResponse)
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
   localStorage.setItem("token", registeredData.data.token);
   setUser(registeredData.data.user);
   SuccessToast('Login successfully')
   setTimeout(()=>{
    navigate('/home')
   },2000)

    // console.log('userlogin',registeredData)
    }
    catch(e){
      console.error("Login error:", e);
      ErrorToast(e.message || "Google Login failed");
    }
    }


    
    console.log('user',user)
    
  return (
    <div className=' w-screen h-screen flex justify-center items-center tapp-bg tapp-text'>
        <div className='w-full  xs:w-96 m-2.5 p-2.5 flex flex-col items-center justify-center '>
       <div className='text-3xl flex items-center justify-center my-8'>
        <span className='py-8'><BackButton /></span>
       <span> Welcome Back</span>
       </div>
       <div className='my-10 '>
        
        <div className={`flex gap-2 items-center  p-2  w-64 my-2 border-solid border-black rounded-lg  bg-stone-200  ${focusedField === 'email' ? 'border-solid border-black border-2' : 'border-transparent'}  xs:w-80 `}
        onFocus={() => setFocusedField('email')}
        onBlur={() => setFocusedField(null)}
        >
         <div><EmailIcon/></div>
         <input type='text' className='outline-none  bg-transparent' placeholder='Enter Email' value={signInDetails.email} onChange={(e)=>onSignInDetailsUpdate(e,'email')}/>
        </div>
        <div className={`flex gap-2 items-center  p-2  w-64 my-2 border-solid border-black rounded-lg  bg-stone-200  ${focusedField === 'password' ? 'border-solid border-black border-2' : 'border-transparent'}  xs:w-80 `}
         onFocus={() => setFocusedField('password')}
         onBlur={() => setFocusedField(null)}>
         <div><KeyIcon/></div>
         <input type='text' className='outline-none  bg-transparent' placeholder='Enter password' value={signInDetails.password} onChange={(e)=>onSignInDetailsUpdate(e,'password')}/>
        </div>
       </div>
       <div className='text-normal cursor-pointer text-white bg-black px-5 py-1 rounded-2xl my-2' onClick={handleSignIn}>Sign In</div>
      <div className='my-4 text-gray-400'>OR</div>
      <div className='flex gap-2 px-10 items-center cursor-pointer bg-black text-white rounded-3xl py-2 my-4 xs:px-16 '>
        <div ><GoogleIcon sx={{fontSize:'20px'}}/></div>
        <div className='text-sm ' onClick={onGoogleLogin}>Continue with Google</div>
      </div>
      <div className='flex text-sm text-gray-400'>
        <div>Don't have  account ?</div>
        <Link to='/signUp' className='underline cursor-pointer' >Sign Up</Link>
      </div>
    </div>
    </div>
  )
}

export default SignIn