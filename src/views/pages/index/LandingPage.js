import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CNavbar,
  CImage,
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
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    //set searchQuery to input text
  }

  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleRegisterClick = () => {
    navigate('/register')
  }
  return (
    <>
      <CNavbar color="light" light expand="md" className="px-3 justify-content-center">
        <CContainer fluid>
          <CNavbarBrand>
            <h3 style={{ color: 'green' }}>Ojwang</h3>
          </CNavbarBrand>
          <CNavbarNav variant="underline">
            <CNavItem>
              <CNavLink href="/index" style={{ fontWeight: 'bold', fontSize: '24px' }}>
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
                Developers
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <div className="justify-content-end">
            <CForm className="d-flex row g-3" onSubmit={handleSearchSubmit}>
              <CCol md={6}>
                <CFormInput
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </CCol>
              <CCol md={6}>
                <CButton type="submit" color="success" variant="ghost" style={{}}>
                  Search
                </CButton>
              </CCol>
            </CForm>
          </div>
          <CDropdown>
            <CDropdownToggle caret variant="ghost">
              Get Started
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={handleLoginClick}>Login</CDropdownItem>
              <CDropdownItem onClick={handleRegisterClick}>Sign Up</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CContainer>
      </CNavbar>
      <CContainer fluid className="px-3">
        <div className="clearfix">
          <CRow className="align-items-center">
            <CCol md={4} align="start" width={200} height={200} xs={6}>
              <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Hi there</h1>
              <p style={{ fontSize: '18px' }}>
                Ojwang is a platform that lists all government bonds that are on sale, their
                portfolio and coupon payment dates.
              </p>
              <CButton color="primary" variant="outline" timeout={2000}>
                {' '}
                <h5 style={{}}>Learn more</h5>
              </CButton>
            </CCol>
            <CCol md={4} align="end" xs={4}>
              <CImage
                rounded
                align="center"
                src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg"
                width={200}
                height={200}
              />
            </CCol>
          </CRow>
        </div>
      </CContainer>
      <CContainer className="py-5">
        <hr style={{ borderTop: '1px solid #ccc', with: '20px' }} />
        <h2
          className="mb-4 text-center"
          style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}
        >
          Features
        </h2>
        <CRow>
          <CCol md={4} className="mb-4">
            <CCard style={{ width: '24rem' }}>
              <CCardImage
                orientation="top"
                src={
                  'https://media.business-review.eu/unsafe/420x250/smart/filters:contrast(5):quality(80)/business-review.eu/wp-content/uploads/2018/04/bonds.jpg'
                }
                height={200}
                width={200}
              />
              <CCardBody>
                <CCardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  {' '}
                  List of Government Bonds
                </CCardTitle>
                <CCardText>
                  View all government bonds that are currently for sale. Stay updated with the
                  latest bond offerings and make informed investment decisions.
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={4} className="mb-4">
            <CCard style={{ width: '24rem' }}>
              <CCardImage
                orientation="top"
                src={'https://www.incharge.org/wp-content/uploads/2020/07/Bond-Indices.jpg'}
                height={200}
                width={200}
              />
              <CCardBody>
                <CCardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  Coupon Payment Dates
                </CCardTitle>
                <CCardText>
                  Know the dates when you can expect coupon payments for the bonds in your
                  portfolio. Plan your finances effectively and stay on top of your bond
                  investments.
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={4} className="mb-4">
            <CCard style={{ width: '24rem' }}>
              <CCardImage
                orientation="top"
                src={
                  'https://www.howardcountymd.gov/sites/default/files/styles/image_560_x_408_/public/2021-04/Bonds.gif?itok=oU5KQd3j'
                }
                height={200}
                width={200}
              />
              <CCardBody>
                <CCardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  Detailed Analytics
                </CCardTitle>
                <CCardText>
                  Get a comprehensive analysis of your bond portfolio. Track your investment
                  performance, view historical data, and gain insights to make informed investment
                  strategies.
                </CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <hr style={{ borderTop: '1px solid #ccc', with: '20px' }} />
      </CContainer>
      <CContainer fluid>
        <h2
          className="mt-5 mb-4 text-center"
          style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}
        >
          Latest Blog Posts
        </h2>
        <BlogPost />
      </CContainer>
      <CContainer fluid className="py-5 bg-primary text-white text-center">
        <h2 className="mb-4">Ready to Get Started?</h2>
        <p className="mb-4">Sign up for an account today.</p>
        <CButton
          color="light"
          className="mb-3"
          variant="outline"
          timeout={2000}
          onClick={handleRegisterClick}
        >
          Sign Up Now
        </CButton>
      </CContainer>
      <AppFooter />
    </>
  )
}

export default LandingPage
