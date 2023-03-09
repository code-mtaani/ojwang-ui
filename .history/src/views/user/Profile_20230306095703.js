import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Profile = () => {
  const [ userProfile, setUserProfile ] = useState( {} )
  
  const session = JSON.parse( localStorage.getItem("session"))

  const getUserProfile = async () => { 
    // const res = await fetch( "https://api.ojwang.co.ke/api/v1/user", {
    //   mode: "no-cors",
    //   headers: {Authentication: `Bearer ${session.access}`}
    // })
    // const data = await res.json();
    // console.log(data)

    const response = axios.get("https://")
  }
  useEffect(() => {
    getUserProfile()
  }, [])
  return <> </>
}

export default Profile
