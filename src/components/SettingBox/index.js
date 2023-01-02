import React, { useEffect, useState } from 'react'
import './index.css'
import PersonalDetail from '../PersonalDetail'
import History from '../History'
import WishlistComponent from '../WishlistComponent'
import { UsersService } from '../../services/usersService'
import { useDispatch, useSelector } from 'react-redux'
import { logoutActions } from '../../config/redux/actions/authActions';

const SettingBox = () => {
    const [formValues, setFormValues] = useState({});
    const id = useSelector(state => state.auth.id)
    const pages = useSelector(state => state.setting.pages)
    const dispatch = useDispatch();
    const history = useSelector(state => state.auth.history)
    
    useEffect(() => {
        UsersService.getUsersById(id).then((res) => {
            console.log(res)
            setFormValues(res.data.data);
            });
    }, [id])

    const logoutHandle = () => {
      dispatch(logoutActions(history,'buyer'));
    }
   
  return (
    <>
      <div className="container content-profile">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3 profile-box">
            <div className="card card-profile">
              <div className='mt-4'>
              <img src={formValues.image} className="d-flex justify-content-center mx-auto rounded-circle profile img-fluid img-rounded" alt="..."/>
              </div>
              <div className="card-body mx-4">
                  <h5 className="card-title text-center">{formValues.firstName}</h5>
                 </div>
              <ul className="list-group list-group-flush mx-4">
                  <li className="list-group-item" onClick={()=>dispatch({type : 'PERSONAL_DETAIL'})}>Personal Details</li>
                  <li className="list-group-item" onClick={()=>dispatch({type : 'HISTORY'})}>Payment history</li>
                  <li className="list-group-item" onClick={()=>dispatch({type : 'WISHLIST-SETTING'})}>Wishlist</li>
                  <li className="list-group-item" onClick={logoutHandle}>Logout</li>
              </ul>
            </div>
          </div>
          {pages === "personalDetail" ? <PersonalDetail/>:''}
          {pages === "history" ? <History/>:''}
          {pages === "wishlist" ? <WishlistComponent/>:''}

        </div>
      </div>
    </>
  )
}

export default SettingBox
