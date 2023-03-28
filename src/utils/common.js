const options = { month: 'long', day: 'numeric', year: 'numeric' }

export const dateFormatter = new Intl.DateTimeFormat('en-US', options)

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'KES',
})
