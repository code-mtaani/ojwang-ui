import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { axiosPrivate } from 'src/utils/axiosPrivate'
import BondsTable from './BondsTable'

const Bonds = () => {
  const [bonds, setBonds] = useState({})

  const fetchBonds = () => {
    axiosPrivate.get('v1/bond/').then((response) => {
      setBonds(response.data)
    })
  }

  useEffect(() => {
    fetchBonds()
  }, [setBonds])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <span className="float-end">
                <CButton size="sm" color="success">
                  <CIcon icon={cilPlus} size="sm" />
                  Add new bond
                </CButton>
              </span>
            </CCardHeader>
            <CCardBody>
              {/* <CCardTitle>Bonds</CCardTitle> */}
              <BondsTable bonds={bonds}></BondsTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Bonds
