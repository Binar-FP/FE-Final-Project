import React, { useEffect, useState } from 'react'
import './searchflights.css'
import { Arrow } from '../../assets'
import { BookingService } from '../../services/bookingService'

const SearchFlights = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        BookingService.getBookingSchedules(props.data).then((res) => {
            console.log(res)
            setData(res.data.data);
          });
    }, [props.data])
  return (
    <>
    <div>
      <div className='container mt-5 mb-5'>
        <div className='d-flex justify-content-center text-start align-items-center '>
            <div className='content-searchlight'>
                <div className="row">
                    <div className="col-12">
                    <h4 className='text-center mb-4'>{props.data.depatureDate}</h4>
                    {data.map((flights) => {
                        return (
                        <div class="card mb-4" onClick={(event)=>event.currentTarget.classList.toggle('bg-card')}>
                            <div class="card-body">
                                <div className='row  p-3'>
                                    <div className='col-lg-3 col-sm-12'>
                                        <p>{flights.airLine}</p>
                                        <p>{flights.depatureDate}</p>
                                        <p>{flights.depatureTime}</p>
                                        <p>{flights.from}</p>
                                    </div>
                                    <div className='col-lg-3 col-sm-12 d-flex align-items-center '>
                                        <img className='img-arrow' src={Arrow} alt='' />
                                    </div>
                                    <div className='col-lg-3 col-sm-12'>
                                        <p>{flights.airLine}</p>
                                        <p>{flights.arrivalDate}</p>
                                        <p>{flights.arrivalTime}</p>
                                        <p>{flights.from}</p>
                                    </div>
                                    <div className='col-lg-3 col-sm-12'>
                                        <p>Economy Class</p>
                                        <p>{flights.economyClassPrice}</p>
                                    </div>
                                </div>
                                    
                            </div>
                        </div>
                        )})}
                    </div>
                    
                </div>
                
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchFlights
