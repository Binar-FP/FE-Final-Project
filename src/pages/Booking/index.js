import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Navbar, BookingPassenger, BookingSeat, BookingCheckout , PaymentSuccess} from '../../components';

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
        {pages && <Navbar />}
        {pages === "passenger"? <BookingPassenger />:'' }
        {pages === "bagage"? <BookingSeat/>:'' }
        {pages === "payment"? <BookingCheckout/>:'' }
        {pages === "success"? <PaymentSuccess/>:'' }
      </div>
    </>
  )
}

export default Booking
