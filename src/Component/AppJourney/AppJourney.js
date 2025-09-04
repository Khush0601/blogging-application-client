import React, { useState } from 'react'
import SplashScreen from '../SplashScreen/SplashScreen'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import splashImage1 from '../../Assets/splashscreen1.svg'
import splashImage2 from '../../Assets/spalshscreen_2.svg'
import splashImage3 from '../../Assets/splashscreen_3.svg'

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
       {jouneyStep===0 && <SplashScreen splashImage={splashImage1} splashtitle={'Blogging App'}
        splashContent={'Turn your words into powerful stories.'} splashSubContent={'Write, share, and explore blogs that matter to you.' }
         
        />}
        {jouneyStep===1 && <SplashScreen splashImage={splashImage2} 
        splashtitle = {'Join the Community'}
        splashContent = {'Engage in meaningful discussions and'}
        splashSubContent = {'connect with like-minded people.'}
        />}
        {jouneyStep===2 && <SplashScreen splashImage={splashImage3} 
        splashtitle = {'Your Space'}
        splashContent = {'Track your blogs, drafts, and saved posts'}
        splashSubContent = {'all in one place.'}
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