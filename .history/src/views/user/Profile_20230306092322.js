import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Profile = () => {
  const [userProfile, setUserProfile] = useState({})

  const getUserProfile = async () => { 
    const res = await fetch( "/v1/user" )
    const data = await res.json()
    console.log(data)
  }
  useEffect(() => {
    getUserProfile()
  }, [])
  return <> </>
}

export default Profile
