import { axiosPrivate } from './axiosPrivate'
import { toast } from 'react-toastify'
import jwt_decode from 'jwt-decode'

export const isLoggedIn = () => {
  let session = JSON.parse(localStorage.getItem('session'))
  if (session?.access && session?.refresh) {
    return true
  }
  return false
}

export const logout = () => {
  let session = JSON.parse(localStorage.getItem('session'))

  const payload = JSON.stringify({ refresh: session?.refresh })

  const onSuccess = ({ data }) => {
    localStorage.removeItem('session')
    toast.success('successfully logged out')
    window.location.replace('/')
  }

  const onFailure = (error) => {
    // TODO: log this event
    localStorage.removeItem('session')
    window.location.reload()
  }
  axiosPrivate.post('/v1/user/logout/', payload).then(onSuccess).catch(onFailure)
}

export const getLoggedInUserRoles = () => {
  var authToken = getToken()
  if (!authToken) {
    return
  }

  var decodedToken = jwt_decode(authToken)
  return decodedToken.permissions
}

export const getToken = () => {
  const session = JSON.parse(localStorage.getItem('session'))
  if (session?.access) {
    return session.access
  }

  return false
}

export const getUserUid = () => {
  var authToken = getToken()
  if (!authToken) {
    return
  }

  var decodedToken = jwt_decode(authToken)
  return decodedToken.user_uid
}

export const checkAccess = (permittedRoles, userRoles) => {
  return permittedRoles.some((v) => userRoles.includes(v))
}
