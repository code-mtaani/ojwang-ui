import React from 'react'
import { axiosPrivate } from 'src/utils/axiosPrivate'
const Profile = () =>{
const getUserProfile = async() => {
  const response = await axiosPrivate.get( '/v1/user' )
  const data = await 
}
  return <> </>
}

export default Profile
