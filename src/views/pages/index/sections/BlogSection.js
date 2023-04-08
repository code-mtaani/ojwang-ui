import React from 'react'
import { CCol, CCard, CCardBody, CButton } from '@coreui/react'

const BlogPost = () => {
  const handlePostClick = (postId) => {
    //return post with the post Id
  }
  const blogData = [] //!TODO: get blog data from API
  return (
    <>
      {blogData.map((post) => (
        <CCol md={4} className="mb-4" key={post.id}>
          <CCard className="h-100">
            <CCardBody>
              <h5
                className="card-title mb-3 text-center"
                style={{ fontSize: '22px', fontWeight: 'bold' }}
              >
                {post.title}
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

export default BlogPost
