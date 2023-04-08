import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Bonds = React.lazy(() => import('./views/bonds/AllBonds'))
const OpenBonds = React.lazy(() => import('./views/bonds/OpenBonds'))
const MyPortfolio = React.lazy(() => import('./views/portfolio/MyPortfolio'))

const UserProfile = React.lazy(() => import('./views/user/Profile'))
const UserSettings = React.lazy(() => import('./views/user/Settings'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/bonds/all_bonds', name: 'Bonds', element: Bonds },
  { path: '/bonds/open', name: 'Bonds on sale', element: OpenBonds },
  { path: '/portfolio', name: 'My portfolio', element: MyPortfolio },
  { path: '/user/profile', name: 'User profile', element: UserProfile },
  { path: '/user/settings', name: 'User settings', element: UserSettings },
]

export default routes
