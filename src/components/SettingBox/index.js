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
    const dispach = useDispatch();

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
            <div className="card">
              <div className='mt-4'>
              <img src={formValues.image} className="d-flex justify-content-center mx-auto rounded-circle profile img-rounded" alt="..."/>
              </div>
              <div className="card-body mx-4">
                  <h5 className="card-title text-center">{formValues.firstName}</h5>
                  {/* <p className="card-text">Anya is a young girl who can read other people's thoughts and is the only one who knows of her family's secrets. She is 4 or 5 years old, but claims to be 6.</p> */}
              </div>
              <ul className="list-group list-group-flush mx-4">
                  <li className="list-group-item" onClick={()=>dispach({type : 'PERSONAL_DETAIL'})}>Personal Details</li>
                  {/* <li className="list-group-item" onClick={()=>dispach({type : 'HELP'})}>Support</li> */}
                  <li className="list-group-item" onClick={()=>dispach({type : 'HISTORY'})}>Payment history</li>
                  <li className="list-group-item" onClick={()=>dispach({type : 'LOGOUT'})}>Logout</li>
              </ul>
            </div>
          </div>
          {pages === "personalDetail" ? <PersonalDetail/>:''}
          {pages === "history" ? <History/>:''}
          {/* {pages === "help" ? <History/>:''} */}
          {/* <History/> */}

        </div>
      </div>
    </>
  )
}

export default SettingBox
