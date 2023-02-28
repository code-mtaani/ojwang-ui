import mem from 'mem'

import { axiosPublic } from './axiosPublic'

const refreshTokenFn = async () => {
  // const session = JSON.parse(localStorage.getItem('session'))

  try {
    let session = JSON.parse(localStorage.getItem('session'))
    const response = await axiosPublic.post('/v1/user/token-refresh', {
      refresh: session?.refresh,
    })

    session = response.data

    if (!session?.accessToken) {
      localStorage.removeItem('session')
      localStorage.removeItem('user')
    }

    localStorage.setItem('session', JSON.stringify(session))

    return session
  } catch (error) {
    localStorage.removeItem('session')
    localStorage.removeItem('user')
  }
}

const maxAge = 10000

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
})
