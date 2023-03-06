import PropTypes from 'prop-types'
import { getLoggedInUserRoles, checkAccess } from './auth'

const ComponentRBAC = ({ allowedRoles, children }) => {
  let userRoles = getLoggedInUserRoles()
  let access = checkAccess(userRoles, allowedRoles)
  return access && children
}

ComponentRBAC.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element,
}

export default ComponentRBAC
