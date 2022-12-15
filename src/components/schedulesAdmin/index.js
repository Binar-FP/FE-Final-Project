import React, { useEffect, useState } from 'react'
import { PencilSquare, PlusCircle, Trash, } from 'react-bootstrap-icons'
import { PutSchedulesActions, DeleteSchedulesActions, CreateSchedulesActions } from '../../config/redux/actions/schedulesActions';
import { useDispatch } from 'react-redux';
import { SchedulesService } from '../../services/schedulesService';

const SchedulesAdmin = () => {
    const [update, setUpdate] = useState(false)
    const [schedules, setSchedules] = useState([])
    const [formValues, setFormValues] = useState([])
    const [formCreate, setFormCreate] = useState({airPortId: '1', destinationId: '1'})
    const dispatch = useDispatch();

    useEffect(() => {
      SchedulesService.getSchedules().then((res) => {
        setSchedules(res.data.data);
      });
    }, [update])
    
    const updateHandler = async () => {
        await dispatch(PutSchedulesActions(formValues.id,formValues));
        setUpdate(!update)
    }

    const deleteHandler = async (id) => {
        await dispatch(DeleteSchedulesActions(id));
        setUpdate(!update)
    }

    const createHandler = async () => {
        await dispatch(CreateSchedulesActions(formCreate));
        setUpdate(!update)
    }

    const modalHandler = async (id) => {

        const SchedulessHit = await SchedulesService.getSchedulesById(id)
        setFormValues(SchedulessHit.data.data)
    }
    
    const onSubmit = (data) => {
      console.log(data)
  }

  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Schedules</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" 
            className="btn btn-sm btn-outline-secondary" 
            data-bs-toggle="modal" 
            data-bs-target="#createModalSchedules" 
            onClick={()=>setFormCreate(
              {...formCreate, 
                dateFlight:'',
                timeDepart:'',
                timeLand:'',
                currentPrice:''
              })}><PlusCircle className='me-2'/>Add</button>
          </div>
        </div>
      </div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date Flight</th>
                  <th scope="col">Time Depart</th>
                  <th scope="col">Time Land</th>
                  <th scope="col">Current Price</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((schedules) => {
                return (
                <>
                    <tr>
                    <td>{schedules.id}</td>
                    <td>{schedules.dateFlight}</td>
                    <td>{schedules.timeDepart}</td>
                    <td>{schedules.timeLand}</td>
                    <td>{schedules.currentPrice}</td>
                    {/* MODAL */}
                        {/* <!-- Button trigger modal --> */}
                        <td>
                          <PencilSquare 
                          data-bs-toggle="modal" 
                          onClick={()=>modalHandler(schedules.id)} 
                          data-bs-target='#editModal' 
                          size={20}/>
                        </td>
                        <td><Trash onClick={()=>deleteHandler(schedules.id)} size={20}  /></td>
                    </tr>
                </>
              )
            })}
              </tbody>
            </table>
            {/* <!-- Modal Create --> */}
              <div className="modal fade" id="createModalSchedules" aria-labelledby="Modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="Modal">Create Schedules</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form className="" onSubmit={onSubmit}>
                          <div className="modal-body">
                              <div className="row">
                                  <div className="col-md-6">
                                  <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Date Flight</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="date" 
                                        onChange={(e)=> setFormCreate({...formCreate,dateFlight: e.target.value})} 
                                        value={formCreate.dateFlight}
                                        maxLength="7" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Time Depart</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="time" onChange={(e)=> setFormCreate({...formCreate,timeDepart: e.target.value})} 
                                        value={formCreate.timeDepart}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Time Land</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="time" 
                                        onChange={(e)=> setFormCreate({...formCreate,timeLand: e.target.value})} 
                                        value={formCreate.timeLand} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Current Price</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,currentPrice: e.target.value})} 
                                        value={formCreate.currentPrice} />
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
                    <div className="modal-dialog modal-dialog-centered modal-md">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Schedules</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <form className="" onSubmit={onSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2" >Date Flight</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="date" 
                                              onChange={(e)=> setFormValues({...formValues,dateFlight: e.target.value})} 
                                              value={formValues.dateFlight}
                                              maxLength="7" />
                                          </div>
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">Time Depart</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="time" 
                                              onChange={(e)=> setFormValues({...formValues,timeDepart: e.target.value})} 
                                              value={formValues.timeDepart}/>
                                          </div>
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">TimeLand</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="time" 
                                              onChange={(e)=> setFormValues({...formValues,timeLand: e.target.value})} 
                                              value={formValues.timeLand} />
                                          </div>
                                          <div className="form-group mb-3">
                                              <label htmlFor="" className="mb-2">Current Price</label>
                                              <input 
                                              className="form-control ps-4" 
                                              type="text" 
                                              onChange={(e)=> setFormValues({...formValues,currentPrice: e.target.value})} 
                                              value={formValues.currentPrice} />
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

export default SchedulesAdmin
