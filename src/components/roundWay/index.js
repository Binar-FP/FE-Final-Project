import React from 'react'

const roundWay = () => {
  return (
    <>
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
        </div>
    </>
  )
}

export default roundWay
