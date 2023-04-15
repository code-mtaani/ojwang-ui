import React from 'react'
import { CCarousel, CCard, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react'
import cardImage2 from '../../../../assets/images/cardimage2.jpg'

const Carousel = () => {
  return (
    <>
      {' '}
      <CCard style={{ height: '60vh' }} fluid="true" className="text-center">
        <CCarousel
          interval={3000}
          wrap
          activeIndex={0}
          color="white"
          transition="crossfade"
          indicators
          touch={true}
          pause="hover"
        >
          <CCarouselItem>
            <CImage
              className="d-block w-100 opacity-75"
              src={cardImage2}
              alt="Slide"
              style={{ height: '60vh' }}
            />
            <CCarouselCaption className="d-none d-md-block bg-black ">
              <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: 'green' }}>About Ojwang</h1>
              <p style={{ fontSize: '18px', color: 'white' }}>
                {' '}
                Ojwang is a platform that lists all government bonds that are on sale, their
                portfolio and coupon payment dates.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100 opacity-75"
              src={cardImage2}
              alt="slide 2"
              style={{ height: '60vh' }}
            />
            <CCarouselCaption className="d-none d-md-block bg-black">
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
