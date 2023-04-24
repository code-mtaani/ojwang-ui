import React from 'react'
import { CNav, CNavItem, CNavLink } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibTwitter, cibInstagram, cibLinkedinIn, cibDiscord } from '@coreui/icons'
const TopBar = () => {
  return (
    <>
      <CNav variant="pills" className="justify-content-center">
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon={cibTwitter} size="xxl" style={{ color: 'white' }} />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon={cibInstagram} size="xxl" style={{ color: 'white' }} />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon={cibLinkedinIn} size="xxl" style={{ color: 'white' }} />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon icon={cibDiscord} size="xxl" style={{ color: 'white' }} />
          </CNavLink>
        </CNavItem>
      </CNav>
    </>
  )
}

export default TopBar
