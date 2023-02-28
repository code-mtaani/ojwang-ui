import React, { Component } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isLoggedIn } from './auth'

const PrivateRoutes = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
