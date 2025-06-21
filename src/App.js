import React, { createContext, useEffect, useState } from 'react'
import AppJourney from './Component/AppJourney/AppJourney'
import AppRoutes from './Routes'
import { ToastContainer} from 'react-toastify';
import FireBaseProvider from './Context/Firebase.Context';
export const UserContext=createContext(null);
const App = () => {
   const [user,setUser]=useState(null)
  const [isUserCame,setIsUserCame]=useState(false)
  useEffect(()=>{
    const userCame=localStorage.getItem('isUserCame')
    console.log(userCame)
    if(userCame===null ){
     setIsUserCame(true)
    }
   
   
    
   },[])
   
   const onjouneyCompleted=()=>{
    localStorage.setItem('isUserCame','came')
    setIsUserCame(false)
   }
  console.log(isUserCame,'isUse')
    
  return (
   <UserContext.Provider value={{user:user,setUser:setUser}}>
    <FireBaseProvider >
     <div>
     {isUserCame ?<AppJourney onjouneyCompleted={onjouneyCompleted}/>:<>
      {/* routes part will be here */}
      <AppRoutes/>
     </>}
     <ToastContainer />
     
    </div>
   </FireBaseProvider>
   </UserContext.Provider>


  )
}

export default App