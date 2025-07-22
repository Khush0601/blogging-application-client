import React, { useContext } from 'react'
import { UserContext } from '../../App'

const UserBlog = () => {
   const {user,setUser}=useContext(UserContext)
     console.log(user)
  return (
    <div>UserBlog</div>
  )
}

export default UserBlog