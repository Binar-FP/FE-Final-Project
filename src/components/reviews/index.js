import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NatureBg, NatureBg1, NatureBg2, Star } from '../../assets';
import './index.css'

const Reviews = () => {
  return (
    <div>
      <div className='container mt-5'>
        <div className='d-flex justify-content-center text-center align-items-center '>
        <OwlCarousel className='content-carousel' loop={true} items={3} margin={8} autoplay ={true} center={true} >    
            <div className='item'>
                <div className="card-body d-flex text-start align-items-start">
                    <div className='mx-2'>
                        <img src={NatureBg2} class="card-img" alt="..."/>
                    </div>
                    <div>
                        <h6 className="card-subtitle mb-1 text-muted">Malik</h6>
                        <p className="card-text"><img src={Star} class="star-img" alt="..."/></p> 
                        <p className="card-text">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...</p> 
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className="card-body d-flex text-start align-items-start">
                    <div className='mx-2'>
                        <img src={NatureBg} class="card-img" alt="..."/>
                    </div>
                    <div>
                        <h6 className="card-subtitle mb-1 text-muted">Alim</h6>
                        <p className="card-text"><img src={Star} class="star-img" alt="..."/></p> 
                        <p className="card-text">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...</p> 
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className="card-body d-flex text-start align-items-start">
                    <div className='mx-2'>
                        <img src={NatureBg1} class="card-img" alt="..."/>
                    </div>
                    <div>
                        <h6 className="card-subtitle mb-1 text-muted">Syahid</h6>
                        <p className="card-text"><img src={Star} class="star-img" alt="..."/></p> 
                        <p className="card-text">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...</p> 
                    </div>
                </div>
            </div>
        </OwlCarousel>  
      </div>
      </div>
    </div>
  )
}

export default Reviews
