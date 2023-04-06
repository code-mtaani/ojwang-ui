import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { axiosPrivate } from 'src/utils/axiosPrivate'
import BondsTable from './BondsTable'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import BondsForm from './BondsForm'

const Bonds = () => {
  const [bonds, setBonds] = useState({})
  const [userBondsList, setUserBondsList] = useState()
  const [userBonds, setUserBonds] = useState({})
  const [modal, setModal] = React.useState(false)
  const toggle = () => setModal(!modal)

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

  const saveCompleteHandler = () => {
    toggle()
    fetchBonds()
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
      <div>
        <Modal backdrop={'static'} isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>New Bond</ModalHeader>
          <ModalBody>
            <BondsForm onSave={saveCompleteHandler} toggle={toggle}></BondsForm>
          </ModalBody>
        </Modal>
      </div>
      <CRow>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <span className="float-end">
                <CButton onClick={toggle} size="sm" color="success">
                  <CIcon icon={cilPlus} size="sm" />
                  Add new bond
                </CButton>
              </span>
            </CCardHeader>
            <CCardBody>
              <BondsTable
                userBonds={userBonds}
                userBondsList={userBondsList}
                onSave={addBondToPortfolioHandler}
                bonds={bonds}
              ></BondsTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Bonds
