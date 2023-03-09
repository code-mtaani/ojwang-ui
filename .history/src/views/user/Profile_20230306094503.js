import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Profile = () => {
  const [ userProfile, setUserProfile ] = useState( {} )
  
  const sess

  const getUserProfile = async () => { 
    const res = await fetch( "https://api.ojwang.co.ke/api/v1/user", {
      mode: "no-cors",
      headers: {Authentication: 'Bearer {token}'}
    })
    const data = await res.json()
    console.log(data)
  }
  useEffect(() => {
    getUserProfile()
  }, [])
  return <> </>
}

export default Profile
