import React from 'react'
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { Navbar, BookingPassenger, BookingSeat, ERROR_HANDLER_404, Footer } from '../../components';

const Booking = (props) => {
    const pages = useSelector(state => state.booking.pages)

  return (
    <>
      <div>
        {/* error handlernya nanti di perbaiki */}
        {pages === ""? <ERROR_HANDLER_404 />:''}
        {pages && <Navbar />}
        {pages === "passenger"? <BookingPassenger />:'' }
        {pages === "bagage"? <BookingSeat/>:'' }
        {pages && <Footer />}
      </div>
    </>
  )
}

export default Booking
