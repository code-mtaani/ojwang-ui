import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { axiosPrivate } from 'src/utils/axiosPrivate'
import MandatesTable from './MandatesTable'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import MandatesForm from './MandatesForm'
import ComponentRBAC from 'src/utils/ComponentRBAC'
import { checkAccess, getLoggedInUserRoles } from 'src/utils/auth'

const Mandates = () => {
  const [mandates, setMandates] = useState({})
  const [userMandates, setUserMandates] = useState({})
  const [modal, setModal] = React.useState(false)
  const toggle = () => setModal(!modal)

  const fetchMandates = () => {
    if (checkAccess(getLoggedInUserRoles(), ['admin'])) {
      axiosPrivate.get('v1/mandate/').then((response) => {
        setMandates(response.data)
      })
    }
  }

  const fetchUserMandates = () => {
    axiosPrivate.get('v1/mandate/user/').then((response) => {
      setUserMandates(response.data)
    })
  }

  const saveCompleteHandler = () => {
    toggle()
    fetchMandates()
  }

  const addMandateToPortfolioHandler = () => {
    fetchUserMandates()
  }

  useEffect(() => {
    fetchMandates()
  }, [setMandates])

  useEffect(() => {
    fetchUserMandates()
  }, [setUserMandates])

  return (
    <>
      <div>
        <Modal backdrop={'static'} isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>New Mandate</ModalHeader>
          <ModalBody>
            <MandatesForm onSave={saveCompleteHandler} toggle={toggle}></MandatesForm>
          </ModalBody>
        </Modal>
      </div>
      <CRow>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <span className="float-start">
                <strong>My Mandates</strong>
              </span>
            </CCardHeader>
            <CCardBody>
              <MandatesTable onSave={null} mandates={userMandates}></MandatesTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <div>
        <br></br>
        <ComponentRBAC allowedRoles={['admin']}>
          <CRow>
            <CCol xs={12}>
              <CCard>
                <CCardHeader>
                  <span className="float-start">
                    <strong>All Mandates</strong>
                  </span>
                  <ComponentRBAC allowedRoles={['admin']}>
                    <span className="float-end">
                      <CButton onClick={toggle} size="sm" color="success">
                        <CIcon icon={cilPlus} size="sm" />
                        Add new mandate
                      </CButton>
                    </span>
                  </ComponentRBAC>
                </CCardHeader>
                <CCardBody>
                  <MandatesTable
                    onSave={addMandateToPortfolioHandler}
                    mandates={mandates}
                  ></MandatesTable>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </ComponentRBAC>
      </div>
    </>
  )
}

export default Mandates
