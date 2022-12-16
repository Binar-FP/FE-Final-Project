import React from 'react'
import { Profile } from '../../assets'
import './index.css'
import PersonalDetail from '../PersonalDetail'

const SettingBox = () => {
  return (
    <>
      <div className="container content-profile">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card">
              <div className='mt-4'>
              <img src={Profile} className="d-flex justify-content-center mx-auto rounded-circle profile img-rounded" alt="..."/>
              </div>
              <div className="card-body mx-4">
                  <h5 className="card-title text-center">Anya Forger</h5>
                  <p className="card-text">Anya is a young girl who can read other people's thoughts and is the only one who knows of her family's secrets. She is 4 or 5 years old, but claims to be 6.</p>
              </div>
              <ul className="list-group list-group-flush mx-4">
                  <li className="list-group-item">Personal Details</li>
                  <li className="list-group-item">My Credit Cards</li>
                  <li className="list-group-item">Support</li>
                  <li className="list-group-item">Support</li>
                  <li className="list-group-item">Wallet</li>
                  <li className="list-group-item">Payment history</li>
                  <li className="list-group-item">Logout</li>
              </ul>
            </div>
          </div>

          <PersonalDetail/>

        </div>
      </div>
    </>
  )
}

export default SettingBox