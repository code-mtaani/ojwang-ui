import React, { useState } from 'react'
import { Button, Input, Label, Form, FormGroup } from 'reactstrap'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import { axiosPrivate } from 'src/utils/axiosPrivate'

function AddMandateToPortfolioForm(props) {
  const [coupon_rate, setCoupon_rate] = useState(props.coupon_rate_raw)
  const [face_value, setFace_value] = useState(props.face_value_raw)
  const [dirty_price, setDirty_price] = useState(props.dirty_price_raw)
  const [mandate_uid] = useState(props.mandate_uid)
  const [uid] = useState(props.id)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      coupon_rate,
      mandate_uid,
      face_value,
      dirty_price,
    }

    const onSuccess = ({ data }) => {
      toast.success('Successfully added mandate to portfolio', {
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
      props.toggle()
    }

    const onFailure = (error) => {
      toast.error('An error occured when adding the mandate to your portfolio', {
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
    axiosPrivate.post('/v1/user_mandate/', payload).then(onSuccess).catch(onFailure)
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    const payload = {
      coupon_rate,
      uid,
      face_value,
      dirty_price,
    }

    const onSuccess = ({ data }) => {
      toast.success('Successfully edited user mandate', {
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
      toast.error('An error occured when saving the user mandate', {
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
    axiosPrivate.patch(`/v1/user_mandate/${uid}`, payload).then(onSuccess).catch(onFailure)
  }

  return (
    <div>
      <Form onSubmit={props.editOperation === true ? handleEdit : handleSubmit}>
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
        <FormGroup>
          <Label for="face_value">Face value</Label>
          <Input
            defaultValue={face_value}
            id="face_value"
            name="face_value"
            placeholder="Face value"
            type="number"
            onChange={(e) => setFace_value(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" onClick={() => handleSubmit()}>
          {props.editOperation === true ? 'Edit' : 'Submit'}
        </Button>
      </Form>
    </div>
  )
}

AddMandateToPortfolioForm.propTypes = {
  className: PropTypes.string,
  toggle: PropTypes.func,
  onSave: PropTypes.func,
  coupon_rate_raw: PropTypes.number,
  face_value_raw: PropTypes.number,
  dirty_price_raw: PropTypes.number,
  uid: PropTypes.string,
  id: PropTypes.string,
  mandate_uid: PropTypes.string,
  editOperation: PropTypes.bool,
}

export default AddMandateToPortfolioForm
