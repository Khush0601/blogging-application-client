import React, { useState } from 'react'
import SplashScreen from '../SplashScreen/SplashScreen'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import splashImage1 from '../../Assets/schoolpng2.svg'
import splashImage2 from '../../Assets/schoolpng3.svg'
import splashImage3 from '../../Assets/schoolpng4.svg'
import { Button } from '@mui/material';
const AppJourney = ({onjouneyCompleted}) => {
    const[jouneyStep,setJourneyStep]=useState(0)
    const handleNext=()=>{
       
        setJourneyStep((p)=>{
            return p+1
        })
    }
    const handleBack=()=>{
        if(jouneyStep===0){
            return 
        }
        setJourneyStep((p)=>{
            return p-1
        })
    }
  return (
    <div className='w-screen h-screen  border-2 border-solid  flex justify-center '>
       <div className=' flex  flex-col p-5 items-center justify-center'>
       <div className='my-4'>
       {jouneyStep===0 && <SplashScreen splashImage={splashImage1} splashtitle={'Bus Tracking'}
        splashContent={'This feature that provides information about'} splashSubContent={'its exact location and subsequent moments' }
         
        />}
        {jouneyStep===1 && <SplashScreen splashImage={splashImage2} splashtitle={'Library'} 
          splashContent={'Reservation are available at any time and'} splashSubContent={'it enhances your knowledge of the subject.'}
        />}
        {jouneyStep===2 && <SplashScreen splashImage={splashImage3} splashtitle={'Digital Diary'}
          splashContent={'A simple solution for digitilizing your student'} splashSubContent={'academics like homework and exam result.'}
        />}
     
       </div>
      <div className=' w-full my-8  flex justify-end gap-4'>
      <button onClick={handleBack} className='w-10 h-10 bg-[#3c317f] text-white rounded-full '><ArrowBackIosNewRoundedIcon/></button>
      {jouneyStep===2?<button onClick={onjouneyCompleted} className=' bg-[#3c317f] px-4 rounded-xl text-white text-base'>Jouney Completed</button>:
      <button onClick={handleNext} className='w-10 h-10 bg-[#3c317f] text-white rounded-full text-base'><ArrowForwardIosRoundedIcon/></button>}
      </div>
       </div>
    </div>
  )
}

export default AppJourney