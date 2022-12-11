import React from 'react'
import { Navbar, BookingBox, Carousel, Hero, Reviews, Footer } from '../../components'

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
