import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { axiosPrivate } from 'src/utils/axiosPrivate'
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

    const response = axiosPrivate.get( "/v1/user" )
    const data = await response.json()
    console.log(response.data)
  }
  useEffect(() => {
    getUserProfile()
  }, [])
  return <> </>
}

export default Profile