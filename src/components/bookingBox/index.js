import React, { useState } from 'react'
import './bookingbox.css'
import BuyTiket from '../BuyTiket'
import SearchTiket from '../SearchTiket'

const BookingBox = () => {
    const [action, setAction] = useState('BuyTiket')
  return (
    <div className='container'>
            <h1 className='text-header text-end'>We are here for you <br></br> worldwide</h1>
            <div className='content-booking p-4 px-5' id='bookingbox'>
                <div className='row'>
                    <div className='col-sm-12 col-lg-6'>
                    {action==="BuyTiket"?
                        <button className='btn p-0 m-0 focus' onClick={()=>setAction('BuyTiket')}>Buy Tickets</button>:
                        <button className='btn p-0 m-0' onClick={()=>setAction('BuyTiket')}>Buy Tickets</button>}
                    </div>
                    <div className='col-sm-12 col-lg-6'>
                    {action==="SearchFlight"?
                        <button className='btn p-0 m-0 focus' onClick={()=>setAction('SearchFlight')}>Check your flight status</button>:
                        <button className='btn p-0 m-0' onClick={()=>setAction('SearchFlight')}>Check your flight status</button>
                    }
                    </div>
                </div>
                <hr></hr>
                {action==="BuyTiket"?<BuyTiket />:''}
                {action==="SearchFlight"?<SearchTiket />:''}
                </div>
    </div>
  )
}

export default BookingBox
