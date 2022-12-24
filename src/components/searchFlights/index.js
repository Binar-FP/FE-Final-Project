import React, { useEffect, useState } from 'react'
import './searchflights.css'
import { Arrow } from '../../assets'
import { BookingService } from '../../services/bookingService'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const SearchFlights = (props) => {
    const [data, setData] = useState([])
    const [formValues, setFormValues] = useState({})
    const [button, setButton] = useState('')
    const history = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    console.log(isLoggedIn)

    useEffect(() => {
        BookingService.getBookingSchedules(props.data).then((res) => {
            console.log(res)
            setData(res.data.data);
          });
    }, [props.data])

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    const tanggal = formatDate(props.data.depatureDate)
    console.log(data)
    const handleConfirm = (event) => {
        if (isLoggedIn === false) {
            history('/login')
        }else{
            dispatch({type: 'CONFIRM_FLIGHT', payload: formValues});
            history('/booking');
        }
    }
    console.log(tanggal)
  return (
    <>
    <div>
      <div className='container mt-5 mb-5'>
        <div className='d-flex justify-content-center text-start align-items-center '>
            <div className='content-searchlight'>
                <div className="row">
                    <div className="col-12">
                    {tanggal !==  "Invalid Date" && <h4 className='text-center mb-4'>{tanggal}</h4>}
                    {tanggal ===  "Invalid Date" && <h4 className='text-center mb-4'>Date not found</h4>}
                    {/* <h4 className='text-center mb-4'>{tanggal}</h4> */}
                    {data.map((flights) => {
                        return (
                            <>
                            <div 
                            class={button ===flights.airLine?'card mb-4 bg-card':'card mb-4'} 
                            onClick={(event)=>{setButton(flights.airLine);setFormValues({
                                id:flights.id,
                                airLine:flights.airLine,
                                depatureDate:flights.depatureDate,
                                depatureTime:flights.depatureTime,
                                from:flights.from,
                                arrivalDate:flights.arrivalDate,
                                arrivalTime:flights.arrivalTime,
                                to:flights.to,
                                typeOfClass:flights.typeOfClass,
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
                                        {button ===flights.airLine?<button className='btn button btn-block text-light mt-3' onClick={handleConfirm} >Confirm</button>:''}
                                    </div>
                                        
                                </div>
                            </div>
                            </>
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
