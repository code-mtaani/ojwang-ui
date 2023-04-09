import React, { useState } from 'react'
import {
  CAlert,
  CAlertLink,
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
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle, cilLockLocked, cilUser } from '@coreui/icons'
import { axiosPublic } from 'src/utils/axiosPublic'
import { Link } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState([])
  const [registrationLoadingShow, setRegistrationLoadingShow] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)
  const [formClassName, setFormClassName] = useState('')
  const [validityState, setValidityState] = useState({
    email: false,
    username: false,
    phone_number: false,
    first_name: false,
    last_name: false,
    password: false,
    password2: false,
  })
  const [validityError, setValidityError] = useState({
    email: '',
    username: '',
    phone_number: '',
    first_name: '',
    last_name: '',
    password: '',
    password2: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setRegistrationLoadingShow(true)
    const payload = JSON.stringify({
      email,
      username,
      phone_number,
      first_name,
      last_name,
      password,
      password2,
    })

    const onSuccess = ({ data }) => {
      setRegistrationLoadingShow(false)
      setAlertVisible(true)
      setFormClassName('d-none')
    }

    const onFailure = (error) => {
      setRegistrationLoadingShow(false)
      if (error?.response?.status === 400) {
        console.log(error.response.data)
        for (const key in error.response.data) {
          let validState = validityState
          let validationErrors = validityError
          validState[key] = true
          validationErrors[key] = error.response.data[key]
          setValidityState({ ...validState })
          setValidityError({ ...validationErrors })
        }
      } else {
        setRegistrationErrorMessage('Account creation failed')
      }
    }
    axiosPublic.post('/v1/user/register/', payload).then(onSuccess).catch(onFailure)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              {registrationErrorMessage}
              <CCardBody className="p-4">
                <CAlert color="success" visible={alertVisible}>
                  <CIcon
                    icon={cilCheckCircle}
                    className="flex-shrink-0 me-2"
                    width={24}
                    height={24}
                  />
                  Your Ojwang account was created successfully. {''}
                  <CAlertLink href="/login">Login to your account.</CAlertLink>
                </CAlert>
                <CForm className={formClassName} onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">
                    Create your account. If you already have an account, {}
                    <Link to="/login">login here </Link>
                  </p>
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
                      feedback={validityError.username}
                      invalid={validityState.username}
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
                      feedback={validityError.first_name}
                      invalid={validityState.first_name}
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
                      feedback={validityError.last_name}
                      invalid={validityState.last_name}
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
                      feedback={validityError.phone_number}
                      invalid={validityState.phone_number}
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
                      // label="City"
                      feedback={validityError.email}
                      invalid={validityState.email}
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
                      feedback={validityError.password}
                      invalid={validityState.password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      id="password2"
                      placeholder="Repeat password"
                      autoComplete="password2"
                      required
                      feedback={validityError.password2}
                      invalid={validityState.password2}
                      onChange={(e) => setPassword2(e.target.value)}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="primary" className="px-4">
                      {registrationLoadingShow ? (
                        <CSpinner component="span" size="sm" aria-hidden="true" />
                      ) : (
                        'Create Account'
                      )}
                    </CButton>
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
