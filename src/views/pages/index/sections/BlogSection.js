import React from 'react'
import {
  CCol,
  CCard,
  CCardBody,
  CButton,
  CRow,
  CContainer,
  CCardFooter,
  CCardSubtitle,
  CCardLink,
  CCardTitle,
  CCardText,
} from '@coreui/react'

const BlogPost = () => {
  const handlePostClick = (postId) => {
    //return post with the post Id
  }
  const blogData = [
    {
      id: '1',
      image:
        'https://assets-global.website-files.com/6038c1030be2580db46ccf46/6203dc33d98625c9de52a1c9_goverment%20bonds%20kenya.jpg',
      title: 'New Bonds Alert',
      summary: 'Government releases new bond',
      category: 'Finance',
    },
    {
      id: '2',
      image:
        'https://assets-global.website-files.com/6038c1030be2580db46ccf46/6203dc33d98625c9de52a1c9_goverment%20bonds%20kenya.jpg',
      title: 'New bond Alert',
      summary: 'Government releases new bond',
      category: 'Finance',
    },
    {
      id: '3',
      image:
        'https://assets-global.website-files.com/6038c1030be2580db46ccf46/6203dc33d98625c9de52a1c9_goverment%20bonds%20kenya.jpg',
      title: 'New bond Alert',
      summary: 'Government releases new bond',
      category: 'Finance',
    },
  ] //!TODO: get blog data from API
  return (
    <>
      <CContainer className="mt-2 pt-2 ml-5" fluid>
        <div className={'justify-content-center'}>
          <CRow className={' g-3 text-center mt-3 pt-3 start-2 '}>
            {blogData.map((post) => (
              <CCol xs key={post.id}>
                <CCard style={{ width: '18rem' }}>
                  <CCardBody>
                    <CCardTitle>{post.title}</CCardTitle>
                    <CCardSubtitle className="mb-2 text-medium-emphasis">
                      {post.category}
                    </CCardSubtitle>
                    <CCardText>{post.summary}</CCardText>
                  </CCardBody>
                  <CCardFooter>
                    <CButton onClick={handlePostClick(post.id)}> Read More</CButton>
                    <small className="text-medium-emphasis">{post.datePosted}</small>
                  </CCardFooter>
                </CCard>
              </CCol>
            ))}
          </CRow>
        </div>
      </CContainer>
    </>
  )
}

export default BlogPost
