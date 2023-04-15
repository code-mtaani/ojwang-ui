import React from 'react'
import {
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
import GetInTouch from './sections/GetInTouch'
import Modal from './sections/Modal'
import TopBar from './sections/TopBar'

const LandingPage = () => {
  return (
    <>
      <div style={{ height: '2.5em' }} className="bg-white">
        <TopBar />
      </div>
      <NavBar />

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
      <CContainer
        fluid
        className="mt-2  bg-dark"
        style={{
          height: '65vh',
        }}
      >
        <CRow>
          <CCol md={4} xs={8} className="mb-4 mt-4 ml-4 mr-4">
            <h1
              style={{ fontSize: '30px', color: 'white', fontWeight: 'bold' }}
              className="text-start"
            >
              Meet The creators
            </h1>
            <DevelopersCard />
          </CCol>
          <CCol md={8} xs={4}>
            <CContainer className="m-4">
              {' '}
              <h1
                style={{ fontSize: '30px', color: 'white', fontWeight: 'bold' }}
                className="text-center"
              >
                Why Ojwang
              </h1>
              <p style={{ color: 'white', fontSize: '24px' }} className="m-4 text-start ">
                Ojwang is a bond system that offers several favorable characteristics to potential
                investors. Ojwang also offers competitive yields and return potential, which are
                carefully assessed in relation to the risks involved, taking into account the
                company&apos;s robust financial health and stable industry outlook. Moreover, Ojwang
                provides diversification benefits, as it is part of a well-diversified investment
                portfolio, spreading risks across different issuers, industries, and regions.
                Additionally, Ojwang has favorable bond features and terms, such as appropriate
                maturity periods and call provisions that align with investors&apos; needs. Overall,
                Ojwang is a reliable bond system that offers attractive investment opportunities for
                investors seeking a balance between risk and return.
              </p>
            </CContainer>
          </CCol>
        </CRow>
      </CContainer>
      <GetInTouch />
      <CCard className="text-blue  border-0 bg-light opacity-75" style={{ height: '60vh' }}>
        <CCardImageOverlay className={'tp-10'}>
          <CCardBody>
            <CContainer>
              <CRow xs={{ cols: 1 }}>
                <CCol md={4} sm={8}>
                  {' '}
                  <CCardText style={{}}>
                    <h2 className="mt-5 mb-4" style={{ fontSize: '30px', fontWeight: 'bold' }}>
                      Ready to Get Started?
                    </h2>
                    <CContainer>
                      <p className="mb-2 mt-5" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                        Sign up for an account today.
                      </p>
                    </CContainer>
                  </CCardText>
                  <CCardText>
                    <Modal />
                  </CCardText>
                </CCol>
                <CCol md={8} sm={4}>
                  {' '}
                  <h2
                    className="mt-5 mb-4"
                    style={{ fontSize: '30px', color: 'dark', fontWeight: 'bold' }}
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
