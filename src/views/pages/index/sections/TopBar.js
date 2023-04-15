import React from 'react'
import { CRow, CCol, CNav, CNavItem, CNavLink } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibTwitter, cibInstagram, cibLinkedinIn, cibDiscord } from '@coreui/icons'
const TopBar = () => {
  return (
    <>
      <CRow className="mt-4">
        <CCol md={8} sm={4}></CCol>
        <CCol md={4} sm={8} style={{ color: 'green' }} className="justify-content-space-between">
          <CNav variant="pills" layout="fill">
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cibTwitter} size="xxl" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cibInstagram} size="xxl" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cibLinkedinIn} size="xxl" />
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">
                <CIcon icon={cibDiscord} size="xxl" />
              </CNavLink>
            </CNavItem>
          </CNav>
        </CCol>
      </CRow>
    </>
  )
}

export default TopBar
