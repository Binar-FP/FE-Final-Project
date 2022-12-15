import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Navbar, BookingBox, Carousel, Hero, Reviews, Footer } from '../../components'

const Home = () => {
  const history = useNavigate()
  const role = useSelector(state => state.auth.roleId)

  useEffect(() => {
    if (role === "admin") {
      history('/admin')
    }
  }, [role, history])
  
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
