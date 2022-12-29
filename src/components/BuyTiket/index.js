import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AirportService } from '../../services/airportService';
import Loading from '../loading';

const BuyTiket = ({handlerData}) => { 
    const [trip, setTrip] = useState('first')
    const [airport, setAirport] = useState([])
    const [formValues, setFormValues] = useState({typeOfFlight:"One Way"})
    const [message, setMessage] = useState('')
    const loader = useSelector(state => state.loading.loading)
    const dispatch = useDispatch();
  

    useEffect(() => {
        // dispatch({type: 'PROGRESS'})
        AirportService.getAirport().then((res) => {
          setAirport(res.data.data);
        //   dispatch({type: 'END'})  
        });
      }, [dispatch])


      const handlerForm = () => {
        const dataLenght = Object.keys(formValues).length
        if (dataLenght < 5) {
            setMessage(true)
        }else{
            setMessage(!true)
            handlerData(formValues)
        }
    }
  return (
    <>
      <div className='row mb-3'>
                    {loader === true ? <Loading/>: ''}
                    <div className='col-sm-12 col-lg-3'>
                        <div className="form-check">
                            <input className="form-check-input" 
                            type="radio" 
                            name="typeofFlight"
                             id="typeofFlight1" 
                             defaultChecked 
                             onClick={()=>{setTrip("oneway");setFormValues({...formValues,typeOfFlight : "One Way"})}}/>
                            <label className="form-check-label" htmlFor="typeofFlight1">
                                One Way
                            </label>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-3'>
                        <div className="form-check">
                            <input 
                            className="form-check-input" 
                            type="radio" name="typeofFlight" 
                            id="typeofFlight2" 
                            onClick={()=>{setTrip("roundway");setFormValues({...formValues,typeOfFlight : "Round Way"})}}/>
                            <label className="form-check-label" htmlFor="typeofFlight2">
                                Round Way
                            </label>
                        </div>
                    </div>

                </div>

                {/* BOOKING  */}
                <div className='row'>
                    <div className='col-sm-12 col-lg-4'>
                        <label for="exampleDataList" class="form-label">From</label>
                        <input class="form-control form-select-sm rounded" 
                        list="datalistOptions"
                        required 
                        onChange={(e)=>{setFormValues({...formValues, from : e.target.value})} } placeholder="Airport"/>
                        <datalist id="datalistOptions" >
                        {airport.map((airport) => {
                            return (
                            <>
                                <option key={airport.id} defaultValue={airport.name}>{airport.name}</option>
                            </> 
                            )})}
                        </datalist>
                    </div>
                    <div className='col-sm-12 col-lg-4'>
                        <label for="exampleDataList" class="form-label">To</label>
                        <input class="form-control form-select-sm rounded" 
                        list="datalistOptions" 
                        onChange={(e)=>{setFormValues({...formValues, to : e.target.value})} } placeholder="Airport"/>
                        <datalist id="datalistOptions" >
                        {airport.map((airport) => {
                            return (
                            <>
                                <option key={airport.id} defaultValue={airport.name}>{airport.name}</option>
                            </> 
                            )})}
                        </datalist>
                    </div>
                    <div className='col-sm-12 col-lg-4'>
                        <label className="mb-2">Class Flights</label>
                        <select className="form-select form-select-sm"
                        onClick={(e)=>{setFormValues({...formValues, typeOfClass : e.target.value})}}
                        >
                            <option selected>Class Flights</option>
                            <option value="Economy Class">Economy Class</option>
                            <option value="Business Class">Business Class</option>
                            <option value="First Class">First Class</option>
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
                            onChange={(e)=>{setFormValues({...formValues, arrivalDate : e.target.value})}} 
                            />
                        {/* </div> */}
                        </div>
                    }
                </div>

                <div className='row'>
                    <div className='col-sm-12 col-lg-4'>
                    {message === true ? <p className='text-danger'>Please Fill all the form</p> : ''}
                    </div>
                    <div className='col-sm-12 col-lg-4 text-center'>
                        <button className="form-control button text-light" placeholder="Default input" onClick={()=>handlerForm()}>Booking Now</button>
                    </div>
                </div>
    </>
  )
}

export default BuyTiket
