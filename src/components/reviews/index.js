import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NatureBg, NatureBg1, NatureBg2, Star } from '../../assets';
import './reviews.css'

const Reviews = () => {
    const options = {
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    }
  return (
    <>
      <div className='container mt-5'>
        <div className='d-flex justify-content-center text-center align-items-center '>
        <OwlCarousel className='content-carousel carousel-box' loop={true} items={3} margin={8} autoplay ={true} center={true} responsive={options.responsive} >    
            <div className='item'>
                <div className="card-body d-flex text-start align-items-start">
                    <div className='mx-2'>
                        <img src={NatureBg2} className="card-img" alt="..."/>
                    </div>
                    <div>
                        <h6 className="card-subtitle mb-1 text-muted">Malik</h6>
                        <p className="card-text"><img src={Star} className="star-img" alt="..."/></p> 
                        <p className="card-text">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...</p> 
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className="card-body d-flex text-start align-items-start">
                    <div className='mx-2'>
                        <img src={NatureBg} className="card-img" alt="..."/>
                    </div>
                    <div>
                        <h6 className="card-subtitle mb-1 text-muted">Alim</h6>
                        <p className="card-text"><img src={Star} className="star-img" alt="..."/></p> 
                        <p className="card-text">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...</p> 
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className="card-body d-flex text-start align-items-start">
                    <div className='mx-2'>
                        <img src={NatureBg1} className="card-img" alt="..."/>
                    </div>
                    <div>
                        <h6 className="card-subtitle mb-1 text-muted">Syahid</h6>
                        <p className="card-text"><img src={Star} className="star-img" alt="..."/></p> 
                        <p className="card-text">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...</p> 
                    </div>
                </div>
            </div>
        </OwlCarousel>  
      </div>
      </div>
    </>
  )
}

export default Reviews
