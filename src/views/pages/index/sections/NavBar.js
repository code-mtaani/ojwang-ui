import React, { useState } from 'react'
import { CNavbar, CForm, CContainer, CFormInput, CNavbarBrand, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'
import Modal from './Modal'

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    //TODO:handle search
  }
  return (
    <>
      <CNavbar
        className="justify-content-center"
        placement="sticky-top"
        style={{ background: 'White' }}
      >
        <CContainer fluid>
          <CNavbarBrand>
            <h3 style={{ color: 'green' }}>Ojwang</h3>
          </CNavbarBrand>
          <div style={{ width: '35%' }}>
            <CContainer fluid>
              <CForm className="d-flex row g-3" onSubmit={handleSearchSubmit}>
                <CCol md={9} sm={4} xs="auto">
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
          </div>
          <Modal />
        </CContainer>
      </CNavbar>
    </>
  )
}

export default NavBar
