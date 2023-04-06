import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBank, cilChartLine, cilUser } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Bonds',
    to: '/bonds/all_bonds',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'My Bonds',
    to: '/bonds/my_bonds',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

export default _nav
