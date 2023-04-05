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
  // {
  //   component: CNavGroup,
  //   name: 'Bonds',
  //   to: '/bonds',
  //   icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'All bonds',
  //       to: '/bonds/all_bonds',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Bonds on sale',
  //       to: '/bonds/open',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'My bonds',
  //       to: '/bonds/my_bonds',
  //     },
  //   ],
  // },
]

export default _nav
