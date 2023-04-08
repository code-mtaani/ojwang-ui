import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { axiosPublic } from 'src/utils/axiosPublic'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [loginErrorMessage, setLoginErrorMessage] = useState('Failed to Login')

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setLoginLoadingShow(true)
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
      // setLoginLoadingShow(false)
      localStorage.setItem('session', JSON.stringify(data))
      navigate('/')
    }

    const onFailure = (error) => {
      // setLoginLoadingShow(false)
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
    axiosPublic.post('/v1/user/', payload).then(onSuccess).catch(onFailure)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      type="text"
                      id="username"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="First name"
                      autoComplete="first_name"
                      type="text"
                      id="first_name"
                      required
                      onChange={(e) => setFirst_name(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Last name"
                      autoComplete="last_name"
                      type="text"
                      id="last_name"
                      required
                      onChange={(e) => setLast_name(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Phone number"
                      autoComplete="phone_number"
                      type="text"
                      id="phone_number"
                      required
                      onChange={(e) => setPhone_number(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      type="email"
                      required
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      id="password"
                      placeholder="Password"
                      autoComplete="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      id="password"
                      placeholder="Repeat password"
                      autoComplete="password2"
                      required
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
