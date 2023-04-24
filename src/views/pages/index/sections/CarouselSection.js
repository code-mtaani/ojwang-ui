import React from 'react'
import { CCarousel, CCard, CCarouselItem, CCarouselCaption, CImage, CCol } from '@coreui/react'
import cardImage2 from '../../../../assets/images/cardimage2.jpg'

const Carousel = () => {
  return (
    <>
      {' '}
      <CCard style={{ height: '70vh', width: '100%' }} fluid="true">
        <CCarousel
          interval={3000}
          activeIndex={0}
          transition="crossfade"
          indicators
          touch={true}
          pause="hover"
        >
          <CCarouselItem>
            <CCol md={12} sm={8}>
              <CImage
                className="d-block w-100 opacity-75"
                src={cardImage2}
                alt="Slide"
                style={{ height: '70vh' }}
              />
            </CCol>
            <CCol md={4} sm={2}>
              {' '}
              <CCarouselCaption className="bg-black text-center">
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'green' }}>
                  About Ojwang
                </h1>
                <p style={{ fontSize: '18px', color: 'white' }}>
                  {' '}
                  Ojwang is a platform that lists all government bonds that are on sale, their
                  portfolio and coupon payment dates.
                </p>
              </CCarouselCaption>
            </CCol>
          </CCarouselItem>
          <CCarouselItem className="align-content-center">
            <CImage
              className="d-block w-100 opacity-75"
              src={cardImage2}
              alt="slide 2"
              style={{ height: '70vh', width: '100%' }}
            />
            <CCarouselCaption className="bg-black text-center mt-4">
              <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'green' }}>Mission</h1>
              <p style={{ fontSize: '18px', color: 'white' }}>
                {' '}
                provide a comprehensive and user-friendly platform that enables investors to buy and
                sell bonds with confidence, while also fostering transparency, security,
                convenience, education, and community.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </CCard>
    </>
  )
}

export default Carousel
