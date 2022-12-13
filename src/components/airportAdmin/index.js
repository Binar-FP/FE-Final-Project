import React, { useEffect, useState } from 'react'
import './airportAdmin.css'
import { PencilSquare, PlusCircle, Trash, } from 'react-bootstrap-icons'
import { getAirportActions, PutAirportActions, DeleteAirportActions, CreateAirportActions } from '../../config/redux/actions/airportActions';
import { useDispatch } from 'react-redux';

const AirportAdmin = () => {
    const [airport, setAirport] = useState([])
    const [formValues, setFormValues] = useState([])
    const dispatch = useDispatch();
    

    const getAirport = async () => {
        const data = await dispatch(getAirportActions());
        setAirport(data.data.data)
    }
    
    useEffect(() => {
        getAirport()
    }, [])
    
    console.log(formValues)
    const updatehandler = async () => {
        await dispatch(PutAirportActions(formValues.id,formValues));
        window.location.reload(true);
    }

    const deleteHandler = async (id) => {
        await dispatch(DeleteAirportActions(id));
        window.location.reload(false);
    }

    const createHandler = async () => {
        await dispatch(CreateAirportActions(formValues));
        window.location.reload(true);
    }

  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Airport</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#createModal"><PlusCircle className='me-2'/>Add</button>
          </div>
        </div>
      </div>
      {/* <h2>Section title</h2> */}
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Code</th>
                  <th scope="col">City</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {airport.map((airport) => {
                return (
                <>
                    <tr>
                    <td>{airport.id}</td>
                    <td>{airport.name}</td>
                    <td>{airport.code}</td>
                    <td>{airport.location}</td>
                    {/* MODAL */}
                        {/* <!-- Button trigger modal --> */}
                        <td><PencilSquare data-bs-toggle="modal" onClick={(e)=> setFormValues({...formValues,name: airport.name, id :airport.id, code: airport.code, location: airport.location})} data-bs-target={`#example${airport.id}`} size={20}  /></td>
                        <td><Trash onClick={()=>deleteHandler(airport.id)} size={20}  /></td>
                    </tr>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id={`example${airport.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Airport</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <form className="">
                                <div className="modal-body">
                                        <label htmlFor="" className="mb-2">name</label>
                                        <input defaultValue={airport.name} onChange={(e)=> setFormValues({...formValues,name: e.target.value, id :airport.id})} className="form-control" name='name' type="text"/>
                                        <label htmlFor="" className="mb-2">Code</label>
                                        <input defaultValue={airport.code} maxLength={3} onChange={(e)=> setFormValues({...formValues,code: e.target.value, id :airport.id})} className="form-control" name='code' type="text"/>
                                        <label htmlFor="" className="mb-2">Location</label>
                                        <input defaultValue={airport.location} onChange={(e)=> setFormValues({...formValues,location: e.target.value, id :airport.id})} className="form-control" name='location' type="text"/>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updatehandler}>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </>
              )
            })}
              </tbody>
            </table>
            {/* <!-- Modal Create --> */}
              <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Create Airport</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form className="">
                      <label htmlFor="" className="mb-2">Name</label>
                      <input placeholder='Name Airport' onChange={(e)=> setFormValues({...formValues,name: e.target.value, id :airport.id})} className="form-control" name='name' type="text"/>
                      <label htmlFor="" className="mb-2">Code</label>
                      <input placeholder='Code Airport' maxLength={3} onChange={(e)=> setFormValues({...formValues,code: e.target.value, id :airport.id})} className="form-control" name='code' type="text"/>
                      <label htmlFor="" className="mb-2">Location</label>
                      <input placeholder='location Airport' onChange={(e)=> setFormValues({...formValues,location: e.target.value, id :airport.id})} className="form-control" name='location' type="text"/>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={createHandler}>Create</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    </main>
    </>
  )
}

export default AirportAdmin
