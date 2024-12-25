import React, { useState } from 'react'
import SplashScreen from '../SplashScreen/SplashScreen'

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
    <div>
        {jouneyStep===0 && <SplashScreen/>}
        {jouneyStep===1 && <h1>Second Jouney</h1>}
        {jouneyStep===2 && <h1>Third Jouney</h1>}
        {jouneyStep===3 && <h1>Fourth Jouney</h1>}
      <div>
     
      {jouneyStep===3?<button onClick={onjouneyCompleted}>Jouney Completed</button>: <button onClick={handleNext}>next</button>}
      <button onClick={handleBack}>back</button>
      </div>
    </div>
  )
}

export default AppJourney