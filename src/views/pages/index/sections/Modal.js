import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CListGroup,
  CForm,
  CRow,
  CCol,
  CInputGroup,
  CInputGroupText,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilLockLocked,
  cilUser,
  cilUserPlus,
  cibGoogle,
  cibTwitter,
  cibFacebook,
} from '@coreui/icons'
import OffCanvas from './Offcanvas'
const Modal = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CButton
        color="white"
        style={{ color: 'green', fontWeight: 'bold', fontSize: '20px' }}
        onClick={() => setVisible(!visible)}
      >
        <CRow className="text-center">
          <CCol>Account</CCol>
          <CCol>
            {' '}
            <CIcon icon={cilUserPlus} size="xl" />
          </CCol>
        </CRow>
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
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
              <CButton color="success" style={{ fontWeight: 'bold' }}>
                Create Account
              </CButton>
            </div>
            <CListGroup>
              <div>
                <CRow>
                  <CCol md={4}>
                    <hr />
                  </CCol>
                  <CCol
                    className="text-center mt-2"
                    style={{ colord: 'black', fontWeight: 'bold', fontSize: '24px' }}
                  >
                    {' '}
                    OR
                  </CCol>
                  <CCol md={4}>
                    {' '}
                    <hr />
                  </CCol>
                </CRow>
              </div>
            </CListGroup>
            <CListGroup className="text-center mt-4">
              <div>
                <CRow>
                  <CCol md={4}>
                    <CIcon icon={cibGoogle} style={{ color: 'red' }} size="xxl" />
                  </CCol>
                  <CCol md={4}>
                    <CIcon icon={cibTwitter} style={{ color: 'blue' }} size="xxl" />
                  </CCol>
                  <CCol md={4}>
                    <CIcon icon={cibFacebook} style={{ color: 'blue' }} size="xxl" />
                  </CCol>
                </CRow>
              </div>
            </CListGroup>
            <CListGroup className="mt-4">
              <div className="text-center">
                <CRow>
                  <CCol md={2}>
                    <hr />
                  </CCol>
                  <CCol
                    md={8}
                    className="text-center"
                    style={{ colord: 'black', fontWeight: 'bold' }}
                  >
                    {' '}
                    Already have an account ?
                  </CCol>
                  <CCol md={2}>
                    {' '}
                    <hr />
                  </CCol>
                </CRow>
              </div>
              <div>
                <OffCanvas />
              </div>
            </CListGroup>
          </CForm>
        </CModalBody>
      </CModal>
    </>
  )
}

export default Modal
