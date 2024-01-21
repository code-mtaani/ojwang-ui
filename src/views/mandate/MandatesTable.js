import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import { CButton } from '@coreui/react'
import ComponentRBAC from 'src/utils/ComponentRBAC'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import MandatesForm from './MandatesForm'
import CIcon from '@coreui/icons-react'
import { cilMinus, cilPlus } from '@coreui/icons'
import AddMandateToPortfolioForm from './AddMandateToPortfolioForm'

export default function MandatesTable(props) {
  const [modal, setModal] = React.useState(false)
  // const [userMandatesList] = React.useState(new Array(props.userMandatesList))
  const [addToPortfolioModal, setAddToPortfolioModal] = React.useState(false)
  const [editMandate, setEditMandate] = React.useState('')

  const toggle = () => setModal(!modal)
  const addToPortfoliotoggle = () => setAddToPortfolioModal(!addToPortfolioModal)
  const renderDetailsButton = (params) => {
    let mandateInPortfolio = props.userMandatesList
      ? props.userMandatesList.includes(params.row.id)
      : false
    return (
      <>
        <ComponentRBAC allowedRoles={['admin']}>
          <CButton
            variant="outline"
            color="primary"
            size="sm"
            onClick={() => {
              setEditMandate(params.row)
              toggle()
            }}
          >
            Edit
          </CButton>
        </ComponentRBAC>
        <ComponentRBAC allowedRoles={['admin', 'member']}>
          <CButton
            className="mx-1"
            variant="outline"
            color={'success'}
            size="sm"
            disabled={mandateInPortfolio}
            onClick={() => {
              setEditMandate(params.row)
              addToPortfoliotoggle()
            }}
          >
            <CIcon icon={mandateInPortfolio ? cilMinus : cilPlus} />
            Portfolio
          </CButton>
        </ComponentRBAC>
      </>
    )
  }

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 130 },
    { field: 'start_date', headerName: 'Start Date', flex: 1, minWidth: 130 },
    { field: 'end_date', headerName: 'End Date', flex: 1, minWidth: 130 },
    // { field: 'issuer', headerName: 'Issuer', flex: 1.5, minWidth: 200 },
    { field: 'type', headerName: 'Type', flex: 1, minWidth: 130 },
    { field: 'status', headerName: 'Status', flex: 1, minWidth: 130 },
    { field: 'frequency', headerName: 'Frequency', flex: 1, minWidth: 130 },
    // { field: 'amount', headerName: 'Amount', flex: 1, minWidth: 130 },
    { field: 'amount', headerName: 'Amount', flex: 1, minWidth: 100 },
    // { field: 'tax_rate', headerName: 'Tax Rate', flex: 1, minWidth: 70 },
    // { field: 'tenor', headerName: 'Tenor', flex: 1, minWidth: 70 },
    // { field: 'maturity', headerName: 'Maturity', flex: 1, minWidth: 100 },
    {
      field: 'action',
      flex: 1,
      minWidth: 130,
      headerName: 'Action',
      sortable: false,
      renderCell: renderDetailsButton,
    },
  ]

  const mandates = Array.from(props.mandates)

  let rows = []

  mandates.forEach(function (mandate) {
    rows.push({
      uid: mandate.uid,
      id: mandate.uid,
      name: mandate.name,
      chama_id: mandate.chama_id,
      type: mandate.type,
      description: mandate.description,
      status: mandate.status,
      frequency: mandate.frequency,
      start_date: mandate.start_date,
      end_date: mandate.end_date,
      next_run_date: mandate.next_run_date,
      created_at: mandate.created_at,
      amount: mandate.amount,
    })
  })

  return (
    <>
      <div>
        <Modal backdrop={'static'} isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>New Mandate</ModalHeader>
          <ModalBody>
            <MandatesForm onSave={props.onSave} toggle={toggle} {...editMandate}></MandatesForm>
          </ModalBody>
        </Modal>
      </div>
      <div>
        <Modal backdrop={'static'} isOpen={addToPortfolioModal} toggle={addToPortfoliotoggle}>
          <ModalHeader toggle={addToPortfoliotoggle}>
            Add {editMandate.issue} to your portfolio
          </ModalHeader>
          <ModalBody>
            <AddMandateToPortfolioForm
              onSave={props.onSave}
              toggle={addToPortfoliotoggle}
              {...editMandate}
            ></AddMandateToPortfolioForm>
          </ModalBody>
        </Modal>
      </div>
      <DataGrid
        sx={{ border: 0 }}
        css={styled}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        rowsPerPageOptions={[5]}
        autoHeight={true}
        pageSizeOptions={[5, 10, 25, 100]}
        pagination
      />
    </>
  )
}

MandatesTable.propTypes = {
  mandates: PropTypes.any,
  onSave: PropTypes.func,
  userMandatesList: PropTypes.array,
  userMandates: PropTypes.any,
}
