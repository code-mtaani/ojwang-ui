import jwt_decode from 'jwt-decode'

const session = JSON.parse(localStorage.getItem('session'))
const accessToken = session.access

// get user id from token and return it

export const userUid = () => {
  const decodedToken = jwt_decode(accessToken)
  const uid = decodedToken?.user_uid
  return uid
}
