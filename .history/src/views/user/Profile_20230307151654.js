import React, { useEffect } from 'react'
import { Alert } from '@coreui/react';
// import { axiosPrivate } from 'src/utils/axiosPrivate'
import axios from 'axios'
const Profile = () =>{
const getUserProfile = async() => {
  const response = await axios.get( 'https://cbk-bonds.p.rapidapi.com/user/' )
  const data = await response.data
  console.log(data)
}
  useEffect(() => {
    getUserProfile()
  },[])
  
  return <><Alert </>
}

export default Profile
