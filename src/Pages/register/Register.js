import React, { useContext, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios'
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router'
import validator from 'validator';
import { ErrorToast, SuccessToast} from '../../utils/toast';
import { signInWithPopup } from 'firebase/auth';
import { useFirebaseContext } from '../../Context/Firebase.Context';
import { UserContext } from '../../App';
import BackButton from '../../Component/backButton/BackButton';
import { API_BASE_URL } from '../../config/server/Server_Config';

const Register = () => {
  const{user,setUser}=useContext(UserContext)
  const navigate=useNavigate()
  const userObj={
    name:'',
    email:'',
    password:''
  }
  const [otp, setOtp] = useState('');
  const [signUpForm,setSignUpForm]=useState(userObj)
  const [isOtpGenerated,setIsOtpGenerated]=useState(false)
  const [verified,setVerified]=useState(false)
  const [focusedField,setFocusedField]=useState(null)
  const {auth,fbProvider} = useFirebaseContext();
  const onFormUpdate=(e,type)=>{
   setSignUpForm((p)=>{
    return {...p,[type]:e.target.value}
   })
  }
  const generateOtp=async()=>{
    if(!signUpForm.email){
      return ErrorToast('please enter the email')
    }
  else{
    try{
      const createOtp=await axios.post(`${API_BASE_URL}/bloggingApplication/api/v1/user/generateOtp`,{
        email:signUpForm.email
       })
       setIsOtpGenerated(true)
       SuccessToast('otp sent successfully')
       
     }
     catch(err){
      console.log(err)
      if(err.response.data==='otp already generated'){
        setIsOtpGenerated(true)
        ErrorToast(err.response.data)
      }
      else{
        setIsOtpGenerated(false)
        ErrorToast('server error')
      }
     }
  }
  }
  const verifyOtp=async()=>{
    try{
      const verify=await axios.post(`${API_BASE_URL}/bloggingApplication/api/v1/user/verifyOtp`,{
        email:signUpForm.email,
        otp:otp,
       })
       
       setVerified(true)
       SuccessToast('email veified')
     }
     catch(err){
     
      setVerified(false)
      ErrorToast(err?.response?.data?.message)
     }
  }

  
  const validateForm = () => {
    
   if(!validator.isAlpha(signUpForm.name.replace(/\s/g, ''), 'en-US')){
      ErrorToast('Name should only contain letters and spaces.')
      return false;
   }
  
    if (
      !validator.isStrongPassword(signUpForm.password, {
        minLength: 8,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
     ErrorToast(
        'Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.'
      );
      return false;
    }
    return true
  }
  
  const onSignUp= async(e)=>{
    e.preventDefault()
   try{
   
    if( validateForm()){
     const signUpResponse=await axios.post(`${API_BASE_URL}/bloggingApplication/api/v1/user/signUp`,{
       name:signUpForm?.name,
       email:signUpForm?.email,
       password:signUpForm?.password
     })
    
    
     SuccessToast(signUpResponse?.data?.message)
     setSignUpForm(userObj)
    }
   }
   catch(err){
    console.log(err)
    if(err?.response?.data?.message==='E11000 duplicate key error collection: test.users index: email_1 dup key: { email: "ksingh200601@gmail.com" }'){
      ErrorToast('user already exist')
    }
   else{
    ErrorToast(err?.response?.statusText)
   }
   }

  }

  const onGoogleLogin=async()=>{
  try{
   const googleResponse=await  signInWithPopup(auth,fbProvider)
   console.log(googleResponse)
   let googleToken= await googleResponse.user.getIdToken()
   let data = '';

  let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `${API_BASE_URL}/bloggingApplication/api/v1/user/googleLogin`,
  headers: { 
    'Authorization': `Bearer${googleToken}`
  },
  data : data
};
 let registeredData=await axios.request(config)
 setUser(registeredData.data)
 SuccessToast('SignUp successfully')
 setTimeout(()=>{
  navigate('/home')
 },2000)
  
  }
  catch(e){
  ErrorToast(e.message)
  }
  }
  

  
  return (
    <div className=' w-screen h-screen flex justify-center items-center tapp-bg tapp-text' >
        <div className='w-full  xs:w-96 m-2.5 p-2.5 flex flex-col items-center justify-center '>
        
      <div className='text-3xl flex items-center  justify-center my-8'>
      <BackButton className="py-2"/>
      <span className=''>Join Us Today</span>
      </div>
       <form className='flex flex-col items-center' onSubmit={onSignUp}>
       <div className='my-10 '>
        <div className={`flex gap-2 items-center  w-64  p-2 my-2 border-solid border-black rounded-lg bg-stone-200  ${focusedField === 'name' ? 'border-solid border-black border-2' : 'border-transparent'}  xs:w-80`}
        onFocus={() => setFocusedField('name')}
        onBlur={() => setFocusedField(null)}>
         <div><PersonIcon/></div>
         <input type='text' className='outline-none  bg-transparent flex-grow'  placeholder='Full Name' value={signUpForm.name} onChange={(e)=>onFormUpdate(e,'name')} required/>
        </div>
        <div className={`flex gap-2 items-center  w-64  p-2 my-2 border-solid border-black rounded-lg bg-stone-200  ${focusedField === 'email' ? 'border-solid border-black border-2' : 'border-transparent'}  xs:w-80`}
        onFocus={() => setFocusedField('email')}
        onBlur={() => setFocusedField(null)}>
         <div><EmailIcon/></div>
         <input type='text' className='outline-none  bg-transparent flex-grow disabled:opacity-20' value={signUpForm.email} required placeholder='Enter Email' disabled={verified} onChange={(e)=>onFormUpdate(e,'email')}/>
         </div>
       {
        !isOtpGenerated &&   <span className='text-blue-500 cursor-pointer'  onClick={generateOtp}>Request otp</span>
       }
       {
        (isOtpGenerated && !verified) && <div>
      <OtpInput 
      inputStyle={{
    padding: '10px',
    margin: '13px',
    backgroundColor:'#e7e5e4',
    borderRadius: '10px',
    textAlign: 'center', 
    width: '50px', 
    fontSize: '20px',
    color: 'black',
    
  }}
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>:</span>}
      renderInput={(props) => <input {...props} />}
    />
    
     <div className='flex justify-between'>
     <span className='text-blue-500 cursor-pointer' onClick={verifyOtp}>verify</span>
     <span className='text-blue-500 cursor-pointer' onClick={generateOtp}>Resend</span>
     </div>
     </div>
       }
       {
        verified && <span className='text-green-500' > email verified</span>
       }
        
       <div className={`flex gap-2 items-center  w-64  p-2 my-2 border-solid border-black rounded-lg bg-stone-200  ${focusedField === 'password' ? 'border-solid border-black border-2' : 'border-transparent'}  xs:w-80`}
        onFocus={() => setFocusedField('password')}
        onBlur={() => setFocusedField(null)}>
         <div><KeyIcon/></div>
         <input type='text' className='outline-none  bg-transparent flex-grow focus-within:border-black' value={signUpForm.password} placeholder='Enter password' onChange={(e)=>onFormUpdate(e,'password')} required/>
        </div>
       </div>
       <button className='text-normal text-white bg-black px-5 py-1 rounded-2xl my-2 disabled:opacity-50' disabled={!verified} type='submit'>Sign Up</button>
       </form>
      <div className='my-4 text-gray-400'>OR</div>
      <div className='flex gap-2 px-10 items-center bg-black text-white rounded-3xl py-2 my-4 xs:px-16'>
        <div ><GoogleIcon sx={{fontSize:'20px'}}/></div>
        <div className='text-sm' onClick={onGoogleLogin}>Continue with Google</div>
      </div>
      <div className='flex text-sm text-gray-400'>
        <div>Already have a account ?</div>
        <Link to='/signIn' className='underline'>Sign In</Link>
      </div>
    </div>
    </div>
  )
}

export default Register