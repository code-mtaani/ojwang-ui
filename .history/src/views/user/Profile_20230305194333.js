import React, { useState } from 'react'
import axios from 'axios'


const Profile = () =>
{
  const [ userProfile, setUserProfile ] = useState( {} )
  const getUserProfile = async() =>
  {
    const res = await axios.get('/v1/user').then(console.log(res))
    
  }
  return <>
  
  
  </>
}

export default Profile
