import React from 'react'
import { Receipt } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading';
import './bookingcheckout.css'
import {PaymentActions} from '../../config/redux/actions/bookingActions'
import StripeCheckout from 'react-stripe-checkout';
// import { useNavigate } from 'react-router-dom';

const BookingCheckout = () => {
    const data = useSelector(state => state.booking)
    const dataBooking = useSelector(state => state.booking)
    const dataUser = useSelector(state => state.auth)
    const totalPrice =parseInt(data.price)+parseInt(data.bagage)+parseInt(data.priceRound)
    const price = String(totalPrice)
    const totalpriceNew = parseInt(price.concat('00'))
    const loader = useSelector(state => state.loading.loading)
    // const bookingid = useSelector(state => state.booking)
    const dispatch = useDispatch();

    const hadlePayment = (data) => {
        console.log(data.id)
        const dataPayment ={
            tokenId : data.id,
            amount:totalpriceNew
        }
        dispatch({type: 'PROGRESS'})
        dispatch(PaymentActions(dataPayment, dataBooking, dataUser.email))
    }
  return (
    <>
    <div className='container content-bookingPassenger'>
        <div className='row'>
            <div className='col-md-12 col-lg-12'>
                <div className="card p-4 card-color">
                {loader === true ? <Loading/>: ''}
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
                                    {data.priceRound === true ? <h6>Flights Tiket Return</h6>:''}
                                    <h6>Bagage</h6>
                                </div>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <h6>Rp. {data.price}</h6>
                                    {data.priceRound === true ? <h6>Rp. {data.priceRound}</h6>:''}
                                    <h6>Rp. {data.bagage}</h6>
                                    <hr></hr>
                                    <h6>Rp. {totalPrice}</h6>
                                </div>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                </div>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                <StripeCheckout
                                name='FlyWithMe'
                                image='https://media.istockphoto.com/id/1385318179/id/vektor/tampilan-atas-pesawat.jpg?s=612x612&w=0&k=20&c=aPlJsv8ggD_WILKrWYLz_HCRm1AaQzeRfuZQmZ_G1Ww='
                                billingAddress
                                shippingAddress
                                description={`Your total is Rp. ${price}`}
                                amount={totalpriceNew}
                                panelLabel='Pay Now'
                                token={hadlePayment}
                                currency='IDR'
                                stripeKey={'pk_test_51MHHIOD1b553Tlpye8YcK8e0HcvzPFrhG3Bim8pXv4bts5dckgVviqQK58ACFib7ge9kBJjeOWAJIl0smiGU64Xe00enwO2R53'}
                                >
                                    <button 
                                    className='btn button aligns-item-end text-light d-flex mt-3' 
                                    >Confirm and Pay
                                    </button>
                                </StripeCheckout>
                                </div>
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
