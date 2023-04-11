import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import { CButton } from '@coreui/react'
import { toast } from 'react-toastify'
import ComponentRBAC from 'src/utils/ComponentRBAC'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import CIcon from '@coreui/icons-react'
import { cilMinus } from '@coreui/icons'
import AddBondToPortfolioForm from '../bonds/AddBondToPortfolioForm'
import { currencyFormatter, dateFormatter } from 'src/utils/common'
import { axiosPrivate } from 'src/utils/axiosPrivate'

export default function UserBondsTable(props) {
  const [modal, setModal] = React.useState(false)
  const [addToPortfolioModal, setAddToPortfolioModal] = React.useState(false)
  const [editBond, setEditBond] = React.useState('')
  const [deleteUserBondModal, setDeleteUserBondModal] = React.useState(false)
  const toggleDeleteUserBondModal = () => setDeleteUserBondModal(!deleteUserBondModal)

  const toggle = () => setModal(!modal)
  const addToPortfoliotoggle = () => setAddToPortfolioModal(!addToPortfolioModal)

  const deleteUserBond = async (e) => {
    const onSuccess = ({ data }) => {
      toast.success('Successfully deleted bond from portfolio', {
        position: 'top-right',
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
      props.onSave()
      toggleDeleteUserBondModal()
    }

    const onFailure = (error) => {
      toast.error('An error occured when deleting the bond to your portfolio', {
        position: 'top-right',
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
    axiosPrivate.delete(`/v1/user_bond/${editBond.id}`).then(onSuccess).catch(onFailure)
  }

  const getNextCouponPayment = (coupon_payment_dates) => {
    var today = new Date().toLocaleDateString('fr-CA')
    coupon_payment_dates.sort()
    for (const i in coupon_payment_dates) {
      if (coupon_payment_dates[i] >= today) {
        return coupon_payment_dates[i]
      }
    }
    // return redemption date
    return coupon_payment_dates.slice(-1)
  }

  const renderDetailsButton = (params) => {
    return (
      <>
        <ComponentRBAC allowedRoles={['admin', 'member']}>
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
            disabled={false}
            onClick={() => {
              setEditBond(params.row)
              toggleDeleteUserBondModal()
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
    { field: 'dirty_price', headerName: 'Dirty Price', flex: 1, minWidth: 130 },
    { field: 'face_value', headerName: 'Face Value', flex: 1, minWidth: 130 },
    { field: 'redemption_date', headerName: 'Redemption Date', flex: 1, minWidth: 130 },
    { field: 'coupon_rate', headerName: 'Coupon Rate', flex: 1, minWidth: 100 },
    {
      field: 'next_coupon_payment_date',
      headerName: 'Next Payment Date',
      flex: 1,
      minWidth: 130,
    },
    { field: 'interest_amount', headerName: 'Interest Amount', flex: 1, minWidth: 100 },
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
    let coupon_payment_list = Object.keys(bond.coupon_payments)
    let next_coupon_payment_date = getNextCouponPayment(coupon_payment_list)
    let interest_amount = bond.coupon_payments[next_coupon_payment_date].interest_amount
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
      next_coupon_payment_date: dateFormatter.format(new Date(next_coupon_payment_date)),
      interest_amount: currencyFormatter.format(interest_amount),
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
              editOperation={true}
              {...editBond}
            ></AddBondToPortfolioForm>
          </ModalBody>
        </Modal>
        <Modal backdrop={true} isOpen={deleteUserBondModal} toggle={toggleDeleteUserBondModal}>
          <ModalHeader toggle={toggleDeleteUserBondModal}>
            Are you sure you want to delete {editBond.issue} from portfolio?
          </ModalHeader>
          {/* <ModalBody>
            <BondsForm onSave={saveCompleteHandler} toggle={toggleDeleteUserBondModal}></BondsForm>
          </ModalBody> */}
          <ModalFooter>
            <CButton color="primary" onClick={toggleDeleteUserBondModal}>
              Cancel
            </CButton>{' '}
            <CButton color="danger" onClick={deleteUserBond}>
              Delete
            </CButton>
          </ModalFooter>
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
  onSave: PropTypes.func,
  userBondsList: PropTypes.array,
  userBonds: PropTypes.any,
}
