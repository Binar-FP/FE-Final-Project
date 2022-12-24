import React from 'react'
import './paymentSuccess.css'
import {Plane} from '../../assets'
import { EmojiHeartEyesFill } from 'react-bootstrap-icons'

const PaymentSuccess = () => {
  return (
    <>
    <div className='container content-bookingPassenger'>
        <div className='row'>
            <div className='col-md-12 col-lg-12'>
                <div className="card p-4 card-color">
                    <div className="card-body">
                            <div className='row justify-content-center'>
                                <div className="form-group col-md-12 col-lg-6">
                                    <p className='text-center'><EmojiHeartEyesFill size={100} className="color-img" /></p>
                                    <h5 className='text-center'>Payment Success</h5>
                                    <p className='text-center'>Your payment has been successfully processed Check the wallet section from your profile to see all available tickets We will notify you two days before departure to prepare. Until then, pack your bags and get ready for your trip</p>
                                </div>
                            </div>
                            <img src={Plane} alt=''className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PaymentSuccess
