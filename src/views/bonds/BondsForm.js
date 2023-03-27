import React, { useState } from 'react'
import { Button, Input, Label, Form, FormGroup } from 'reactstrap'
import PropTypes from 'prop-types'

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

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="issue">Issue*</Label>
          <Input
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
            id="issuer"
            name="issuer"
            placeholder="Issuer"
            type="text"
            onChange={(e) => setIssuer(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input
            id="type"
            name="type"
            placeholder="Type"
            type="text"
            onChange={(e) => setType(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="amount">amount</Label>
          <Input
            id="amount"
            name="amount"
            placeholder="amount"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="value_date">value_date</Label>
          <Input
            id="value_date"
            name="value_date"
            placeholder="value_date"
            type="date"
            onChange={(e) => setValue_date(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="initial_coupon_payment_date">initial_coupon_payment_date</Label>
          <Input
            id="initial_coupon_payment_date"
            name="initial_coupon_payment_date"
            placeholder="initial_coupon_payment_date"
            type="date"
            onChange={(e) => setInitial_coupon_payment_date(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="redemption_date">redemption_date</Label>
          <Input
            id="redemption_date"
            name="redemption_date"
            placeholder="redemption_date"
            type="date"
            onChange={(e) => setRedemption_date(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="coupon_rate">coupon_rate</Label>
          <Input
            id="coupon_rate"
            name="coupon_rate"
            placeholder="coupon_rate"
            type="number"
            onChange={(e) => setCoupon_rate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tax_rate">tax_rate</Label>
          <Input
            id="tax_rate"
            name="tax_rate"
            placeholder="tax_rate"
            type="number"
            onChange={(e) => setTax_rate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tenor">tenor</Label>
          <Input
            id="tenor"
            name="tenor"
            placeholder="tenor"
            type="number"
            onChange={(e) => setTenor(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="maturity">maturity</Label>
          <Input
            id="maturity"
            name="maturity"
            placeholder="maturity"
            type="number"
            onChange={(e) => setMaturity(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price_quote">price_quote</Label>
          <Input
            id="price_quote"
            name="price_quote"
            placeholder="price_quote"
            type="price_quote"
            onChange={(e) => setPrice_quote(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="dirty_price">dirty_price</Label>
          <Input
            id="dirty_price"
            name="dirty_price"
            placeholder="dirty_price"
            type="number"
            onChange={(e) => setDirty_price(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" onClick={''}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

BondsForm.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.func,
  issue: PropTypes.string,
  issuer: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  value_date: PropTypes.instanceOf(Date),
  initial_coupon_payment_date: PropTypes.instanceOf(Date),
  redemption_date: PropTypes.instanceOf(Date),
  coupon_rate: PropTypes.number,
  tax_rate: PropTypes.number,
  tenor: PropTypes.number,
  maturity: PropTypes.number,
  price_quote: PropTypes.string,
  dirty_price: PropTypes.number,
}

export default BondsForm
