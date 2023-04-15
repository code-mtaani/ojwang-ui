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
    {
      id: '1',
      name: 'Drey Issessiah ',
      excerpt: 'Product Designer',
      image:
        'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=740&t=st=1681587626~exp=1681588226~hmac=d0b7e8168002fe73280f98203813e5728ad6ebd6a324cb1795b3a5eabd60b590',
    },
    {
      id: '2',
      name: 'Charles ',
      excerpt: 'Junior software engineer',
      image:
        'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=740&t=st=1681587626~exp=1681588226~hmac=d0b7e8168002fe73280f98203813e5728ad6ebd6a324cb1795b3a5eabd60b590',
    },
    {
      id: '3',
      name: 'Victor Michanga',
      excerpt: 'Code reviewer',
      image:
        'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=740&t=st=1681587626~exp=1681588226~hmac=d0b7e8168002fe73280f98203813e5728ad6ebd6a324cb1795b3a5eabd60b590',
    },
  ] //TODO: get developrs from API
  return (
    <>
      <CCarousel pause="hover" activeIndex={1} touch={true} dark interval={1500} className="mt-4">
        {' '}
        {developers.map((developer) => (
          <CCarouselItem key={developer.index} style={{ height: '55vh' }}>
            <CCol md={4} sm={2}>
              <CCard className="border-light md-3" style={{ width: '25em' }}>
                <CCardHeader>
                  {' '}
                  <CCardImage orientation="top" src={developer.image} height={200} width={200} />
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
                    className="mb-4 ml-4 mt-2 bg-light border-0"
                    style={{ width: '90%', height: '4em', color: 'green', fontWeight: 'bold' }}
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
