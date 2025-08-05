import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { UserContext } from '../../App'

const PrivateRoutes = ({children}) => {
    const {user}=useContext(UserContext)
  return user?<>{children}</>:<Navigate to="/signIn" replace/>
  
}

export default PrivateRoutes