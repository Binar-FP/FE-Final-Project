import React from 'react'
import { Navbar, Footer, BookingBox, Carousel, Hero, Reviews } from '../../components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <BookingBox/>
      <Carousel/>
      <Hero/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
