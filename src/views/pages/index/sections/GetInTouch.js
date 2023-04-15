import React from 'react'
import { CContainer, CRow, CCol, CFormInput, CButton } from '@coreui/react'
import ContactUsForm from './ContactUsToast'

const GetInTouch = () => {
  return (
    <>
      <CContainer fluid className="">
        <CRow>
          <CCol md={6} className="bg-black bg-opacity-75">
            <CContainer>
              <h1
                className="mt-4 ml-4"
                style={{ color: 'white', fontSize: '30px', fontWeight: 'bold' }}
              >
                GET IN TOUCH
              </h1>
              <p
                className="mt-2 ml-4"
                style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}
              >
                If you have some questions...
              </p>
              <ContactUsForm />
            </CContainer>
          </CCol>
          <CCol md={6} className="bg-warning bg-opacity-75" style={{}}>
            <h3 className="mt-4" style={{ color: 'white', fontSize: '30px', fontWeight: 'bold' }}>
              Subscribe
            </h3>
            <CFormInput
              placeholder="EMAIL"
              style={{ width: '35em', height: '4em' }}
              className="border-0"
            ></CFormInput>
            <CButton
              className="mb-4 ml-2 mt-2 bg-black border-0"
              style={{ color: 'white', fontWeight: 'bold', width: '35em', height: '4em' }}
            >
              SUBSCRIBE
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default GetInTouch
