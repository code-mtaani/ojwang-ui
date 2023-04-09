import React, { useEffect, useState } from 'react'
import { axiosPrivate } from 'src/utils/axiosPrivate'
import { CCard, CAvatar, CRow, CCol, CCardBody } from '@coreui/react'
import { getUserInitials, getUserUid } from 'src/utils/auth'

const Profile = () => {
  const [userDetails, setUserDetails] = useState({ email: '', first_name: '', last_name: '' })
  // let initials
  // get user by user_uid
  const getUser = async () => {
    const res = await axiosPrivate.get(`/v1/user/${getUserUid()}/`)
    setUserDetails(res.data)
  }
  // initials = userDetails.first_name.substring(0,1).toUpperCase() + userDetails.last_name.substring(0,1).toUpperCase()
  useEffect(() => {
    getUser()
  }, [])

  // format date function
  const formattedDate = new Date(userDetails.date_joined).toDateString()
  return (
    <CRow className="mb-4">
      <CCol className="col-lg-4">
        <CCard className="mb-4 shadow-lg">
          <CCardBody className="card-body text-center">
            {/* <CAvatar className="mt-4" color="primary" textColor="white" size="xl">
              { initials }
            </CAvatar> */}
            <CAvatar className="rounded-circle img-fluid" color="dark" textColor="white" size="xl">
              {getUserInitials()}
            </CAvatar>
            <h5 className="my-3">{`${userDetails.first_name} ${userDetails.last_name}`}</h5>
            <p className="text-muted mb-1">{userDetails.email}</p>
            <p className="text-muted mb-4">User Role</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-outline-primary ms-1 shadow">
                Edit Profile
              </button>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol className="col-lg-8">
        <CCard className="mb-4 shadow-lg">
          <h5 className="card-header">Profile Details</h5>
          <CCardBody className="card-body">
            <CRow className="row">
              <CCol className="col-sm-3">
                <p className="mb-2">First Name</p>
              </CCol>
              <CCol className="col-sm-9">
                <p className="text-muted mb-2">{userDetails.first_name} </p>
              </CCol>
              <hr />
            </CRow>
            <CRow className="row">
              <CCol className="col-sm-3">
                <p className="mb-2">Last Name</p>
              </CCol>
              <CCol className="col-sm-9">
                <p className="text-muted mb-2">{userDetails.last_name} </p>
              </CCol>
              <hr />
            </CRow>
            <CRow className="row">
              <CCol className="col-sm-3">
                <p className="mb-2">Email</p>
              </CCol>
              <CCol className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.email} </p>
              </CCol>
              <hr />
            </CRow>
            <CRow className="row">
              <CCol className="col-sm-3">
                <p className="mb-2">Phone Number</p>
              </CCol>
              <CCol className="col-sm-9">
                <p className="text-muted mb-2">{userDetails.phone_number} </p>
              </CCol>
              <hr />
            </CRow>
            <CRow className="row">
              <CCol className="col-sm-3">
                <p className="mb-2">Date Joined</p>
              </CCol>
              <CCol className="col-sm-9">
                <p className="text-muted mb-2">{formattedDate} </p>
              </CCol>
              <hr />
            </CRow>
            <CRow className="row">
              <CCol className="col-sm-3">
                <p className="mb-2">Date of Birth</p>
              </CCol>
              <CCol className="col-sm-9">
                <p className="text-muted mb-1">{userDetails.date_of_birth} </p>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Profile
