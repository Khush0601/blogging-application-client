import React, { useEffect, useState } from 'react'
import AppJourney from './Component/AppJourney/AppJourney'

const App = () => {
  const [isUserCame,setIsUserCame]=useState(false)
  useEffect(()=>{
    const userCame=localStorage.getItem('isUserCame')
    console.log( typeof userCameFirst)
    if(userCame===null ){
     setIsUserCame(true)
    }
   
   
    
   },[])
  
  console.log(isUserCame,'isUse')
    
  return (
    <div>
     {isUserCame ?<AppJourney/>:<>
      {/* routes part will be here */}
      <h1>Routes</h1>
     </>}
     
    </div>


  )
}

export default App