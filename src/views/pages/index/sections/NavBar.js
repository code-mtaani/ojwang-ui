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
  CNavbarNav,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [visible, setVisible] = useState(false)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    //TODO:handle search
  }
  return (
    <>
      <CNavbar placement="sticky-top" style={{ background: 'White' }} expand="md">
        <CContainer fluid>
          <CCol md={4} sm={8}>
            <CNavbarBrand>
              <h3 style={{ color: 'green' }} className="mt-4">
                {' '}
                Ojwang
              </h3>
            </CNavbarBrand>
          </CCol>
          <CCol md={5} sm={4} xs="auto">
            <COffcanvas
              id="offcanvasNavbar2"
              placement="end"
              portal={false}
              visible={visible}
              onHide={() => setVisible(false)}
            >
              <COffcanvasHeader>
                <COffcanvasTitle style={{ color: 'green' }}>Ojwang</COffcanvasTitle>
                <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
              </COffcanvasHeader>
              <COffcanvasBody className="text-center">
                <CNavbarNav>
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
                  <CNavItem>
                    <CForm className=" ml-4 d-flex row g-1" onSubmit={handleSearchSubmit}>
                      <CFormInput
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ color: 'black', width: '100%' }}
                      />
                    </CForm>
                  </CNavItem>
                  <CNavItem>
                    {' '}
                    <CIcon icon={cilSearch} size="xxl" onClick={handleSearchSubmit} />
                  </CNavItem>
                </CNavbarNav>
              </COffcanvasBody>
            </COffcanvas>
          </CCol>

          <CCol sm={4} className="text-start">
            <CNavbarToggler
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              onClick={() => setVisible(!visible)}
            />
          </CCol>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default NavBar
