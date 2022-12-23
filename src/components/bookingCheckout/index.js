import React from 'react'
import { Receipt } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import './bookingcheckout.css'
import {PaymentActions} from '../../config/redux/actions/bookingActions'

const BookingCheckout = () => {
    const data = useSelector(state => state.booking)
    const totalPrice =parseInt(data.price)+parseInt(data.bagage)
    console.log(data)
    const dispatch = useDispatch();

    const hadlePayment = () => {
        dispatch(PaymentActions())
    }
  return (
    <>
    <div className='container content-bookingPassenger'>
        <div className='row'>
            <div className='col-md-12 col-lg-12'>
                <div className="card p-4 card-color">
                    <div className="card-body pt-4">
                            <div className='row'>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <image src='https://www.flaticon.com/svg/static/icons/svg/149/149071.svg' alt=''/>
                                    <Receipt size={50} color="grey" />
                                    <label htmlFor="" className="mb-2 ms-2">Sub Total</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <h6>Flights Tiket</h6>
                                    <h6>Bagage</h6>
                                </div>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <h6>Rp. {data.price}</h6>
                                    <h6>Rp. {data.bagage}</h6>
                                    <hr></hr>
                                    <h6>Rp. {totalPrice}</h6>
                                </div>
                                    <button className='btn button aligns-item-end text-light' onClick={hadlePayment}>Confirm and Pay</button>
                            </div>
                            
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BookingCheckout
