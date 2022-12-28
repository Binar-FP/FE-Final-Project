import React, { useEffect, useState } from 'react'
import './index.css'
import PersonalDetail from '../PersonalDetail'
import History from '../History'
import { UsersService } from '../../services/usersService'
import { useDispatch, useSelector } from 'react-redux'

const SettingBox = () => {
    const [formValues, setFormValues] = useState({});
    const id = useSelector(state => state.auth.id)
    const pages = useSelector(state => state.setting.pages)
    const dispatch = useDispatch();
    
    useEffect(() => {
        UsersService.getUsersById(id).then((res) => {
            console.log(res)
            setFormValues(res.data.data);
            });
    }, [id])
   
  return (
    <>
      <div className="container content-profile">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <div className="card card-profile">
              <div className='mt-4'>
              <img src={formValues.image} className="d-flex justify-content-center mx-auto rounded-circle profile img-rounded" alt="..."/>
              </div>
              <div className="card-body mx-4">
                  <h5 className="card-title text-center">{formValues.firstName}</h5>
                 </div>
              <ul className="list-group list-group-flush mx-4">
                  <li className="list-group-item" onClick={()=>dispatch({type : 'PERSONAL_DETAIL'})}>Personal Details</li>
                  <li className="list-group-item" onClick={()=>dispatch({type : 'HISTORY'})}>Payment history</li>
                  <li className="list-group-item" onClick={()=>dispatch({type : 'LOGOUT'})}>Logout</li>
              </ul>
            </div>
          </div>
          {pages === "personalDetail" ? <PersonalDetail/>:''}
          {pages === "history" ? <History/>:''}

        </div>
      </div>
    </>
  )
}

export default SettingBox
