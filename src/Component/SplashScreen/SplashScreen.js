import React from 'react'
import schoolImg from '../../Assets/schoolpng2.svg'
const SplashScreen = ({splashImage,splashtitle,splashContent,splashSubContent}) => {
  return (
    <div className=' flex flex-col justify-center grid grid-cols-1 md:grid-cols-2 flex items-center'>
      <div className='flex justify-content-items-center p-4 '>
      <img src={splashImage} alt={splashtitle} className='w-80 h-96 md:w-96  object-contain'/>
      </div>

    
     <div className='flex flex-col justify-content items-center'>
     <div className='text-center py-4 text-[#3c317f] font-semibold text-xl'>{splashtitle}</div>
     <div className='py-4' >
     <div className='text-base text-center'>{splashContent}

     
      </div>
      <div className='text-base text-center'>{splashSubContent}</div>
     </div>
     </div>
     </div>
  
  )
}

export default SplashScreen
