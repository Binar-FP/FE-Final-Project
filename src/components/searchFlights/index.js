import React, { useEffect, useState } from 'react'
import './searchflights.css'
import { Arrow } from '../../assets'
import { BookingService } from '../../services/bookingService'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../loading';

const SearchFlights = (props) => {
    console.log(props.data)
    const [data, setData] = useState([])
    const [dataRoundTrip, setDataRoundTrip] = useState([])
    const [formValues, setFormValues] = useState({})
    const [formValuesRound, setFormValuesRound] = useState({})
    const [checkTrue, setCheckTrue] = useState(false)
    const [checkTrueRound, setCheckTrueRound] = useState(false)
    const [button, setButton] = useState('')
    const history = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const loader = useSelector(state => state.loading.loading)

    // console.log(isLoggedIn)

    useEffect(() => {
        dispatch({type: 'PROGRESS'})
        BookingService.getBookingSchedules(props.data).then((res) => {
            console.log(res)
            setData(res.data.data);
            dispatch({type: 'END'})  
        }).catch((err) => {
            dispatch({type: 'END'})  
            console.log(err)
        });
          ;

          const searchRoundTrip = {
            depatureDate: props.data.arrivalDate,
            from: props.data.to,
            to: props.data.from,
            typeOfClass: props.data.typeOfClass,
            
        }

        if (props.data.typeOfFlight === 'Round Way') {
            BookingService.getBookingSchedules(searchRoundTrip).then((res) => {
                console.log("RoundTrip")
                console.log(res)
                setDataRoundTrip(res.data.data);
                dispatch({type: 'END'})  
              }).catch((err) => {
                dispatch({type: 'END'})  
                console.log(err)
            });;
        }
    }, [props.data,dispatch])

    useEffect(() => {
        if (isLoggedIn === false) {
            history('/login');
        }else{

            if (checkTrue === true && checkTrueRound === true) {
                dispatch({type: 'CONFIRM_FLIGHT', payload: formValues});
                dispatch({type: 'CONFIRM_FLIGHT_ROUND', payload: formValuesRound});
                history('/booking');
            }else if (checkTrue === true && props.data.typeOfFlight === 'One Way') {
                dispatch({type: 'CONFIRM_FLIGHT', payload: formValues});
                history('/booking');
            }
        }
        
    }, [checkTrue, checkTrueRound, history, dispatch, formValues, formValuesRound,props.data,isLoggedIn])

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    const tanggal = formatDate(props.data.depatureDate)
    const tanggalRound =formatDate(props.data.arrivalDate)

  return (
    <>
    <div>
      <div className='container mt-5 mb-5'>
      {loader === true ? <Loading/>: ''}
        <div className='d-flex justify-content-center text-start align-items-center '>
            <div className='content-searchlight'>
                <div className="row">
                    {checkTrue === false? 
                    <div className="col-12">
                    {data.length > 0 && <h4 className='text-center mb-4'>Departure</h4>}
                    {data.length > 0 && tanggal !==  "Invalid Date" ?<h5 className='text-center mb-4'>{tanggal}</h5>:''}
                    {data.length === 0 && <h5 className='text-center mb-4'>Departure Flights it Not Found</h5>}
                    {data.map((flights) => {
                        return (
                            <>
                            <div 
                            class={button ===flights.id?'card mb-4 bg-card':'card mb-4'} 
                            onClick={(event)=>{setButton(flights.id);setFormValues({
                                id:flights.id,
                                airLine:flights.airLine,
                                depatureDate:flights.depatureDate,
                                depatureTime:flights.depatureTime,
                                from:flights.from,
                                arrivalDate:flights.arrivalDate,
                                arrivalTime:flights.arrivalTime,
                                to:flights.to,
                                typeOfClass:flights.typeOfClass,
                                ClassPrice:flights.ClassPrice,
                                })}}>
                                <div className="card-body">
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
                                            <p>{flights.to}</p>
                                        </div>
                                        <div className='col-lg-3 col-sm-12'>
                                            <p>{flights.typeOfClass}</p>
                                            <p>{flights.ClassPrice}</p>
                                        </div>
                                        {button ===flights.id?<button className='btn button btn-block text-light mt-3' onClick={()=>{setCheckTrue(true)}} >Confirm</button>:''}
                                    </div>
                                        
                                </div>
                            </div>
                            </>
                        )})}
                    </div>
                    :''}

                    {checkTrueRound === false && props.data.typeOfFlight === 'Round Way' ?
                    <div className="col-12">
                    {dataRoundTrip.length > 0 && <h4 className='text-center mb-4'>Return</h4>}
                    {dataRoundTrip.length > 0 && tanggal !==  "Invalid Date" ?<h5 className='text-center mb-4'>{tanggalRound}</h5>:''}
                    {dataRoundTrip.length === 0 && <h5 className='text-center mb-4'>Return Flights it Not Found</h5>}
                    {/* {dataRoundTrip && tanggalRound !== "Invalid Date" ?<h4 className='text-center mb-4'>Return</h4>:''} 
                    {dataRoundTrip && tanggalRound !==  "Invalid Date" ? <h5 className='text-center mb-4'>{tanggal}</h5>:''} */}
                    {dataRoundTrip && dataRoundTrip.map((flights) => {
                        return (
                            <>
                            <div 
                            class={button ===flights.airLine?'card mb-4 bg-card':'card mb-4'} 
                            onClick={(event)=>{setButton(flights.airLine);setFormValuesRound({
                                id:flights.id,
                                airLine:flights.airLine,
                                depatureDate:flights.depatureDate,
                                depatureTime:flights.depatureTime,
                                from:flights.from,
                                arrivalDate:flights.arrivalDate,
                                arrivalTime:flights.arrivalTime,
                                to:flights.to,
                                typeOfClass:flights.typeOfClass,
                                ClassPrice:flights.ClassPrice,
                                })}}>
                                <div className="card-body">
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
                                            <p>{flights.to}</p>
                                        </div>
                                        <div className='col-lg-3 col-sm-12'>
                                            <p>{flights.typeOfClass}</p>
                                            <p>{flights.ClassPrice}</p>
                                        </div>
                                        {button ===flights.airLine?<button className='btn button btn-block text-light mt-3' onClick={()=>{setCheckTrueRound(true) }} >Confirm</button>:''}
                                    </div>
                                        
                                </div>
                            </div>
                            </>
                        )})}
                    </div>
                    :''}
                    
                </div>
                
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchFlights
