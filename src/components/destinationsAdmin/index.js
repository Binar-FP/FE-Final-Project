import React, { useEffect, useState } from 'react'
import './destinationsAdmin.css'
import { PencilSquare, PlusCircle, Trash, } from 'react-bootstrap-icons'
import { PutDestinationsActions, DeleteDestinationsActions, CreateDestinationsActions } from '../../config/redux/actions/destinationsActions';
import { DestinationsService } from '../../services/destinationsService';
import { useDispatch } from 'react-redux';


const DestinationsAdmin = () => {
    const [update, setUpdate] = useState(false)
    const [destinations, setDestinations] = useState([])
    const [formCreate, setFormCreate] = useState({userId: 1})
    const [formValues, setFormValues] = useState({})
    const dispatch = useDispatch();
    
    useEffect(() => {
        DestinationsService.getDestinations().then((res) => {
          setDestinations(res.data.data)
        })
    }, [update])
    
    console.log(formValues)
    const updatehandler = async () => {
        await dispatch(PutDestinationsActions(formValues.id,formValues));
        setUpdate(!update)
        // window.location.reload(true);
    }

    const deleteHandler = async (id) => {
        await dispatch(DeleteDestinationsActions(id));
        setUpdate(!update)
        // window.location.reload(false);
    }

    const createHandler = async () => {
        await dispatch(CreateDestinationsActions(formValues));
        setUpdate(!update)
        // window.location.reload(true);
    }

    const modalHandler = async (id) => {
      const DestinationsHit = await DestinationsService.getDestinationsById(id)
      setFormValues(DestinationsHit.data.data)
  }

  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Destinations</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" 
            className="btn btn-sm btn-outline-secondary" 
            data-bs-toggle="modal" 
            data-bs-target="#createModal"
            onClick={()=>setFormCreate(
              {...formCreate, 
                nameDestination:'',
                imageDestination:'',
              })}>
              <PlusCircle className='me-2'/>Add</button>
          </div>
        </div>
      </div>
      {/* <h2>Section title</h2> */}
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name Destination</th>
                  <th scope="col">Image</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {destinations.map((destinations) => {
                return (
                <>
                    <tr>
                    <td>{destinations.id}</td>
                    <td>{destinations.nameDestination}</td>
                    <td><img className='img-destinations' alt='' src={destinations.imageDestination} /></td>
                    {/* MODAL */}
                        {/* <!-- Button trigger modal --> */}
                        <td><PencilSquare 
                        data-bs-toggle="modal" 
                        onClick={()=>modalHandler(destinations.id)} 
                        data-bs-target='#editModal'
                        size={20}  /></td>
                        <td><Trash onClick={()=>deleteHandler(destinations.id)} size={20}  /></td>
                    </tr>
                </>
              )
            })}
              </tbody>
            </table>
            {/* <!-- Modal Create --> */}
              <div className="modal fade" id="createModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Create destinations</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className="">
                      <label htmlFor="" className="mb-2">Name</label>
                      <input 
                      placeholder='Name destinations' 
                      onChange={(e)=> setFormCreate({...formCreate,nameDestination: e.target.value, id :destinations.id})} 
                      className="form-control" 
                      name='name' 
                      type="text"/>
                      <label htmlFor="" className="mb-2">Code</label>
                      <input 
                      placeholder='Image destinations'
                      onChange={(e)=> setFormCreate({...formCreate,imageDestination: e.target.files[0], id :destinations.id})} 
                      className="form-control" 
                      name='image' 
                      type="file"/>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={createHandler}>Create</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          {/* <!-- Modal Edit --> */}
          <div className="modal fade" id='editModal' aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Update Destinations</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
                  <form className="">
                      <div className="modal-body">
                              <label htmlFor="" className="mb-2">Name Destinations</label>
                              <input 
                              defaultValue={destinations.nameDestination} 
                              onChange={(e)=> setFormValues({...formValues,nameDestination: e.target.value})} 
                              className="form-control" 
                              name='namnameDestinatione' 
                              type="text"
                              value={formValues.nameDestination}/>
                              <label htmlFor="" className="mb-2">Image Destination</label>
                              {/* <img className='img-destinations' src={destinations.imageDestination} alt=""/> */}
                              <input 
                              onChange={(e)=> setFormValues({...formValues,imageDestination: e.target.files[0]})} 
                              className="form-control" 
                              name='imageDestination' 
                              type="file"/>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updatehandler}>Save changes</button>
                      </div>
                  </form>
              </div>
          </div>
          </div>
    </main>
    </>
  )
}

export default DestinationsAdmin
