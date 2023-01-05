import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carousel.css'
import { DestinationsService } from '../../services/destinationsService';

const Carousel = () => {

    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        DestinationsService.getDestinations().then((res) => {
          setDestinations(res.data.data)
        })
    }, [])

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
        {destinations.map((item, index) => {
                return (
                    <div className='item'
                        onClick={() =>window.location.href = `/destination`}>
                        <div className="card card-carouselku"
                        >
                            <img src={item.imageDestination} className="card-img-top img-destinationku" alt="..."/>
                            <div className="card-body">
                                <p className='text-center'>{item.nameDestination}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </OwlCarousel>  
      </div>
      </div>
    </div>
  )
}

export default Carousel
