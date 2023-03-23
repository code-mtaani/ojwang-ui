import jwt_decode from 'jwt-decode'
import { getToken } from './getToken'

const accessToken = getToken()
// get user id from token and return it

export const userUid = () => {
  const decodedToken = jwt_decode(accessToken)
  const uid = decodedToken?.user_uid
  return uid
}
