import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCol,
  CContainer,
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
import Modal from './sections/Modal'
import BlogPost from './sections/BlogSection'
import cardImage1 from '../../../assets/images/cardimage1.jpg'
import CIcon from '@coreui/icons-react'
import { cilSearch } from '@coreui/icons'

const LandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    //set searchQuery to input text
  }
  const handleRegisterClick = () => {
    navigate('/register')
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

      <CCarousel
        interval={3000}
        pause
        wrap
        activeIndex={0}
        dark
        indicators
        transition="crossfade"
        style={{ height: '68vh', margin: '20px' }}
      >
        <CCarouselItem>
          <CContainer md className="mt-2 pt-2">
            <div className="clearfix row justify-content-md-center">
              <CRow className="align-items-center" xs={{ gutterX: 5 }}>
                <CCol md={4} sm={8} align="start" width={200} height={200} xs={6}>
                  <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'green' }}>
                    About Ojwang
                  </h1>
                  <p style={{ fontSize: '18px' }}>
                    {' '}
                    Ojwang is a platform that lists all government bonds that are on sale, their
                    portfolio and coupon payment dates.
                  </p>
                </CCol>
                <CCol md={8} xs={8} sm={8}>
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
                <CCol md={8} xs={8} sm={8} align="start">
                  <CCard className=" bg-dark text-white border border-0">
                    <CCardImage
                      src="https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/benefits-of-event-sponsorship-feature-image-1366x768.jpg"
                      height={500}
                      width={900}
                    />
                  </CCard>
                </CCol>{' '}
                <CCol md={4} sm={8} align="start" width={200} height={200} xs={6}>
                  <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'green' }}>Mission</h1>
                  <p style={{ fontSize: '18px' }}>
                    provide a comprehensive and user-friendly platform that enables investors to buy
                    and sell bonds with confidence, while also fostering transparency, security,
                    convenience, education, and community.
                  </p>
                </CCol>
              </CRow>
            </div>
          </CContainer>
        </CCarouselItem>
      </CCarousel>
      <CContainer className="mt-2 pt-2 " fluid>
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
      </CContainer>
      <CCard className="bg-dark text-blue border-0">
        <CCardImage src={cardImage1} height={500} width={900} />
        <CCardImageOverlay className={'tp-10'}>
          <CCardBody color="grey">
            <CContainer>
              <CRow xs={{ cols: 1 }}>
                <CCol md={4} sm={2}>
                  {' '}
                  <CCardText style={{}}>
                    <h2
                      className="mt-5 mb-4"
                      style={{ color: 'white', fontSize: '30px', fontWeight: 'bold' }}
                    >
                      Ready to Get Started?
                    </h2>
                    <p
                      className="mb-2 mt-5"
                      style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}
                    >
                      Sign up for an account today.
                    </p>
                  </CCardText>
                  <CCardText>
                    <CButton
                      color="success"
                      shape="rounded-3"
                      variant="outline"
                      className="mb-2 mt-5"
                      onClick={handleRegisterClick}
                      style={{ color: 'white', fontWeight: 'bold' }}
                    >
                      Sign Up Now
                    </CButton>
                  </CCardText>
                </CCol>
                <CCol md={8} sm={4}>
                  {' '}
                  <h2
                    className="mt-5 mb-4"
                    style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}
                  >
                    Latest Blog Posts
                  </h2>
                  <BlogPost />
                </CCol>
              </CRow>
            </CContainer>
          </CCardBody>
        </CCardImageOverlay>
      </CCard>
      <AppFooter />
    </>
  )
}

export default LandingPage
