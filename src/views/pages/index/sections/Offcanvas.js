import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  CButton,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  CCol,
  CSpinner,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cibGoogle, cibTwitter, cibFacebook } from '@coreui/icons'
import { axiosPublic } from 'src/utils/axiosPublic'
import { AppFooter } from '../../../../components'

const OffCanvas = () => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const [loginLoadingShow, setLoginLoadingShow] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginErrorMessage, setLoginErrorMessage] = useState('Failed to Login')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoginLoadingShow(true)
    const payload = JSON.stringify({ email, password })

    const onSuccess = ({ data }) => {
      toast.success('Login successful', {
        position: 'top-right',
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
      setLoginLoadingShow(false)
      localStorage.setItem('session', JSON.stringify(data))
      navigate('/')
    }

    const onFailure = (error) => {
      setLoginLoadingShow(false)
      if (error?.response?.status === 401) {
        setLoginErrorMessage('Login Failed - wrong credentials supplied')
      } else {
        setLoginErrorMessage('Failed to Login')
      }
      toast.error(`${error && loginErrorMessage}`, {
        position: 'top-right',
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
    axiosPublic.post('/v1/user/login/', payload).then(onSuccess).catch(onFailure)
  }
  return (
    <>
      <CButton
        onClick={() => setVisible(true)}
        color="success"
        style={{ fontWeight: 'bold', color: 'black', width: '100%' }}
      >
        {' '}
        Login
      </CButton>
      <COffcanvas
        placement="end"
        scroll={true}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: '35em' }}
      >
        <COffcanvasHeader className="text-center">
          <COffcanvasTitle style={{ color: 'green', fontSize: '2rem', fontWeight: 'bold' }}>
            {' '}
            Login
          </COffcanvasTitle>
          <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
        </COffcanvasHeader>
        <COffcanvasBody className="text-center">
          <CForm onSubmit={handleSubmit}>
            <p className="text-medium-emphasis" style={{ color: 'light', fontSize: '1.5rem' }}>
              Sign In to your ojwang account
            </p>
            <CInputGroup className="mb-3">
              <CInputGroupText>
                <CIcon icon={cilUser} />
              </CInputGroupText>
              <CFormInput
                placeholder="Email"
                autoComplete="email"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </CInputGroup>
            <CInputGroup className="mb-4">
              <CInputGroupText>
                <CIcon icon={cilLockLocked} />
              </CInputGroupText>
              <CFormInput
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </CInputGroup>
            <CRow>
              <CCol xs={6}>
                <CButton type="submit" variant="outline" className="px-4" style={{ width: '100%' }}>
                  {loginLoadingShow ? (
                    <CSpinner
                      component="span"
                      size="sm"
                      aria-hidden="true"
                      style={{ color: 'sky', fontWeight: 'bold', fontSize: '24px' }}
                    />
                  ) : (
                    'Login'
                  )}
                </CButton>
              </CCol>
              <CCol xs={6}>
                <CButton color="link" className="px-0">
                  Forgot password?
                </CButton>
              </CCol>
            </CRow>
            <hr className="mt-4" />
            <h1 style={{ color: 'green' }}>OR</h1>
            <hr className="mt-4" />
            <CContainer className="mt-4 ">
              <CInputGroup className="mt-4">
                <CButton variant="outline" style={{ width: '100%' }}>
                  <CIcon icon={cibGoogle} size="xxl" style={{ color: 'sky' }} />
                </CButton>
              </CInputGroup>
              <CInputGroup className="mt-4">
                {' '}
                <CButton variant="outline" style={{ width: '100%' }}>
                  <CIcon icon={cibFacebook} size="xxl" style={{ color: 'sky' }} />
                </CButton>
              </CInputGroup>
              <CInputGroup className="mt-4">
                {' '}
                <CButton variant="outline" style={{ width: '100%' }}>
                  <CIcon icon={cibTwitter} size="xxl" style={{ color: 'sky' }} />
                </CButton>
              </CInputGroup>
            </CContainer>
          </CForm>
        </COffcanvasBody>
        <AppFooter />
      </COffcanvas>
    </>
  )
}

export default OffCanvas
