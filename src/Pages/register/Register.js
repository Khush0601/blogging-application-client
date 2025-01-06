import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
        <div className='w-full  xs:w-96 m-2.5 p-2.5 flex flex-col items-center justify-center '>
       <div className='text-3xl  my-8'>Join Us Today</div>
       <div className='my-10 '>
        <div className='flex gap-2 items-center w-64  p-2 my-2 border-solid border-black rounded-lg bg-stone-200 xs:w-80'>
         <div><PersonIcon/></div>
         <input type='text' className='outline-none bg-transparent ' placeholder='Full Name'/>
        </div>
        <div className='flex gap-2 items-center  p-2  w-64 my-2 border-solid border-black rounded-lg  bg-stone-200 xs:w-80'>
         <div><EmailIcon/></div>
         <input type='text' className='outline-none  bg-transparent' placeholder='Enter Email'/>
        </div>
        <div className='flex gap-2 items-center  p-2  w-64 my-2 border-solid border-black rounded-lg  bg-stone-200 xs:w-80'>
         <div><KeyIcon/></div>
         <input type='text' className='outline-none  bg-transparent' placeholder='Enter password'/>
        </div>
       </div>
       <div className='text-normal text-white bg-black px-5 py-1 rounded-2xl my-2'>Sign Up</div>
      <div className='my-4 text-gray-400'>OR</div>
      <div className='flex gap-2 px-10 items-center bg-black text-white rounded-3xl py-2 my-4 xs:px-16'>
        <div ><GoogleIcon sx={{fontSize:'20px'}}/></div>
        <div className='text-sm'>Continue with Google</div>
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