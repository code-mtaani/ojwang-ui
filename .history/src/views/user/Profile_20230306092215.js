import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Profile = () => {
  const [userProfile, setUserProfile] = useState({})

  
  useEffect(() => {
    getUserProfile()
  }, [])
  return <> </>
}

export default Profile
