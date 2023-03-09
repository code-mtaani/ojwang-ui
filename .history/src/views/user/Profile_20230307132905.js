import React, {useEffect} from 'react'
// import { axiosPrivate } from 'src/utils/axiosPrivate'
import axios from 'axios'
const Profile = () =>{
const getUserProfile = async() => {
  const response = await axios.get( 'https://jsonplaceholder.typicode.com/users' )
  const data = await response.json()
  console.log(data)
}
  useEffect(() => {
    getUserProfile()
  },[])
  
  return <> </>
}

export default Profile
