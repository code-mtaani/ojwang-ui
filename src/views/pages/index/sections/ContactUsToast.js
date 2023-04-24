import React, { useState, useRef } from 'react'
import {
  CButton,
  CToast,
  CContainer,
  CToastBody,
  CToastClose,
  CForm,
  CFormInput,
  CFormTextarea,
  CToastHeader,
  CToaster,
} from '@coreui/react'

const ContactUsForm = () => {
  const [toast, addToast] = useState(0)
  const toaster = useRef()
  const formToast = (
    <CToast autohide={true} color="white" style={{ height: '60%', color: 'black', width: '30em' }}>
      <CToastHeader>
        <h4>Send us a message</h4>
        <CToastClose className="me-2 m-auto" black />
      </CToastHeader>
      <CToastBody>
        <CContainer color="white">
          <CForm>
            <CFormInput placeholder="name" aria-label="Name" className="mt-4" />
            <CFormInput placeholder="email address" aria-label="Email" className="mt-2" />
            <CFormTextarea
              placeholder="Leave a message here"
              id="floatingTextarea2"
              floatingLabel="Message"
              style={{ height: '16em' }}
              className="mt-4"
            ></CFormTextarea>
          </CForm>
        </CContainer>
        <div className="mt-2 pt-2 border-top">
          <CButton type="button" color="dark" size="lg" style={{ width: '35%' }} className="ml-4">
            Send
          </CButton>
        </div>
      </CToastBody>
    </CToast>
  )

  return (
    <>
      <CButton
        onClick={() => addToast(formToast)}
        className="mb-4 ml-2 mt-2 bg-light border-0"
        style={{ width: '50%', height: '4em', color: 'Black', fontWeight: 'bold' }}
      >
        CONTACT US
      </CButton>
      <CToaster ref={toaster} push={toast} placement="bottom-start" />
    </>
  )
}

export default ContactUsForm
