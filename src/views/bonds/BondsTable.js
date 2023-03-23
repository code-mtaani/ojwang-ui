import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import { CButton } from '@coreui/react'
import ComponentRBAC from 'src/utils/ComponentRBAC'
import PropTypes from 'prop-types'
import { currencyFormatter, dateFormatter } from 'src/utils/common'

const renderDetailsButton = (params) => {
  return (
    <ComponentRBAC allowedRoles={['admin', 'member']}>
      <strong>
        <CButton
          variant="outline"
          color="primary"
          size="sm"
          onClick={() => {
            alert(params.row.id)
          }}
        >
          Edit
        </CButton>
      </strong>
    </ComponentRBAC>
  )
}

export default function BondsTable(props) {
  const columns = [
    { field: 'issue', headerName: 'Issue', flex: 1, minWidth: 130 },
    { field: 'issuer', headerName: 'Issuer', flex: 1.5, minWidth: 200 },
    { field: 'type', headerName: 'Type', flex: 1, minWidth: 130 },
    { field: 'value_date', headerName: 'Value Date', flex: 1, minWidth: 130 },
    { field: 'redemption_date', headerName: 'Redemption Date', flex: 1, minWidth: 130 },
    { field: 'amount', headerName: 'Amount', flex: 1, minWidth: 130 },
    { field: 'coupon_rate', headerName: 'Coupon Rate', flex: 1, minWidth: 100 },
    { field: 'tax_rate', headerName: 'Tax Rate', flex: 1, minWidth: 70 },
    { field: 'tenor', headerName: 'Tenor', flex: 1, minWidth: 70 },
    { field: 'maturity', headerName: 'Time to Maturity', flex: 1, minWidth: 100 },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      renderCell: renderDetailsButton,
    },
  ]

  const bonds = Array.from(props.bonds)

  let rows = []

  bonds.forEach(function (bond) {
    rows.push({
      id: bond.uid,
      issue: bond.issue,
      issuer: bond.issuer,
      type: bond.type,
      price_quote: bond.price_quote,
      value_date: dateFormatter.format(new Date(bond.value_date)),
      initial_coupon_payment_date: dateFormatter.format(new Date(bond.initial_coupon_payment_date)),
      redemption_date: dateFormatter.format(new Date(bond.redemption_date)),
      amount: currencyFormatter.format(bond.amount),
      dirty_price: currencyFormatter.format(bond.dirty_price),
      coupon_rate: bond.coupon_rate + '%',
      tax_rate: bond.tax_rate + '%',
      tenor: bond.tenor,
      maturity: bond.maturity,
      coupon_payment_dates: bond.coupon_payment_dates,
    })
  })

  return (
    <DataGrid
      sx={{ border: 0 }}
      css={styled}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      rowsPerPageOptions={[5]}
      autoHeight={true}
      pageSizeOptions={[5, 10, 25, 100]}
      pagination
      // checkboxSelection
    />
  )
}

BondsTable.propTypes = {
  bonds: PropTypes.any,
}
