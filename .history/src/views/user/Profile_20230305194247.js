import React, { useState } from 'react'
import axios from 'axios'


const Profile = () =>
{
  const [ userProfile, setUserProfile ] = useState( {} )
  const getUserProfile = async() =>
  {
    const res = await axios.get('')
    
  }
  return <>
  
  
  </>
}

export default Profile
