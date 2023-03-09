import React, {useEffect} from 'react'
// import { axiosPrivate } from 'src/utils/axiosPrivate'
import axios from 'axios'
const Profile = () =>{
const getUserProfile = async() => {
  const response = await axios.get( '/v1/' )
  const data = await response.data
  console.log(data)
}
  useEffect(() => {
    getUserProfile()
  },[])
  
  return <> </>
}

export default Profile
