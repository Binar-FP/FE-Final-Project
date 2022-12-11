import React from 'react'
import './index.css'
import { Robot404 } from '../../assets'

const Error_Handler_500 = () => {
  return (
    <div>
        <div className='container'>
            <div className='content-hero mt-5'>
                <div className='row'>
                    <div className='col-4 d-flex justify-content-between'>
                        <img className='img-user' src={Robot404} alt="" />
                    </div>
                    <div className='col-8 text-center my-auto'>
                        <h1 class="display-1 fw-bold">Error 500</h1>
                        <p class="fs-3"> <span class="text-danger">Opps!</span> Error page.</p>
                        <p class="lead">
                            Something went wrong on our server!!
                        </p>
                        <button className="btn button text-light" placeholder="Default input">Back to Home</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error_Handler_500
