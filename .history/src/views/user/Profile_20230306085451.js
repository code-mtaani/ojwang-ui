import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Profile = () => {
  const [userProfile, setUserProfile] = useState({})
  const getUserProfile = async () => {
    // const res = await axios.get('/v1/user')
    // console.log(res.data)
    axios({
    method: 'get',
    url: `https://api.someurl.com/subject/v2/resource/somevalue`,
    withCredentials: false,
    params: {
      access_token: SECRET_TOKEN,
    },
  });
  }

  useEffect(() => {
    getUserProfile()
  }, [])
  return <> </>
}

export default Profile
