import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Profile = () =>
{
  const [ userProfile, setUserProfile ] = useState( {} )
  const getUserProfile = async() =>
  {
    const res = await axios.get('/v1/user').then(console.log(res.data))
    
  }

  useEffect( () =>
  {
    getUserProfile.then((r
  },[])

  return <>
  
  
  </>
}

export default Profile
