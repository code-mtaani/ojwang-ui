import React from 'react'
import { CCol, CCard, CCardBody, CButton } from '@coreui/react'

const DevelopersCard = () => {
  const handleLinkClicked = (link) => {
    //TODO: return callback
  }
  const developers = [] //TODO: get developrs from API
  return (
    <>
      {developers.map((developer) => (
        <CCol md={4} className="mb-4" key={post.id}>
          <CCard className="h-100">
            <CCardBody>
              <h5
                className="card-title mb-3 text-center"
                style={{ fontSize: '22px', fontWeight: 'bold' }}
              >
                {developer.name}
              </h5>
              <p className="card-text text-center" style={{ fontSize: '18px' }}>
                {post.excerpt}
              </p>
              <CButton
                color="primary"
                block
                style={{ fontSize: '18px' }}
                onClick={handlePostClick(post.id)}
              >
                Read More
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </>
  )
}
