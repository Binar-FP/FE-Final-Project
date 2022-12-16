import React, { useEffect, useState } from 'react'
import { AirportService } from '../../services/airportService';

const BuyTiket = ({handlerData}) => { 
    const [trip, setTrip] = useState('first')
    const [airport, setAirport] = useState([])
    const [formValues, setFormValues] = useState({typeOfFlight:"One Way"})

    useEffect(() => {
        AirportService.getAirport().then((res) => {
          setAirport(res.data.data);
        });
      }, [])
  return (
    <>
      <div className='row mb-3'>
                    <div className='col-sm-12 col-lg-3'>
                        <div className="form-check">
                            {trip==="oneway"?
                                <input className="form-check-input" type="radio" name="flexCheckChecked" onClick={()=>{setTrip("oneway")}} id="flexCheckChecked" checked/>:
                                <input className="form-check-input" type="radio" name="flexCheckChecked" onClick={()=>{setTrip("oneway");setFormValues({typeOfFlight : "One Way"})}} id="flexCheckChecked" />
                            }
                            {trip==="first"?
                                <input className="form-check-input" type="radio" name="flexCheckChecked" onClick={()=>{setTrip("oneway")}} id="flexCheckChecked" checked/>:''
                            }
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                One Way
                            </label>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-3'>
                        <div className="form-check">
                            {trip==="roundway"?
                                <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={()=>{setTrip("roundway")}} id="flexRadioDefault1" checked/>:
                                <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={()=>{setTrip("roundway");setFormValues({typeOfFlight : "Round Way"})}} id="flexRadioDefault1"/>
                            }
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Round Way
                            </label>
                        </div>
                    </div>
                </div>

                {/* BOOKING  */}
                <div className='row'>
                    <div className='col-sm-12 col-lg-4'>
                        <div className="form-group mb-3">
                            <label className="mb-2">From</label>
                            <select 
                            className="form-select form-select-sm" 
                            
                            onClick={(e)=>{setFormValues({...formValues, from : e.target.value})}}>
                            {airport.map((airport) => {
                            return (
                            <>
                                <option key={airport.id} value={airport.name}>{airport.name}</option>
                            </> 
                            )})}
                            </select>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-4'>
                    <div className="form-group mb-3">
                            <label className="mb-2">To</label>
                            <select 
                            className="form-select form-select-sm"
                             
                            onClick={(e)=>{setFormValues({...formValues, to : e.target.value})} }>
                            {airport.map((airport) => {
                            return (
                            <>
                                <option key={airport.id} value={airport.name}>{airport.name}</option>
                            </> 
                            )})}
                            </select>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-4'>
                        <label className="mb-2">Passenger</label>
                        <select className="form-select form-select-sm"
                        onClick={(e)=>{setFormValues({...formValues, passenger : e.target.value})}}
                        >
                            <option selected>Passenger</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Three</option>
                            <option value="5">Three</option>
                        </select>
                    </div>
                </div>

                <div className='row mb-4'>
                    <div className='col-sm-12 col-lg-4'>
                        <label className="mb-2">Departure Date</label>
                        <div className="form-group">
                            <input 
                            className="form-control form-control-sm rounded" 
                            type="date"
                            onChange={(e)=>{setFormValues({...formValues, depatureDate : e.target.value})}}
                            />
                        </div>
                    </div>
                    { trip==="roundway" &&
                        <div className='col-sm-12 col-lg-4'>
                            <label className="mb-2">Return Date</label>
                            {/* <div className="form-group"> */}
                            <input 
                            className="form-control form-control-sm rounded" 
                            type="date"
                            onChange={(e)=>{setFormValues({...formValues, returnDate : e.target.value})}} 
                            />
                        {/* </div> */}
                        </div>
                    }
                </div>

                <div className='row'>
                    <div className='col-sm-12 col-lg-4'>
                    </div>
                    <div className='col-sm-12 col-lg-4 text-center'>
                        <button className="form-control button text-light" placeholder="Default input"onClick={()=>handlerData(formValues)}>Booking Now</button>
                    </div>
                </div>
                {/* { trip==="first" ?<OneWay />:''}
                { trip==="oneway" ?<OneWay />:''}
                <RoundWay /> */}
    </>
  )
}

export default BuyTiket
