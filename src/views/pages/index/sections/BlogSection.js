import React from 'react'
import { CListGroup, CListGroupItem } from '@coreui/react'

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
      datePosted: Date.now(),
    },
    {
      id: '2',
      image:
        'https://assets-global.website-files.com/6038c1030be2580db46ccf46/6203dc33d98625c9de52a1c9_goverment%20bonds%20kenya.jpg',
      title: 'New bond Alert',
      summary: 'Government releases new bond',
      category: 'Finance',
      datePosted: Date.now(),
    },
    {
      id: '3',
      image:
        'https://assets-global.website-files.com/6038c1030be2580db46ccf46/6203dc33d98625c9de52a1c9_goverment%20bonds%20kenya.jpg',
      title: 'New bond Alert',
      summary: 'Government releases new bond',
      category: 'Finance',
      datePosted: Date.now(),
    },
  ] //!TODO: get blog data from API
  return (
    <>
      <CListGroup flush>
        {blogData.map((blog) => (
          <CListGroupItem
            component="a"
            key={blog.id}
            color="dark"
            onClick={handlePostClick(blog.id)}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{blog.title}</h5>
              <small className="text-medium-emphasis">{blog.datePosted}</small>
            </div>
            <p className="mb-1">{blog.summary}</p>
            <small className="text-medium-emphasis">{blog.category}.</small>
          </CListGroupItem>
        ))}
      </CListGroup>
    </>
  )
}

export default BlogPost
