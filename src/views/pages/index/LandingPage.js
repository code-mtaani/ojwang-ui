import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CCol, CContainer } from '@coreui/react'
import NavBar from './component/NavBar'
const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-light min-vh-100 d-flex flex-col">
      <CCol>
        <NavBar />
        <CContainer>
          <h1>About Ojwang</h1>
        </CContainer>
      </CCol>
    </div>
  )
}

export default LandingPage
