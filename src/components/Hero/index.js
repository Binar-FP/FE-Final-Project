import React from 'react'
import './hero.css'
import { UserBg } from '../../assets'

const Hero = () => {
  return (
    <div>
        <div className='container'>
            <div className='content-hero mt-5'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12 d-flex justify-content-center'>
                        <img className='img-users img-fluid' src={UserBg} alt="" />
                    </div>
                    <div className='col-lg-8 col-sm-12 text-center my-auto'>
                        <h1>TRAVEL ALL OF THE WORLD</h1>
                        <p>your pleasure is our commitment.
                            manage your book and fly 
                        with our best aircraft to your destination
                        RIGHT NOW!</p>
                            <a href='#bookingbox' className="btn button text-light" placeholder="Default input">Booking Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
