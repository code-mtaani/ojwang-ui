import React, { useState } from 'react'
import {
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CCollapse,
  CNavItem,
  CNavLink,
  CForm,
  CFormInput,
  CButton,
  CRow,
  CCol,
} from '@coreui/react'
import { logo } from 'src/assets/brand/logo'
const NavBar = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarBrand href="#">
            <CRow>
              <CCol sm="auto"> {<img src={logo} alt="" width="22" height="24" />}</CCol>
              <CCol sm="auto">
                <h1>Ojwang</h1>
              </CCol>
            </CRow>
          </CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto mb-2 mb-lg-0">
              <CNavItem>
                <CNavLink href="#" active>
                  <h3>Home</h3>
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">
                  <h3>About</h3>
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default NavBar
