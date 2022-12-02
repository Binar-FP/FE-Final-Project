import React from 'react'
import './index.css'
import { UserBg } from '../../assets'

const Hero = () => {
  return (
    <div>
        <div className='container'>
            <div className='content-hero mt-5'>
                <div className='row'>
                    <div className='col-4 d-flex justify-content-between'>
                        <img className='img-user' src={UserBg} alt="" />
                    </div>
                    <div className='col-8 text-center my-auto'>
                        <h1>TRAVEL ALL OF THE WORLD</h1>
                        <p>your pleasure is our commitment.
                            manage your book and fly 
                        with our best aircraft to your destination
                        RIGHT NOW!</p>
                        {/* <div className='col-sm-12 col-lg-4'> */}
                            <button className="btn button text-light" placeholder="Default input">Booking Now</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
