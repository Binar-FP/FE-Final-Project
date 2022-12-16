import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NatureBg, NatureBg1, NatureBg2 } from '../../assets';
import './carousel.css'

const Carousel = () => {
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
    <div>
      <div className='container mt-5'>
        <div className='d-flex justify-content-center text-center align-items-center '>
        <OwlCarousel className='content-carousel' loop={true} items={3} margin={8} autoplay ={true} center={true} responsive={options.responsive} >  
            <div className='item'>
                <div className="card">
                    <img src={NatureBg} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className="card">
                    <img src={NatureBg1} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className="card">
                    <img src={NatureBg2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </OwlCarousel>  
      </div>
      </div>
    </div>
  )
}

export default Carousel
