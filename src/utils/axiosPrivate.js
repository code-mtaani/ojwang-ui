import axios from 'axios'

import { memoizedRefreshToken } from './refreshToken'

axios.defaults.baseURL = 'http://localhost:8900/api'

axios.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(localStorage.getItem('session'))

    if (session?.access) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${session?.access}`,
      }
    }

    return config
  },
  (error) => Promise.reject(error),
)

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true

      const result = await memoizedRefreshToken()

      if (result?.access) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.access}`,
        }
      }

      return axios(config)
    }
    return Promise.reject(error)
  },
)

export const axiosPrivate = axios
