import React from 'react'
import { CCol, CContainer, CCard, CCardBody, CCardText, CRow } from '@coreui/react'
import { AppFooter } from '../../../components'
import BlogPost from './sections/BlogSection'
import NavBar from './sections/NavBar'
import Carousel from './sections/CarouselSection'
import DevelopersCard from './sections/DevelopersSection'
import GetInTouch from './sections/GetInTouch'
import Modal from './sections/Modal'
import TopBar from './sections/TopBar'
import Features from './sections/Features'
import './styles/main.scss'

const LandingPage = () => {
  return (
    <>
      <CContainer style={{ height: '3.0em', width: '100%' }} className="bg-black" fluid>
        <CRow>
          <CCol md={12}></CCol>
          <CCol md={2}>
            {' '}
            <TopBar />
          </CCol>
        </CRow>
      </CContainer>

      <NavBar />

      <Carousel />
      <CContainer
        className="mt-2 pt-2 text-center ml-4 "
        style={{ height: '40%', width: '60%' }}
        fluid
      >
        <h2
          className="mb-4 text-center"
          style={{ fontSize: '30px', color: 'green', fontWeight: 'bold' }}
        >
          Features
        </h2>
        <Features />
      </CContainer>
      <CContainer
        fluid
        className="mt-2  bg-dark"
        style={{
          height: '65%',
          width: '100%',
        }}
      >
        <CRow>
          <CCol md={3} sm={16} className=" mt-4 ">
            <h1
              style={{ fontSize: '30px', color: 'white', fontWeight: 'bold' }}
              className="text-start"
            >
              Meet The creators
            </h1>
            <CContainer style={{ height: '50vh' }}>
              <DevelopersCard />
            </CContainer>
          </CCol>
          <CCol md={8} sm={12}>
            <CCard color="transparent" className="border-0" style={{ height: '65%' }}>
              <CCardBody className="mt-4">
                {' '}
                <h1
                  style={{ fontSize: '30px', color: 'white', fontWeight: 'bold' }}
                  className="text-center"
                >
                  Why Ojwang
                </h1>
                <p style={{ color: 'white', fontSize: '24px' }} className="text-center">
                  Ojwang has favorable bond features and terms, such as appropriate maturity periods
                  and call provisions that align with investors&apos; needs. Overall, Ojwang is a
                  reliable bond system that offers attractive investment opportunities for investors
                  seeking a balance between risk and return.
                </p>
                <br />
                <hr style={{ color: 'white' }} />
                <br />
                <h2 className="text-center" style={{ color: 'white', fontWeight: 'bold' }}>
                  Follow Us
                </h2>
                <br />
                <TopBar />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
      <hr style={{ color: 'white' }} />
      <GetInTouch />

      <CCard className="text-blue  border-0 bg-light opacity-75" style={{ height: '60%' }}>
        <CCardBody>
          <CContainer>
            <CRow>
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
      </CCard>
      <AppFooter />
    </>
  )
}

export default LandingPage
