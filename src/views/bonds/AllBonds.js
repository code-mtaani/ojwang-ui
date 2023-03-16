import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton, CCardTitle } from '@coreui/react'
import React from 'react'
import BondsTable from './BondsTable'

const Bonds = () => {
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
              <BondsTable></BondsTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Bonds
