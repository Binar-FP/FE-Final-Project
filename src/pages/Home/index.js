import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Navbar, BookingBox, Carousel, Hero, Reviews, Footer, SearchFlights } from '../../components'

const Home = () => {
  const history = useNavigate()
  const [data, setData] = useState(false)
  const role = useSelector(state => state.auth.roleId)

  useEffect(() => {
    if (role === "admin") {
      history('/admin')
    }
  }, [role, history])

  const handlerData = (data) => {
    setData(data)
  }
  
  return (
    <div>
      <Navbar />
      <BookingBox handlerData={handlerData}/>
      {data && <SearchFlights data={data} />}
      
      {!data && <Carousel/>}
      {!data &&<Hero/>}
      {!data &&<Reviews/> }
      <Footer/>
    </div>
  )
}

export default Home
