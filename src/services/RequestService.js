import axios from 'axios'
import jwt_decode from 'jwt-decode'

const AUTH_TOKEN_KEY = 'ojwang_auth'
const REFRESH_TOKEN_KEY = 'ojwang_refresh'

// Create axios client, pre-configured with baseURL
export const RequestServicePublic = axios.create({
  baseURL: `${process.env.REACT_APP_SHAFLAS_API_HTTP_SCHEME}://${process.env.REACT_APP_SHAFLAS_API_BASE_URL}`,
  timeout: 10000,
})

// Create axios client, pre-configured with baseURL
let RequestService = axios.create({
  baseURL: `${process.env.REACT_APP_SHAFLAS_API_HTTP_SCHEME}://${process.env.REACT_APP_SHAFLAS_API_BASE_URL}`,
  timeout: 10000,
})

const isHandlerEnabled = (config = {}) => {
  return !(config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled)
}

const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    // alert("enabled")
    // Modify request here
    request.headers['Authorization'] = `Bearer ${getToken()}`
  }
  return request
}

const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {
    //todo will fail if response is empty fix this. to reproduce issue, kill backend
    // Handle errors
    if (error.response.status === 401 && getRefreshToken() !== false) {
      // try to refresh token
      // noinspection JSCheckFunctionSignatures
      return RequestService.post(
        '/api/v1/token/refresh/',
        { refresh: getRefreshToken() },
        { handlerEnabled: false },
      )
        .then((res) => {
          if (res.status === 200) {
            // 1) put token to LocalStorage
            setAuthToken(res.data.access)
            setRefreshToken(res.data.refresh)

            // 2) Change Authorization header
            RequestService.defaults.headers.common['Authorization'] = 'Bearer ' + getToken()
            // 3) return originalRequest object with Axios.
            return RequestService(error.config)
          } else {
            //  do some logging here
          }
        })
        .catch((res) => {
          // log response then log user out
          logout()
        })
    }
  }
  return Promise.reject({ ...error })
}

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response
}

RequestService.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
)

RequestService.interceptors.request.use((request) => requestHandler(request))

export const getToken = () => {
  // todo add logic to check expiry
  if (localStorage.getItem(AUTH_TOKEN_KEY)) {
    return localStorage.getItem(AUTH_TOKEN_KEY)
  }

  return false
}

export const getRefreshToken = () => {
  // todo add logic to check expiry
  if (localStorage.getItem(REFRESH_TOKEN_KEY)) {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
  }

  return false
}

export const getLoggedInUser = () => {
  var authToken = getToken()
  if (!authToken) {
    return
  }

  var decodedToken = jwt_decode(authToken)
  var user = {
    member_uid: decodedToken.member_uid,
    perissions: decodedToken.permissions,
  }
  return user
}

export const checkAccess = (permittedRoles, userRoles) => {
  // console.log(permittedRoles)
  // console.log(userRoles)
  return permittedRoles.some((v) => userRoles.includes(v))
}

export const getLoggedInUserRoles = () => {
  var authToken = getToken()
  if (!authToken) {
    return
  }

  var decodedToken = jwt_decode(authToken)
  return decodedToken.permissions
}

export const login = (shaflas_auth, shaflas_refresh) => {
  // todo add logic to check expiry
  setAuthToken(shaflas_auth)
  setRefreshToken(shaflas_refresh)
}

export const setAuthToken = (shaflas_auth) => {
  // todo add logic to check expiry
  localStorage.setItem(AUTH_TOKEN_KEY, shaflas_auth)
}
export const setRefreshToken = (shaflas_refresh) => {
  // todo add logic to check expiry
  localStorage.setItem(REFRESH_TOKEN_KEY, shaflas_refresh)
}

export const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
  window.location.reload()
}

export const isLogin = () => {
  if (localStorage.getItem(AUTH_TOKEN_KEY) && localStorage.getItem(REFRESH_TOKEN_KEY)) {
    return true
  }

  return false
}

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = () => {
  // alert("ndani")
  RequestService.interceptors.request.use(function (config) {
    // alert("ninini")
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
  })
}

export default RequestService
