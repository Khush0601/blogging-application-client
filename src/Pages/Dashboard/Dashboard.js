import React from 'react'
import SideBar from '../../Component/sideBar/SideBar'
import { Outlet } from 'react-router-dom';



const Dashboard = () => {
  return (
    <div className='w-full h-full bg-slate-200'>
    {/* 1st part */}
    {/* dashboard-header */}
     <div className='flex justify-between px-10 py-4 items-center'>
          <div className=''>logo</div>
          <div className='w-14 h-14 rounded-full bg-red-100 flex justify-center items-center '>A</div>
          
     </div>

{/* 2nd part */}
     <div className="flex min-h-screen bg-gray-300">
      <SideBar/>
     <div className="flex-1 p-4 overflow-y-auto bg-red-300">
      <Outlet/>
     </div>

    
     </div>
    


    </div>
  )
}

export default Dashboard