import React, { useContext } from 'react';
import SideBar from '../../Component/sideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../../Assets/blogging-icon-27.jpg"
import BackButton from '../../Component/backButton/BackButton';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
     
      <div className="h-[72px] w-full bg-white shadow flex justify-between items-center px-1 py-4 fixed top-0 left-0 z-50">
       
        <div className="text-xl font-bold flex ">
           <BackButton/>
          <img src={logo}  alt="logo" className="w-10 h-10 object-contain" />
        </div>
        <div className="w-12 h-12 rounded-full bg-red-100 flex justify-center items-center text-lg font-medium">
          {user?.name?.charAt(0)}
        </div>
      </div>

      
      <div className="flex flex-1 pt-[72px]">
         <div className="hidden md:block w-64 bg-slate-500 shadow fixed top-[72px] bottom-0 left-0 z-40">
          <SideBar />
        </div>

       
        <div className="flex-1 ml-0 md:ml-64 overflow-y-auto p-4 bg-slate-200 h-[calc(100vh-72px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
