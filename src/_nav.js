import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilMoney, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Bonds',
    to: '/bonds',
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All bonds',
        to: '/bonds/all_bonds',
      },
      {
        component: CNavItem,
        name: 'Bonds on sale',
        to: '/bonds/open',
      },
      {
        component: CNavItem,
        name: 'My bonds',
        to: '/bonds/my_bonds',
      },
    ],
  },
]

export default _nav
