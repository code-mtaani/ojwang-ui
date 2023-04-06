import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isLoggedIn } from './auth'

const PrivateRoutes = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/index" />
}

export default PrivateRoutes
