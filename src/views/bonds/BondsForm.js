import React, { useState } from 'react'
import { Button, Input, Label, Form, FormGroup } from 'reactstrap'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import { axiosPrivate } from 'src/utils/axiosPrivate'

function BondsForm(props) {
  const [issue, setIssue] = useState(props.issue)
  const [issuer, setIssuer] = useState(props.issuer)
  const [type, setType] = useState(props.type)
  const [amount, setAmount] = useState(props.amount)
  const [value_date, setValue_date] = useState(props.value_date)
  const [initial_coupon_payment_date, setInitial_coupon_payment_date] = useState(
    props.initial_coupon_payment_date,
  )
  const [redemption_date, setRedemption_date] = useState(props.redemption_date)
  const [coupon_rate, setCoupon_rate] = useState(props.coupon_rate)
  const [tax_rate, setTax_rate] = useState(props.tax_rate)
  const [tenor, setTenor] = useState(props.tenor)
  const [maturity, setMaturity] = useState(props.maturity)
  const [price_quote, setPrice_quote] = useState(props.price_quote)
  const [dirty_price, setDirty_price] = useState(props.dirty_price)
  const [sale_date_start, setSale_date_start] = useState(props.sale_date_start)
  const [sale_date_end, setSale_date_end] = useState(props.sale_date_end)
  const [id] = useState(props.id)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      issue,
      issuer,
      type,
      amount,
      value_date,
      initial_coupon_payment_date,
      redemption_date,
      coupon_rate,
      tax_rate,
      tenor,
      maturity,
      price_quote,
      dirty_price,
      sale_date_start,
      sale_date_end,
    }

    const onSuccess = ({ data }) => {
      toast.success('Successfully submitted new bond', {
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
    }

    const onFailure = (error) => {
      toast.error('An error occured when saving the bond', {
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
    axiosPrivate.post('/v1/bond/', payload).then(onSuccess).catch(onFailure)
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    const payload = {
      issue,
      issuer,
      type,
      amount,
      value_date,
      initial_coupon_payment_date,
      redemption_date,
      coupon_rate,
      tax_rate,
      tenor,
      maturity,
      price_quote,
      dirty_price,
      sale_date_start,
      sale_date_end,
    }

    const onSuccess = ({ data }) => {
      toast.success('Successfully submitted edited bond', {
        position: 'top-right',
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
      props.toggle()
      props.onSave()
    }

    const onFailure = (error) => {
      toast.error('An error occured when saving the bond', {
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
    axiosPrivate.patch(`/v1/bond/${id}`, payload).then(onSuccess).catch(onFailure)
  }

  return (
    <div>
      <Form onSubmit={props.id == null ? handleSubmit : handleEdit}>
        <FormGroup>
          <Label for="issue">Issue*</Label>
          <Input
            defaultValue={issue}
            id="issue"
            name="issue"
            placeholder="Issue"
            type="text"
            required
            onChange={(e) => setIssue(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="issuer">Issuer</Label>
          <Input
            defaultValue={issuer}
            id="issuer"
            name="issuer"
            placeholder="Issuer"
            type="text"
            required
            onChange={(e) => setIssuer(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input
            defaultValue={type}
            id="type"
            name="type"
            placeholder="Type"
            type="select"
            required
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="FIXED">FIXED</option>
            <option value="INFRASTRUCTURE">INFRASTRUCTURE</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount</Label>
          <Input
            defaultValue={amount}
            id="amount"
            name="amount"
            placeholder="Amount"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="value_date">Value date</Label>
          <Input
            defaultValue={value_date}
            id="value_date"
            name="value_date"
            placeholder="Value date"
            type="date"
            required
            onChange={(e) => setValue_date(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="initial_coupon_payment_date">Initial interest payment date</Label>
          <Input
            defaultValue={initial_coupon_payment_date}
            id="initial_coupon_payment_date"
            name="initial_coupon_payment_date"
            placeholder="Initial interest payment date"
            type="date"
            required
            onChange={(e) => setInitial_coupon_payment_date(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="redemption_date">Redemption date</Label>
          <Input
            defaultValue={redemption_date}
            id="redemption_date"
            name="redemption_date"
            placeholder="Redemption date"
            type="date"
            required
            onChange={(e) => setRedemption_date(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sale_date_start">Sale start date</Label>
          <Input
            defaultValue={sale_date_start}
            id="sale_date_start"
            name="sale_date_start"
            placeholder="Sale start date"
            type="date"
            onChange={(e) => setSale_date_start(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="sale_date_end">Sale end date</Label>
          <Input
            defaultValue={sale_date_end}
            id="sale_date_end"
            name="sale_date_end"
            placeholder="Sale end date"
            type="date"
            onChange={(e) => setSale_date_end(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="coupon_rate">Coupon rate</Label>
          <Input
            defaultValue={coupon_rate}
            id="coupon_rate"
            name="coupon_rate"
            placeholder="Coupon rate"
            type="number"
            onChange={(e) => setCoupon_rate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tax_rate">Tax rate</Label>
          <Input
            defaultValue={tax_rate}
            id="tax_rate"
            name="tax_rate"
            placeholder="Tax rate"
            type="number"
            onChange={(e) => setTax_rate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tenor">Tenor</Label>
          <Input
            defaultValue={tenor}
            id="tenor"
            name="tenor"
            placeholder="Tenor"
            type="number"
            onChange={(e) => setTenor(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="maturity">Maturity</Label>
          <Input
            defaultValue={maturity}
            id="maturity"
            name="maturity"
            placeholder="Maturity"
            type="number"
            onChange={(e) => setMaturity(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price_quote">Price quote</Label>
          <Input
            defaultValue={price_quote}
            id="price_quote"
            name="price_quote"
            placeholder="Price quote"
            type="select"
            onChange={(e) => setPrice_quote(e.target.value)}
          >
            <option value="">Select type</option>
            <option value="PAR">PAR</option>
            <option value="DISCOUNTED">DISCOUNTED</option>
            <option value="PREMIUM">PREMIUM</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="dirty_price">Dirty price</Label>
          <Input
            defaultValue={dirty_price}
            id="dirty_price"
            name="dirty_price"
            placeholder="Dirty price"
            type="number"
            onChange={(e) => setDirty_price(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" onClick={() => handleSubmit()}>
          {props.id == null ? 'Submit' : 'Edit'}
        </Button>
      </Form>
    </div>
  )
}

BondsForm.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.func,
  onSave: PropTypes.func,
  issue: PropTypes.string,
  issuer: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  value_date: PropTypes.string,
  initial_coupon_payment_date: PropTypes.string,
  redemption_date: PropTypes.string,
  coupon_rate: PropTypes.number,
  tax_rate: PropTypes.number,
  tenor: PropTypes.number,
  maturity: PropTypes.number,
  price_quote: PropTypes.string,
  dirty_price: PropTypes.number,
  sale_date_start: PropTypes.string,
  sale_date_end: PropTypes.string,
  id: PropTypes.string,
}

export default BondsForm
