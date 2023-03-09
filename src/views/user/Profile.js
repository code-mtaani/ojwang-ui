import React, { useEffect, useState } from 'react'
import { CAlert, CContainer } from '@coreui/react';
import { axiosPrivate } from 'src/utils/axiosPrivate';
import { getUser_uid } from 'src/utils/user_id';

const Profile = () =>{
  
  
  // get the currently loggedIn in user using their user_uid
  
  const user_uid = getUser_uid()
  useEffect(() => {
    const getUserProfile = async() => {
      const response = await axiosPrivate.get( `https://cbk-bonds.p.rapidapi.com/user/${user_uid}/` )
      const result = await response.data
      console.log(result)
    }
    getUserProfile()
    
  },[user_uid])
  
  return ( <> <CContainer>
    <div className='bg-danger'>
      Profile
    </div>

  </CContainer>
  </>
  )
}

export default Profile
