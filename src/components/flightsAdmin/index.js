import React, { useEffect, useState } from 'react'
import { PencilSquare, PlusCircle, Trash, } from 'react-bootstrap-icons'
import { PutFlightsActions, DeleteFlightsActions, CreateFlightsActions } from '../../config/redux/actions/flightsActions';
import { useDispatch, useSelector } from 'react-redux';
import { FlightsService } from '../../services/flightsService';
import { AirportService } from '../../services/airportService';
import { DestinationsService } from '../../services/destinationsService';
import Loading from '../loading';

const FlightsAdmin = () => {
    const [update, setUpdate] = useState(false)
    const [flights, setFlights] = useState([])
    const [airport, setAirport] = useState([])
    const [destinations, setDestinations] = useState([])
    const [formValues, setFormValues] = useState([])
    const [formCreate, setFormCreate] = useState({airPortId: '1', destinationId: '1'})
    const loader = useSelector(state => state.loading.loading)
    const dispatch = useDispatch();

    useEffect(() => {
      FlightsService.getFlights().then((res) => {
        setFlights(res.data.data);
      });
    }, [update])

    useEffect(() => {
      AirportService.getAirport().then((res) => {
        setAirport(res.data.data);
      });
      DestinationsService.getDestinations().then((res) => {
        setDestinations(res.data.data);
      });
    }, [])
    
    const updateHandler = async () => {
        dispatch({type: 'PROGRESS'})
        await dispatch(PutFlightsActions(formValues.id,formValues));
        setUpdate(!update)
    }

    const deleteHandler = async (id) => {
        dispatch({type: 'PROGRESS'})
        await dispatch(DeleteFlightsActions(id));
        setUpdate(!update)
    }

    const createHandler = async () => {
        dispatch({type: 'PROGRESS'})
        await dispatch(CreateFlightsActions(formCreate));
        setUpdate(!update)
    }

    const modalHandler = async (id) => {
        const FlightsHit = await FlightsService.getFlightsById(id)
        setFormValues(FlightsHit.data.data)
    }
    
    const onSubmit = (data) => {
      console.log(data)
  }

  return (
    <>
      {loader === true ? <Loading/>: ''}
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Flights</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" 
            className="btn btn-sm btn-outline-secondary" 
            data-bs-toggle="modal" 
            data-bs-target="#createModalFlights" 
            onClick={()=>setFormCreate(
              {...formCreate, 
              flightNumber:'',
              airLine:'',
              from:'',
              to:'',
              depatureDate:'',
              depatureTime:'',
              arrivalDate:'',
              arrivalTime:'',
              capasity:'',
              })}><PlusCircle className='me-2'/>Add</button>
          </div>
        </div>
      </div>
      <h2>{airport.name}</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Airport</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Flights Number</th>
                  <th scope="col">Airlines</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">depature Date</th>
                  <th scope="col">depature Time</th>
                  <th scope="col">Arrival Date</th>
                  <th scope="col">Arrival Time</th>
                  <th scope="col">Capasity</th>
                  <th scope="col">Type Class</th>
                  <th scope="col">Class Price</th>
                  <th scope="col">Update</th>
                  {/* <th scope="col">Delete</th> */}
                </tr>
              </thead>
              <tbody>
                {flights.map((flights, index) => {
                return (
                <>
                    <tr>
                    <td>{index + 1}</td>
                    <td>{flights.airPortId}</td>
                    <td>{flights.destinationId}</td>
                    <td>{flights.flightNumber}</td>
                    <td>{flights.airLine}</td>
                    <td>{flights.from}</td>
                    <td>{flights.to}</td>
                    <td>{flights.depatureDate}</td>
                    <td>{flights.depatureTime}</td>
                    <td>{flights.arrivalDate}</td>
                    <td>{flights.arrivalTime}</td>
                    <td>{flights.capasity}</td>
                    <td>{flights.typeOfClass}</td>
                    <td>{flights.ClassPrice}</td>
                    {/* MODAL */}
                        {/* <!-- Button trigger modal --> */}
                        <td>
                          <PencilSquare 
                          data-bs-toggle="modal" 
                          onClick={()=>modalHandler(flights.id)} 
                          data-bs-target='#editModal' 
                          size={20}/>
                        </td>
                        {/* <td><Trash onClick={()=>deleteHandler(flights.id)} size={20}  /></td> */}
                    </tr>
                </>
              )
            })}
              </tbody>
            </table>
            {/* <!-- Modal Create --> */}
              <div className="modal fade" id="createModalFlights" aria-labelledby="Modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="Modal">Create Flights</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form className="" onSubmit={onSubmit}>
                          <div className="modal-body">
                              <div className="row">
                                  <div className="col-md-6">
                                  <div className="form-group mb-3">
                                      <label htmlFor="" className="mb-2">Airport</label>
                                      <select 
                                      className="form-select" 
                                      onChange={(e)=> setFormCreate({...formCreate,airPortId: e.target.value})}>
                                      {airport.map((airport) => {
                                      return (
                                      <>
                                          <option key={airport.id} value={airport.id}>{airport.name}</option>
                                      </> 
                                      )})}
                                      </select>
                                  </div>
                                  <div className="form-group mb-3">
                                    <label htmlFor="" className="mb-2">Destination</label>
                                    <select 
                                    className="form-select" 
                                    onChange={(e)=> setFormCreate({...formCreate,destinationId: e.target.value})}>
                                    {destinations.map((destinations) => {
                                    return (
                                    <>
                                        <option key={destinations.id} value={destinations.id}>{destinations.nameDestination}</option>
                                    </> 
                                    )})}
                                  </select>
                                  </div>
                                  <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Flight Number</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,flightNumber: e.target.value})} 
                                        value={formCreate.flightNumber}
                                        maxLength="7" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">AirLine</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" onChange={(e)=> setFormCreate({...formCreate,airLine: e.target.value})} 
                                        value={formCreate.airLine}/>
                                    </div>
                                    <div className="form-group mb-3">
                                      <label htmlFor="" className="mb-2">From</label>
                                      <select 
                                      className="form-select" 
                                      onChange={(e)=> setFormCreate({...formCreate,from: e.target.value})}>
                                      {airport.map((airport) => {
                                      return (
                                      <>
                                          <option key={airport.id} value={airport.name}>{airport.name}</option>
                                      </> 
                                      )})}
                                      </select>
                                    </div>
                                    <div className="form-group mb-3">
                                      <label htmlFor="" className="mb-2">To</label>
                                      <select 
                                      className="form-select" 
                                      onChange={(e)=> setFormCreate({...formCreate,to: e.target.value})}>
                                      {airport.map((airport) => {
                                      return (
                                      <>
                                          <option key={airport.id} value={airport.name}>{airport.name}</option>
                                      </> 
                                      )})}
                                      </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Capasity</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,capasity: e.target.value})} 
                                        value={formCreate.capasity} />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">depature Date</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="date" 
                                        onChange={(e)=> setFormCreate({...formCreate,depatureDate: e.target.value})} 
                                        value={formCreate.depatureDate} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">depature Time</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="time" 
                                        onChange={(e)=> setFormCreate({...formCreate,depatureTime: e.target.value})} 
                                        value={formCreate.depatureTime} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Arrival Date</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="date" 
                                        onChange={(e)=> setFormCreate({...formCreate,arrivalDate: e.target.value})} 
                                        value={formCreate.arrivalDate} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Arrival Time</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="time" 
                                        onChange={(e)=> setFormCreate({...formCreate,arrivalTime: e.target.value})} 
                                        value={formCreate.arrivalTime} />
                                    </div>
                                    <div className="form-group mb-3">
                                      <label htmlFor="" className="mb-2">Type Class</label>
                                      <select 
                                      className="form-select" 
                                      onChange={(e)=> setFormCreate({...formCreate,typeOfClass: e.target.value})}
                                      value={formCreate.typeOfClass}>
                                      <option >Type Of Class</option>
                                      <option value={'Economy Class'}>Economy Class</option>
                                      <option value={'Business Class'}>Bussines Class</option>
                                      <option value={'First Class'}>First Class</option>
                                      </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Class Price</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,ClassPrice: e.target.value})} 
                                        value={formCreate.ClassPrice} />
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" className="btn btn-primary" onClick={createHandler}>Save changes</button>
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          {/* <!-- Modal Edit --> */}
          
                {/* <!-- Modal --> */}
                    <div className="modal fade" id='editModal' aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Flights</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <form className="" onSubmit={onSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Airport</label>
                                            <select 
                                            className="form-select" 
                                            onChange={(e)=> setFormValues({...formValues,airPortId: e.target.value})}
                                            value={formValues.airPortId}>
                                            {airport.map((airport) => {
                                            return (
                                            <>
                                                    <option key={airport.id} value={airport.id}>{airport.name}</option>
                                            </> 
                                            )})}
                                            </select>
                                        </div>
                                        <div className="form-group mb-3">
                                          <label htmlFor="" className="mb-2">Destination</label>
                                          <select 
                                          className="form-select" 
                                          onChange={(e)=> setFormValues({...formValues,destinationId: e.target.value})}
                                          value={formValues.destinationId}>
                                          {destinations.map((destinations) => {
                                          return (
                                          <>
                                              <option key={destinations.id} value={destinations.id}>{destinations.nameDestination}</option>
                                          </> 
                                          )})}
                                        </select>
                                        </div>
                                        <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2" >Flight Number</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="text" 
                                              onChange={(e)=> setFormValues({...formValues,flightNumber: e.target.value})} 
                                              value={formValues.flightNumber}
                                              maxLength="7" />
                                          </div>
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">AirLine</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="text" 
                                              onChange={(e)=> setFormValues({...formValues,airLine: e.target.value})} 
                                              value={formValues.airLine}/>
                                          </div>
                                          <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">From</label>
                                            <select 
                                            className="form-select" 
                                            onChange={(e)=> setFormValues({...formValues,from: e.target.value})}
                                            value={formValues.from}>
                                            {airport.map((airport) => {
                                            return (
                                            <>
                                                    <option key={airport.id} value={airport.name}>{airport.name}</option>
                                            </> 
                                            )})}
                                            </select>
                                          </div>
                                          <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">To</label>
                                            <select 
                                            className="form-select" 
                                            onChange={(e)=> setFormValues({...formValues,to: e.target.value})}
                                            value={formValues.to}>
                                            {airport.map((airport) => {
                                            return (
                                            <>
                                                    <option key={airport.id} value={airport.name}>{airport.name}</option>
                                            </> 
                                            )})}
                                            </select>
                                          </div>
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">Capasity</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="text" 
                                              onChange={(e)=> setFormValues({...formValues,capasity: e.target.value})} 
                                              value={formValues.capasity} />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">depature Date</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="date" 
                                              onChange={(e)=> setFormValues({...formValues,depatureDate: e.target.value})} 
                                              value={formValues.depatureDate} />
                                          </div>
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">depature Time</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="time" 
                                              onChange={(e)=> setFormValues({...formValues,depatureTime: e.target.value})} 
                                              value={formValues.depatureTime} />
                                          </div>
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">Arrival Date</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="date" 
                                              onChange={(e)=> setFormValues({...formValues,arrivalDate: e.target.value})} 
                                              value={formValues.arrivalDate} />
                                          </div>
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">Arrival Time</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="time" 
                                              onChange={(e)=> setFormValues({...formValues,arrivalTime: e.target.value})} 
                                              value={formValues.arrivalTime} />
                                          </div>
                                          <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Type Class</label>
                                            <select 
                                            className="form-select" 
                                            onChange={(e)=> setFormValues({...formValues,typeOfClass: e.target.value})}
                                            value={formValues.typeOfClass}>
                                            <option >Type Of Class</option>
                                            <option value={'Economy Class'}>Economy Class</option>
                                            <option value={'Business Class'}>Bussines Class</option>
                                            <option value={'First Class'}>First Class</option>
                                            </select>
                                          </div>
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">Class Price</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="text" 
                                              onChange={(e)=> setFormValues({...formValues,ClassPrice: e.target.value})} 
                                              value={formValues.ClassPrice} />
                                          </div>
                                      </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
    </main>
    </>
  )
}

export default FlightsAdmin
