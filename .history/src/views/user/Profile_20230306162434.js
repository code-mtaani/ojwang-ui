import React from 'react'
import { axiosPrivate } from 'src/utils/axiosPrivate'
const Profile = () =>{
const getUserProfile = async() => {
  const response = await axiosPrivate.get('/v')
}
  return <> </>
}

export default Profile
