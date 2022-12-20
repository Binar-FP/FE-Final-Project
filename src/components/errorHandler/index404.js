import React from 'react'
import './index.css'
import { Robot404 } from '../../assets'

const Error_Handler_404 = () => {
  return (
    <div>
        <div className='container'>
            <div className='content-hero mt-5'>
                <div className='row'>
                    <div className='col-4 d-flex justify-content-between'>
                        <img className='img-user' src={Robot404} alt="" />
                    </div>
                    
                    <div className='col-8 text-center my-auto'>
                        <h1 className="display-1 fw-bold">Error 404</h1>
                        <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                        <p className="lead">
                            The page you’re looking for doesn’t exist. The URL is invalid.
                        </p>
                        <button className="btn button text-light" placeholder="Default input">Back to Home</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error_Handler_404
