import React from 'react'
import './index.css'

const BookingBox = () => {
  return (
    <div className='container'>
            <div className='content-booking p-4 px-5'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                        <a href='/' className='btn p-0 m-0'>Buy Tickets</a>
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                        <a href='/' className='btn p-0 m-0'>Check your flight status</a>
                    </div>
                </div>
                <hr></hr>
                <div className='row mb-4'>
                    <div className='col-sm-12 col-lg-3'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                                One Way
                            </label>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-3'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                                Round Way
                            </label>
                        </div>
                    </div>
                </div>
                <div className='row mb-4'>
                    <div className='col-sm-12 col-lg-4'>
                        <select className="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Select Departure</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-sm-12 col-lg-4'>
                        <select className="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Select Destination</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-sm-12 col-lg-4'>
                        <select className="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Select Date</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-lg-4'>
                    </div>
                    <div className='col-sm-12 col-lg-4 text-center'>
                        <button className="form-control button text-light" placeholder="Default input">Booking Now</button>
                    </div>
                    <div className='col-sm-12 col-lg-4'>
                        <select className="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Passenger</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BookingBox
