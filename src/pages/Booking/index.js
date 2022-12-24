import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { Navbar, BookingPassenger, BookingSeat, ERROR_HANDLER_404, BookingCheckout , Footer, PaymentSuccess} from '../../components';

const Booking = (props) => {
    const pages = useSelector(state => state.booking.pages)
    const history = useNavigate();

    useEffect(() => {
      if (pages === "") {
        history('/')
      }
    }, [pages, history])

  return (
    <>
      <div>
        {/* error handlernya nanti di perbaiki */}
        {/* {pages === ""? <ERROR_HANDLER_404 />:''} */}
        {pages && <Navbar />}
        {pages === "passenger"? <BookingPassenger />:'' }
        {pages === "bagage"? <BookingSeat/>:'' }
        {pages === "payment"? <BookingCheckout/>:'' }
        {pages === "success"? <PaymentSuccess/>:'' }
        {pages && <Footer />}
      </div>
    </>
  )
}

export default Booking
