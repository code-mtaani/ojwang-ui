import React from 'react'
import { CCard, CCardBody, CButton, CCarousel, CCarouselItem, CCardImage } from '@coreui/react'

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
  ] //!TODO: get developrs from API
  return (
    <>
      <CCarousel
        pause="hover"
        activeIndex={1}
        touch={true}
        dark
        interval={1500}
        className="mt-4"
        style={{ width: '95%', height: '100%' }}
      >
        {' '}
        {developers.map((developer, index) => (
          <CCarouselItem key={index}>
            <CCard className="border-light md-3" style={{ width: '100%' }}>
              <CCardImage orientation="top" src={developer.image} height={150} width={200} />
              <CCardBody>
                <figure className="text-end">
                  <blockquote className="blockquote">
                    <p>{developer.name}</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    {developer.excerpt} <cite title="Source Title"></cite>
                  </figcaption>
                </figure>
                <h5
                  className="card-title mb-3 mt-2 "
                  style={{ fontSize: '22px', fontWeight: 'bold' }}
                ></h5>
                <p className="card-text" style={{ fontSize: '18px' }}></p>
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
          </CCarouselItem>
        ))}
      </CCarousel>
    </>
  )
}

export default DevelopersCard
