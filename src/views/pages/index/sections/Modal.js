import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CListGroup,
  CForm,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CListGroupItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
const Modal = () => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleRegisterClick = () => {
    navigate('/register')
  }
  return (
    <>
      <CButton
        variant="outline"
        color="success"
        style={{ color: 'green', fontWeight: 'bold', fontSize: '20px' }}
        onClick={() => setVisible(!visible)}
      >
        Get Started
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader></CModalHeader>
        <CModalBody>
          <CForm>
            <h1>Register</h1>
            <p className="text-medium-emphasis">Create your account</p>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilUser} />
              </CInputGroupText>
              <CFormInput placeholder="Username" autoComplete="username" />
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CInputGroupText>@</CInputGroupText>
              <CFormInput placeholder="Email" autoComplete="email" />
            </CInputGroup>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilLockLocked} />
              </CInputGroupText>
              <CFormInput type="password" placeholder="Password" autoComplete="new-password" />
            </CInputGroup>
            <CInputGroup className="mb-4">
              <CInputGroupText>
                <CIcon icon={cilLockLocked} />
              </CInputGroupText>
              <CFormInput
                type="password"
                placeholder="Repeat password"
                autoComplete="new-password"
              />
            </CInputGroup>
            <div className="d-grid">
              <CButton color="success">Create Account</CButton>
            </div>
          </CForm>
          <CListGroup flush>
            <CListGroupItem></CListGroupItem>
          </CListGroup>
        </CModalBody>
      </CModal>
    </>
  )
}

export default Modal
