import React from 'react'
import {
  CCol,
  CCard,
  CCardBody,
  CButton,
  CCarousel,
  CCarouselItem,
  CCardHeader,
  CCardImage,
} from '@coreui/react'

const DevelopersCard = () => {
  const handleLinkClicked = (link) => {
    //TODO: return callback
  }
  const developers = [
    { id: '1', name: 'Clair issessiah ', excerpt: 'Product Designer', image: '' },
    { id: '2', name: 'Bildad Owuor', excerpt: 'Junior software engineer', image: '' },
    { id: '3', name: 'Victor Michanga', excerpt: 'Code reviewer', image: '' },
  ] //TODO: get developrs from API
  return (
    <>
      <CCarousel pause="hover" activeIndex={0} touch={true} dark interval={1500} className="mt-4">
        {' '}
        {developers.map((developer) => (
          <CCarouselItem key={developer.index}>
            <CCol md={4} sm={2} key={developers.length}>
              <CCard
                style={{ height: '55vh', width: '35em', minWidth: '20rem' }}
                className="border-light md-3"
              >
                <CCardHeader>
                  {' '}
                  <CCardImage orientation="top" src={developer.image} height={260} width={150} />
                </CCardHeader>
                <CCardBody>
                  <h5
                    className="card-title mb-3 mt-2 "
                    style={{ fontSize: '22px', fontWeight: 'bold' }}
                  >
                    {developer.name}
                  </h5>
                  <p className="card-text" style={{ fontSize: '18px' }}>
                    {developer.excerpt}
                  </p>
                  <CButton
                    color="primary"
                    block="true"
                    style={{ fontSize: '18px' }}
                    onClick={handleLinkClicked(developer.id)}
                  >
                    Read More
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </CCarouselItem>
        ))}
      </CCarousel>
    </>
  )
}

export default DevelopersCard
