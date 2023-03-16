import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { CButton } from '@coreui/react'
import ComponentRBAC from 'src/utils/ComponentRBAC'

const renderDetailsButton = (params) => {
  return (
    <ComponentRBAC allowedRoles={['admin', 'member']}>
      <strong>
        <CButton
          variant="outline"
          color="primary"
          size="sm"
          // style={{ marginLeft: 16 }}
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
  // {
  //   cell: 'actions',
  //   headerName: 'Actions',
  //   // description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   filterable: false,
  //   width: 130,
  //   // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
]

const rows = [
  {
    id: 1,
    coupon_payment_dates: ['2023-07-12', '2024-01-15', '2024-07-15', '2025-01-13', '2025-07-14'],
    uid: '8ee30c58-cea4-4a3a-925b-d2ce205ef6c4',
    issue: 'FDX1',
    issuer: 'Central Bank of Kenya',
    type: 'FIXED',
    price_quote: null,
    value_date: '2023-03-13',
    initial_coupon_payment_date: '2023-07-12',
    redemption_date: '2025-03-12',
    created_at: '2023-03-12T01:30:08.333162Z',
    updated_at: '2023-03-12T01:30:08.333197Z',
    amount: 20000000000,
    dirty_price: 0,
    coupon_rate: 0,
    tax_rate: 14.399,
    tenor: 17,
    maturity: 17,
    // actions: (row)=><CButton color="primary">Button</CButton>,
  },
  {
    id: 2,
    coupon_payment_dates: ['2023-07-12', '2024-01-15', '2024-07-15', '2025-01-13', '2025-07-14'],
    uid: '8ee30c58-cea4-4a3a-925b-d2ce205ef6c4',
    issue: 'FDX1',
    issuer: 'Central Bank of Kenya',
    type: 'FIXED',
    price_quote: null,
    value_date: '2023-03-13',
    initial_coupon_payment_date: '2023-07-12',
    redemption_date: '2025-03-12',
    created_at: '2023-03-12T01:30:08.333162Z',
    updated_at: '2023-03-12T01:30:08.333197Z',
    amount: 20000000000,
    dirty_price: 0,
    coupon_rate: 0,
    tax_rate: 14.399,
    tenor: 17,
    maturity: 17,
  },
  {
    id: 3,
    coupon_payment_dates: ['2023-07-12', '2024-01-15', '2024-07-15', '2025-01-13', '2025-07-14'],
    uid: '8ee30c58-cea4-4a3a-925b-d2ce205ef6c4',
    issue: 'FDX1',
    issuer: 'Central Bank of Kenya',
    type: 'FIXED',
    price_quote: null,
    value_date: '2023-03-13',
    initial_coupon_payment_date: '2023-07-12',
    redemption_date: '2025-03-12',
    created_at: '2023-03-12T01:30:08.333162Z',
    updated_at: '2023-03-12T01:30:08.333197Z',
    amount: 20000000000,
    dirty_price: 0,
    coupon_rate: 0,
    tax_rate: 14.399,
    tenor: 17,
    maturity: 17,
  },
]

export default function BondsTable() {
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
      // pageSize={5}
      rowsPerPageOptions={[5]}
      autoHeight={true}
      pageSizeOptions={[5, 10, 25, 100]}
      pagination
      // checkboxSelection
    />
  )
}
