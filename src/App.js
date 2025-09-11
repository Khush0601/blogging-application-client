import React, { createContext, useEffect, useState } from 'react'
import AppJourney from './Component/AppJourney/AppJourney'
import AppRoutes from './Routes'
import { ToastContainer} from 'react-toastify';
import FireBaseProvider from './Context/Firebase.Context';
import axios from 'axios';
import "./App.css"
import Chatbot from './Component/chatbot/Chatbot';
import { API_BASE_URL } from './config/server/Server_Config';

export const UserContext=createContext(null);
export const ThemeContext = createContext(null);

const App = () => {
   const [user,setUser]=useState(null)
  const [isUserCame,setIsUserCame]=useState(false)
  const [isLight, setIsLight] = useState(localStorage.getItem('isLight') ==='true');

  useEffect(()=>{
    const userCame=localStorage.getItem('isUserCame')
   
    if(userCame===null ){
     setIsUserCame(true)
    }
   
   
    
   },[])
   
   const onjouneyCompleted=()=>{
    localStorage.setItem('isUserCame','came')
    setIsUserCame(false)
   }
  
   
  
 React.useEffect(() => {
  const token = localStorage.getItem("token");
  const autoLogin = async () => {

    try {
      const userDetails = await axios.get(`${API_BASE_URL}/bloggingApplication/api/v1/user/autoLogin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      
      setUser(userDetails.data.restData);
    } catch (e) {
      console.log("Auto-login failed:", e.message);
      localStorage.removeItem("token");
    }
  };

  if (token) {
    autoLogin();
  }
}, []);


  return (
   <FireBaseProvider >
   <UserContext.Provider value={{user:user,setUser:setUser}}>
   <ThemeContext.Provider value={{isLight:isLight,setIsLight:setIsLight}}>
     <div>
     {isUserCame ?<AppJourney onjouneyCompleted={onjouneyCompleted}/>:<>
       <div className={`${isLight ? "light" : "dark"} tapp-bg`}>
        <AppRoutes />
        <Chatbot/>
       </div>
    
     </>}

     
     
     <ToastContainer />
     
    </div>
   </ThemeContext.Provider>
   </UserContext.Provider>
    
   </FireBaseProvider>


  )
}

export default App