import React, { useState } from 'react'
import {
  CNavbar,
  CForm,
  CContainer,
  CFormInput,
  CNavbarBrand,
  CCol,
  CNavItem,
  CNavLink,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import Modal from './Modal'

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [visible, setVisible] = useState(false)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    //TODO:handle search
  }
  return (
    <>
      <CNavbar placement="sticky-top" style={{ background: 'White' }} expand="lg">
        <CContainer fluid>
          <CCol md={2}>
            <CNavbarBrand>
              <h3 style={{ color: 'green' }} className="mt-4">
                {' '}
                Ojwang
              </h3>
            </CNavbarBrand>
          </CCol>
          <CNavbarToggler
            aria-label="Menu"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCol md={4}>
            {' '}
            <CCollapse className="navbar-collapse ml-4 text-center" visible={visible} md={6}>
              <CNavbarNav className="text-center">
                <CNavItem>
                  <CNavLink href="#" active style={{ fontWeight: 'bold', fontSize: '24px' }}>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" style={{ fontWeight: 'bold', fontSize: '24px' }}>
                    Features
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" style={{ fontWeight: 'bold', fontSize: '24px' }}>
                    About Us
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#" style={{ fontWeight: 'bold', fontSize: '24px' }}>
                    Blogs
                  </CNavLink>
                </CNavItem>
              </CNavbarNav>
            </CCollapse>
          </CCol>

          <CForm className="d-flex row g-3" onSubmit={handleSearchSubmit}>
            <CCol md={8} sm={4} xs="auto">
              <CFormInput
                type="search"
                placeholder="Search"
                className="mr-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ color: 'black' }}
              />
            </CCol>
            <CCol xs="auto">
              <CIcon icon={cilSearch} size="xxl" onClick={handleSearchSubmit}></CIcon>
            </CCol>
          </CForm>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default NavBar
