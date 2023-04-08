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
  CCarousel,
  CCarouselItem,
  CCardTitle,
  CCardText,
  CNavbar,
  CCardImageOverlay,
  CNavbarBrand,
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
      <CNavbar
        expand="md"
        className="justify-content-center"
        placement="sticky-top"
        style={{ background: 'White' }}
      >
        <CContainer fluid>
          <CNavbarBrand>
            <h3 style={{ color: 'green' }}>Ojwang</h3>
          </CNavbarBrand>
          <div className="justify-content-center">
            <CForm className="d-flex row g-3" onSubmit={handleSearchSubmit}>
              <CCol md={6}>
                <CFormInput
                  type="search"
                  placeholder="search"
                  className="mr-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </CCol>
              <CCol md={6}>
                <CButton type="submit" color="success" variant="outline" style={{ color: 'green' }}>
                  Submit
                </CButton>
              </CCol>
            </CForm>
          </div>
          <CDropdown style={{ color: 'green' }}>
            <CDropdownToggle caret variant="ghost">
              Account
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={handleLoginClick}>Login</CDropdownItem>
              <CDropdownItem onClick={handleRegisterClick}>Sign Up</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CContainer>
      </CNavbar>
      <CCarousel
        interval={2500}
        pause
        controls
        dark
        style={{ height: '65vh', margin: '20px' }}
        transition="crossfade"
      >
        <CCarouselItem>
          <CContainer md className="mt-2 pt-2">
            <div className="clearfix row justify-content-md-center">
              <CRow className="align-items-center" xs={{ gutterX: 5 }}>
                <CCol md={4} sm="auto" align="start" width={200} height={200} xs={6}>
                  <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>About Ojwang</h1>
                  <p style={{ fontSize: '18px' }}>
                    {' '}
                    Ojwang is a platform that lists all government bonds that are on sale, their
                    portfolio and coupon payment dates.
                  </p>
                </CCol>
                <CCol md={8} xs={8} sm="auto">
                  <CCard className=" bg-dark text-white border border-0">
                    <CCardImage
                      src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg"
                      height={500}
                      width={900}
                    />
                  </CCard>
                </CCol>
              </CRow>
            </div>
          </CContainer>
        </CCarouselItem>
        <CCarouselItem>
          <CContainer md className="mt-2 pt-2">
            <div className="clearfix row justify-content-md-center">
              <CRow className="align-items-center" xs={{ gutterX: 5 }}>
                <CCol md={8} xs={8} sm="auto" align="start">
                  <CCard className=" bg-dark text-white border border-0">
                    <CCardImage
                      src="https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/benefits-of-event-sponsorship-feature-image-1366x768.jpg"
                      height={500}
                      width={900}
                    />
                  </CCard>
                </CCol>{' '}
                <CCol md={4} sm="auto" align="start" width={200} height={200} xs={6}>
                  <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Sponsors</h1>
                  <p style={{ fontSize: '18px' }}>
                    We welcome all forms of sponsorship to support our organization. Whether it is
                    financial support, in-kind contributions, or partnerships, we are open to
                    exploring opportunities that align with our mission and values. we would be
                    happy to discuss potential opportunities.
                  </p>
                </CCol>
              </CRow>
            </div>
          </CContainer>
        </CCarouselItem>
        <CCarouselItem>
          <CContainer md className="mt-2 pt-2">
            <div className="clearfix row justify-content-md-center">
              <CRow className="align-items-center" xs={{ gutterX: 5 }}>
                <CCol md={4} sm="auto" align="start" width={200} height={200} xs={6}>
                  <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Developers</h1>
                  <p style={{ fontSize: '18px' }}>
                    {' '}
                    Our developers are working round the clock to make sure customer&apos;s
                    satisfaction
                  </p>
                </CCol>
                <CCol md={8} xs={8} sm="auto">
                  <CCard className=" bg-dark text-white border border-0">
                    <CCardImage
                      src="https://lvivity.com/wp-content/uploads/2019/11/hire-team.jpg"
                      height={500}
                      width={900}
                    />
                  </CCard>
                </CCol>
              </CRow>
            </div>
          </CContainer>
        </CCarouselItem>
      </CCarousel>

      <CContainer className="mt-2 pt-2 " fluid>
        <hr style={{ borderTop: '1px solid #ccc', with: '20px' }} />
        <h2
          className="mb-4 text-center"
          style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}
        >
          Attributes
        </h2>
        <div className={'justify-content-center'}>
          <CRow className={' g-3 text-center mt-3 pt-3 start-2 '}>
            <CCol md={2}></CCol>
            <CCol md={3} className="mb-4">
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
            <CCol md={3} className="mb-4">
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
        </div>

        <hr style={{ borderTop: '1px solid #ccc', with: '20px' }} />
      </CContainer>
      <CCard className="bg-dark text-blue border border-0">
        <CCardImage
          src="https://equito.co/app/uploads/2022/07/Equito-How-to-analyze-a-stock-808x440.jpg"
          height={500}
          width={900}
        />
        <CCardImageOverlay className={'text-center tp-10'}>
          <CCardText>
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="mb-4">Sign up for an account today.</p>
          </CCardText>
          <CCardText>
            <CButton
              color="light"
              className="mb-3"
              variant="outline"
              timeout={2000}
              onClick={handleRegisterClick}
            >
              Sign Up Now
            </CButton>
          </CCardText>
        </CCardImageOverlay>
      </CCard>
      <CContainer fluid>
        <h2
          className="mt-5 mb-4 text-center"
          style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}
        >
          Latest Blog Posts
        </h2>
        <BlogPost />
      </CContainer>
      <AppFooter />
    </>
  )
}

export default LandingPage
