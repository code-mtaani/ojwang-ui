import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isLoggedIn } from './auth'

const PublicRoutes = () => {
  return !isLoggedIn() ? <Outlet /> : <Navigate to="/" />
}

export default PublicRoutes
