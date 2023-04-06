import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import { CButton } from '@coreui/react'
import ComponentRBAC from 'src/utils/ComponentRBAC'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import CIcon from '@coreui/icons-react'
import { cilMinus } from '@coreui/icons'
import AddBondToPortfolioForm from '../bonds/AddBondToPortfolioForm'
import { currencyFormatter, dateFormatter } from 'src/utils/common'

export default function UserBondsTable(props) {
  const [modal, setModal] = React.useState(false)
  // const [userBondsList] = React.useState(new Array(props.userBondsList))
  const [addToPortfolioModal, setAddToPortfolioModal] = React.useState(false)
  const [editBond, setEditBond] = React.useState('')

  const toggle = () => setModal(!modal)
  const addToPortfoliotoggle = () => setAddToPortfolioModal(!addToPortfolioModal)
  const renderDetailsButton = (params) => {
    return (
      <>
        <ComponentRBAC allowedRoles={['admin']}>
          <CButton
            variant="outline"
            color="primary"
            size="sm"
            onClick={() => {
              setEditBond(params.row)
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
            color={'danger'}
            size="sm"
            disabled={true}
            onClick={() => {
              setEditBond(params.row)
              addToPortfoliotoggle()
            }}
          >
            <CIcon icon={cilMinus} />
            Portfolio
          </CButton>
        </ComponentRBAC>
      </>
    )
  }

  const columns = [
    { field: 'issue', headerName: 'Issue', flex: 1, minWidth: 130 },
    { field: 'value_date', headerName: 'Value Date', flex: 1, minWidth: 130 },
    // { field: 'issuer', headerName: 'Issuer', flex: 1.5, minWidth: 200 },
    // { field: 'type', headerName: 'Type', flex: 1, minWidth: 130 },
    { field: 'dirty_price', headerName: 'Dirty Price', flex: 1, minWidth: 130 },
    { field: 'face_value', headerName: 'Face Value', flex: 1, minWidth: 130 },
    { field: 'redemption_date', headerName: 'Redemption Date', flex: 1, minWidth: 130 },
    // { field: 'amount', headerName: 'Amount', flex: 1, minWidth: 130 },
    { field: 'coupon_rate', headerName: 'Coupon Rate', flex: 1, minWidth: 100 },
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

  const bonds = Array.from(props.userBonds)

  let rows = []

  bonds.forEach(function (bond) {
    rows.push({
      id: bond.uid,
      issue: bond.bond.issue,
      issuer: bond.issuer,
      type: bond.type,
      price_quote: bond.price_quote,
      value_date: dateFormatter.format(new Date(bond.bond.value_date)),
      value_date_raw: bond.bond.value_date,
      initial_coupon_payment_date: bond.initial_coupon_payment_date,
      redemption_date: dateFormatter.format(new Date(bond.bond.redemption_date)),
      amount: bond.amount,
      dirty_price: currencyFormatter.format(bond.dirty_price),
      dirty_price_raw: bond.dirty_price,
      face_value: currencyFormatter.format(bond.face_value),
      face_value_raw: bond.face_value,
      coupon_rate: bond.coupon_rate + '%',
      coupon_rate_raw: bond.coupon_rate,
      tax_rate: bond.tax_rate,
      tenor: bond.tenor,
      maturity: bond.maturity,
      coupon_payment_dates: bond.coupon_payment_dates,
      sale_date_start: bond.sale_date_start,
      sale_date_end: bond.sale_date_end,
    })
  })

  return (
    <>
      <div>
        <Modal backdrop={'static'} isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit {editBond.issue} in portfolio</ModalHeader>
          <ModalBody>
            <AddBondToPortfolioForm
              onSave={props.onSave}
              toggle={toggle}
              {...editBond}
            ></AddBondToPortfolioForm>
          </ModalBody>
        </Modal>
      </div>
      <div>
        <Modal backdrop={'static'} isOpen={addToPortfolioModal} toggle={addToPortfoliotoggle}>
          <ModalHeader toggle={addToPortfoliotoggle}>
            Add {editBond.issue} to your portfolio
          </ModalHeader>
          <ModalBody>
            <AddBondToPortfolioForm
              onSave={props.onSave}
              toggle={addToPortfoliotoggle}
              {...editBond}
            ></AddBondToPortfolioForm>
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

UserBondsTable.propTypes = {
  bonds: PropTypes.any,
  onSave: PropTypes.func,
  userBondsList: PropTypes.array,
  userBonds: PropTypes.any,
}
