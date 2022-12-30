import React, { useEffect, useState } from 'react'
import { PencilSquare, PlusCircle, Trash, } from 'react-bootstrap-icons'
import { PutUsersActions, DeleteUsersActions, CreateUsersActions } from '../../config/redux/actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
import { UsersService } from '../../services/usersService';
import Loading from '../loading';
import './user.css'

const UsersManagement = () => {
    const [update, setUpdate] = useState(false)
    const [users, setUsers] = useState([])
    const [formValues, setFormValues] = useState([])
    const [formCreate, setFormCreate] = useState({airPortId: '1', destinationId: '1'})
    const loader = useSelector(state => state.loading.loading)
    const dispatch = useDispatch();

    useEffect(() => {
      UsersService.getUsers().then((res) => {
        setUsers(res.data.data);
      });
    }, [update])
    
    const updateHandler = async () => {
         dispatch({type: 'PROGRESS'})
        await dispatch(PutUsersActions(formValues.id,formValues));
        setUpdate(!update)
    }

    const deleteHandler = async (id) => {
        await dispatch(DeleteUsersActions(id));
        dispatch({type: 'PROGRESS'})
        setUpdate(!update)
    }

    const createHandler = async () => {
        await dispatch(CreateUsersActions(formCreate));
        dispatch({type: 'PROGRESS'})
        setUpdate(!update)
    }

    const modalHandler = async (id) => {
        const UserssHit = await UsersService.getUsersById(id)
        setFormValues(UserssHit.data.data)
    }
    
    console.log(formValues)
    const onSubmit = (data) => {
      console.log(data)
  }

  return (
    <>
    {loader === true ? <Loading/>: ''}
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Users</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" 
            className="btn btn-sm btn-outline-secondary" 
            data-bs-toggle="modal" 
            data-bs-target="#createModalUsers" 
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
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">NIK</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Image</th>
                  <th scope="col">Date Of Birth</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Role Id</th>
                  <th scope="col">Status Account</th>
                  <th scope="col">Google ID</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((users) => {
                return (
                <>
                    <tr>
                    <td>{users.id}</td>
                    <td>{users.email}</td>
                    <td>{users.password}</td>
                    <td>{users.firstName}</td>
                    <td>{users.lastName}</td>
                    <td>{users.NIK}</td>
                    <td>{users.address}</td>
                    <td>{users.phoneNumber}</td>
                    <td><img className='img-user' src={users.image} alt='' /></td>
                    <td>{users.dateOfBirth}</td>
                    <td>{users.gender}</td>
                    <td>{users.roleId}</td>
                    <td>{users.verified === true ? 'Actived':'Not Active'}</td>
                    <td>{users.googleId}</td>
                    {/* MODAL */}
                        {/* <!-- Button trigger modal --> */}
                        <td>
                          <PencilSquare 
                          data-bs-toggle="modal" 
                          onClick={()=>modalHandler(users.id)} 
                          data-bs-target='#editModal' 
                          size={20}/>
                        </td>
                        <td><Trash onClick={()=>deleteHandler(users.id)} size={20}  /></td>
                    </tr>
                </>
              )
            })}
              </tbody>
            </table>
            {/* <!-- Modal Create --> */}
              <div className="modal fade" id="createModalUsers" aria-labelledby="Modal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="Modal">Create Users</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form className="" onSubmit={onSubmit}>
                          <div className="modal-body">
                              <div className="row">
                                  <div className="col-md-6">
                                  <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Email</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="email" 
                                        onChange={(e)=> setFormCreate({...formCreate,email: e.target.value})} 
                                        value={formCreate.email}
                                        maxLength="7" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Password</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" onChange={(e)=> setFormCreate({...formCreate,password: e.target.value})} 
                                        value={formCreate.password}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">First Name</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,firstName: e.target.value})} 
                                        value={formCreate.firstName} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Last Name</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,lastName: e.target.value})} 
                                        value={formCreate.lastName} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">NIK</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,NIK: e.target.value})} 
                                        value={formCreate.NIK} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Phone Number</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,phoneNumber: e.target.value})} 
                                        value={formCreate.phoneNumber} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Address</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,address: e.target.value})} 
                                        value={formCreate.address} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Gender</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="text" 
                                        onChange={(e)=> setFormCreate({...formCreate,gender: e.target.value})} 
                                        value={formCreate.gender} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Date of Birth</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="date" 
                                        onChange={(e)=> setFormCreate({...formCreate,dateOfBirth: e.target.value})} 
                                        value={formCreate.dateOfBirth} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Image</label>
                                        <input 
                                        className="form-control ps-4" 
                                        type="file" 
                                        onChange={(e)=> setFormCreate({...formCreate,image: e.target.files[0]})} />
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
                            <h5 className="modal-title" id="exampleModalLabel">Update Users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                            <form className="" onSubmit={onSubmit}>
                                <div className="modal-body">
                                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Email</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="email" 
                                            onChange={(e)=> setFormValues({...formValues,email: e.target.value})} 
                                            value={formValues.email}
                                            maxLength="7" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Password</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="text" onChange={(e)=> setFormValues({...formValues,password: e.target.value})} 
                                            value={formValues.password}/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">First Name</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="text" 
                                            onChange={(e)=> setFormValues({...formValues,firstName: e.target.value})} 
                                            value={formValues.firstName} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Last Name</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="text" 
                                            onChange={(e)=> setFormValues({...formValues,lastName: e.target.value})} 
                                            value={formValues.lastName} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">NIK</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="text" 
                                            onChange={(e)=> setFormValues({...formValues,NIK: e.target.value})} 
                                            value={formValues.NIK} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Phone Number</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="text" 
                                            onChange={(e)=> setFormValues({...formValues,phoneNumber: e.target.value})} 
                                            value={formValues.phoneNumber} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Address</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="text" 
                                            onChange={(e)=> setFormValues({...formValues,address: e.target.value})} 
                                            value={formValues.address} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Gender</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="text" 
                                            onChange={(e)=> setFormValues({...formValues,gender: e.target.value})} 
                                            value={formValues.gender} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Date of Birth</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="date" 
                                            onChange={(e)=> setFormValues({...formValues,dateOfBirth: e.target.value})} 
                                            value={formValues.dateOfBirth} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="" className="mb-2">Image</label>
                                            <input 
                                            className="form-control ps-4" 
                                            type="file" 
                                            onChange={(e)=> setFormValues({...formValues,image: e.target.files[0]})}/>
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

export default UsersManagement
