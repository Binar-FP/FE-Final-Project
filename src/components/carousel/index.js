import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NatureBg, NatureBg1, NatureBg2 } from '../../assets';
import './index.css'

const Carousel = () => {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
        <OwlCarousel className='d-flex justify-content-center text-center align-items-center' rewind={true} items={3} margin={8} autoplay ={true} >  
            <div class='item'>
                <div class="card">
                    <img src={NatureBg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class='item'>
                <div class="card">
                    <img src={NatureBg1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class='item'>
                <div class="card">
                    <img src={NatureBg2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div class='item'>
                <div class="card">
                    <img src={NatureBg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
