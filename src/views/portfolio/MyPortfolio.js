import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { axiosPrivate } from 'src/utils/axiosPrivate'
import UserBondsTable from './UserBondsTable'

const MyPortfolio = () => {
  const [bonds, setBonds] = useState({})
  const [userBondsList, setUserBondsList] = useState()
  const [userBonds, setUserBonds] = useState({})

  const fetchBonds = () => {
    axiosPrivate.get('v1/bond/').then((response) => {
      setBonds(response.data)
    })
  }

  const fetchUserBonds = () => {
    axiosPrivate.get('v1/user_bond/').then((response) => {
      setUserBonds(response.data)
      let bondList = []

      response.data.forEach((user_bond) => {
        bondList.push(user_bond.bond_uid)
      })
      setUserBondsList(bondList)
    })
  }

  const addBondToPortfolioHandler = () => {
    fetchUserBonds()
  }

  useEffect(() => {
    fetchBonds()
  }, [setBonds])

  useEffect(() => {
    fetchUserBonds()
  }, [setUserBonds])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <span className="float-start">
                {/* <CButton onClick={toggle} size="sm" color="success">
                  <CIcon icon={cilPlus} size="sm" />
                  Add new bond
                </CButton> */}
                <span>
                  <strong>Portfolio Bonds</strong>
                </span>
              </span>
            </CCardHeader>
            <CCardBody>
              <UserBondsTable
                userBonds={userBonds}
                userBondsList={userBondsList}
                onSave={addBondToPortfolioHandler}
                bonds={bonds}
              ></UserBondsTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MyPortfolio
