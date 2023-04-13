import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCol,
  CContainer,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardImageOverlay,
  CRow,
} from '@coreui/react'
import { AppFooter } from '../../../components'
import BlogPost from './sections/BlogSection'
import NavBar from './sections/NavBar'
import Carousel from './sections/CarouselSection'
import DevelopersCard from './sections/DevelopersSection'

const LandingPage = () => {
  const navigate = useNavigate()

  const handleRegisterClick = () => {
    navigate('/register')
  }
  return (
    <>
      <CContainer fluid>
        <NavBar />
      </CContainer>

      <Carousel />

      <CContainer className="mt-2 pt-2 " fluid>
        <h2
          className="mb-4 text-center"
          style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}
        >
          Features
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
      <CContainer fluid className="mt-2 pt-2">
        <CRow>
          <CCol md={4} xs={8}>
            <h1 style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}>Developers</h1>
            <DevelopersCard />
          </CCol>
          <CCol>
            <CCard color="white border-white" style={{ height: '65vh' }}></CCard>
          </CCol>
        </CRow>
      </CContainer>
      <CCard className="bg-dark text-blue mt-4 border-0" color="light" style={{ height: '60vh' }}>
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
                    <CContainer>
                      <p
                        className="mb-2 mt-5"
                        style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}
                      >
                        Sign up for an account today.
                      </p>
                    </CContainer>
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
