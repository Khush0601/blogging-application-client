import React, { createContext, useEffect, useState } from 'react'
import AppJourney from './Component/AppJourney/AppJourney'
import AppRoutes from './Routes'
import { ToastContainer} from 'react-toastify';
import FireBaseProvider from './Context/Firebase.Context';
import axios from 'axios';
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
   
  
 React.useEffect(() => {
  const token = localStorage.getItem("token");

  const autoLogin = async () => {
    try {
      const userDetails = await axios.get("http://localhost:8000/bloggingApplication/api/v1/user/autoLogin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
      setUser(userDetails.data.user);
    } catch (e) {
      console.log("Auto-login failed:", e.message);
      localStorage.removeItem("token");
    }
  };

  if (token) {
    autoLogin();
  }
}, []);


console.log(user)
  return (
   <FireBaseProvider >
   <UserContext.Provider value={{user:user,setUser:setUser}}>
    <div>
     {isUserCame ?<AppJourney onjouneyCompleted={onjouneyCompleted}/>:<>
     <AppRoutes/>
     </>}
     
     <ToastContainer />
     
    </div>
   </UserContext.Provider>
    
   </FireBaseProvider>


  )
}

export default App