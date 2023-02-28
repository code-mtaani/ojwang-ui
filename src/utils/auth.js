import { axiosPrivate } from './axiosPrivate'

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
    console.log('successfully logged out')
    window.location.reload()
  }

  const onFailure = (error) => {
    console.log('Logout request failed.' + error && error.response)
    localStorage.removeItem('session')
    window.location.reload()
  }
  axiosPrivate.post('/v1/user/logout/', payload).then(onSuccess).catch(onFailure)
}
