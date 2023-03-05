import axios from 'axios'

export const axiosPublic = axios.create({
  baseURL:
    process.env.REACT_APP_OJWANG_API_HTTP_SCHEME +
    '://' +
    process.env.REACT_APP_OJWANG_API_BASE_URL +
    '/api',

  headers: {
    'Content-Type': 'application/json',
  },
})
