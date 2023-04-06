import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CRow,
} from '@coreui/react'
import { AppFooter } from '../../../components'
import BlogPost from './sections/BlogSection'

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    //set searchQuery to input text
  }

  return (
    <>
      <CNavbar color="light" light expand="md" className="px-3">
        <CContainer fluid>
          <CNavbarBrand>Ojwang</CNavbarBrand>
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#">Home</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Features</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Developers</CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CForm className="d-flex" onSubmit={handleSearchSubmit}>
            <CFormInput
              type="search"
              placeholder="Search"
              className="mr-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CButton type="submit" color="primary">
              Search
            </CButton>
          </CForm>
          <CDropdown>
            <CDropdownToggle caret>Get Started</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>Individual</CDropdownItem>
              <CDropdownItem>Business</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CContainer>
      </CNavbar>
      <CContainer fluid className="px-3">
        <CRow>
          <CCol>
            <h1>Hi there</h1>
            <p>
              Ojwang is a platform that lists all government bonds that are on sale, their portfolio and coupon payment dates.

            </p>
            <CButton color="primary">Learn more</CButton>
          </CCol>

        </CRow>
      </CContainer>
      <CContainer className="py-5">
      <hr style={{borderTop: '1px solid #ccc', with: '20px'}} />
      <h2 className="mb-4 text-center" style={{fontSize: '28px', fontWeight: 'bold'}}>Features</h2>
      <CRow>
        <CCol md={4} className="mb-4">
          <h5 className="text-center mb-3" style={{fontSize: '24px'}}>List of Government Bonds</h5>
          <p className="text-center" style={{fontSize: '18px'}}>View all government bonds that are currently available for sale. Stay updated with the latest bond offerings and make informed investment decisions.</p>
        </CCol>
        <CCol md={4} className="mb-4">
          <h5 className="text-center mb-3" style={{fontSize: '24px'}}>Coupon Payment Dates</h5>
          <p className="text-center" style={{fontSize: '18px'}}>Know the dates when you can expect coupon payments for the bonds in your portfolio. Plan your finances effectively and stay on top of your bond investments.</p>
        </CCol>
        <CCol md={4} className="mb-4">
          <h5 className="text-center mb-3" style={{fontSize: '24px'}}>Detailed Analytics</h5>
          <p className="text-center" style={{fontSize: '18px'}}>Get a comprehensive analysis of your bond portfolio. Track your investment performance, view historical data, and gain insights to make informed investment strategies.</p>
        </CCol>
            </CRow>
            <hr style={{borderTop: '1px solid #ccc', with: '20px'}} />
            </CContainer>
          <CContainer fluid>
          <h2 className="mt-5 mb-4 text-center" style={{fontSize: '28px', fontWeight: 'bold'}}>Latest Blog Posts</h2>
        <BlogPost />
        </CContainer>
      <CContainer fluid className="py-5 bg-primary text-white text-center">
      <h2 className="mb-4">Ready to Get Started?</h2>
      <p className="mb-4">
        Sign up for an account today.
      </p>
      <CButton color="light" className="mb-3">Sign Up Now</CButton>
      <br />
      <small>Or <a href="#">learn more</a> about Ojwang</small>
    </CContainer>
      <AppFooter/>
    </>
  );
};

export default LandingPage