import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Profile = () => {
  const [userProfile, setUserProfile] = useState({})
  const getUserProfile = async () => {
    // const res = await axios.get('/v1/user')
    // console.log(res.data)
    const session = JSON.parse(localStorage.getItem( 'session' ))
    console.log(session)
    axios({
    method: 'get',
    url: `/v1/user`,
    withCredentials: true,
    params: {
      access_token: session.access,
    },
  });
  }

  useEffect(() => {
    getUserProfile()
  }, [])
  return <> </>
}

export default Profile
