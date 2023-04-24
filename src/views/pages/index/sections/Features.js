import React from 'react'
import { CCard, CCol, CRow, CCardImage, CCardBody, CCardTitle, CCardText } from '@coreui/react'

const Features = () => {
  const features = [
    {
      title: 'List of Government Bonds',
      image:
        'https://media.business-review.eu/unsafe/420x250/smart/filters:contrast(5):quality(80)/business-review.eu/wp-content/uploads/2018/04/bonds.jpg',
      description:
        'View all government bonds that are currently for sale. Stay updated with the latest bond offerings and make informed investment decisions.',
    },
    {
      title: 'Coupon Payment Dates',
      image: 'https://www.incharge.org/wp-content/uploads/2020/07/Bond-Indices.jpg',
      description:
        '   Know the dates when you can expect coupon payments for the bonds in your portfolio. Plan your finances effectively and stay on top of your bond investments.',
    },
    {
      title: 'Detailed Analytics',
      image:
        'https://www.howardcountymd.gov/sites/default/files/styles/image_560_x_408_/public/2021-04/Bonds.gif?itok=oU5KQd3j',
      description:
        '  Get a comprehensive analysis of your bond portfolio. Track your investment performance, view historical data, and gain insights to make informed investment strategies.',
    },
  ]
  return (
    <>
      <CRow className={' g-3 text-center mt-3 pt-3 start-2 '}>
        {features.map((feature, index) => (
          <CCol md={4} sm={8} className="mb-4" key={index}>
            <CCard style={{ width: '100%' }}>
              <CCardImage orientation="top" src={feature.image} height="80%" width="100%" />
              <CCardBody>
                <CCardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>
                  {feature.title}{' '}
                </CCardTitle>
                <CCardText>{feature.description}</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </>
  )
}

export default Features
