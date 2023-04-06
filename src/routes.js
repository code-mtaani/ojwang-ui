import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Bonds = React.lazy(() => import('./views/bonds/AllBonds'))
const OpenBonds = React.lazy(() => import('./views/bonds/OpenBonds'))
const MyBonds = React.lazy(() => import('./views/bonds/MyBonds'))

const UserProfile = React.lazy(() => import('./views/user/Profile'))
const UserSettings = React.lazy(() => import('./views/user/Settings'))
const LandingPage = React.lazy(() => import('./views/pages/index/LandingPage'))

const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/index', name: 'Landing Page', element: LandingPage },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/bonds/all_bonds', name: 'Bonds', element: Bonds },
  { path: '/bonds/open', name: 'Bonds on sale', element: OpenBonds },
  { path: '/bonds/my_bonds', name: 'My bonds', element: MyBonds },
  { path: '/user/profile', name: 'User profile', element: UserProfile },
  { path: '/user/settings', name: 'User settings', element: UserSettings },
]

export default routes
