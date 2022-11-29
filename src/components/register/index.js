import React from 'react'
import './index.css'
import { RegisterBg } from '../../assets'

const RegisterComponent = () => {
  return (
    <>
    <div className="d-flex justify-content-center content mx-auto">
        <div className="left ps-5 pt-5">
            <form action="" className="p-4">
                <h3 className="mb-5 text-center">Create Account</h3>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group mb-3">
                            <label for="" className="mb-2">First Name</label>
                            <input className="form-control ps-4" type="text" placeholder="Enter your First Name" aria-label=""/>
                        </div>
                        <div className="form-group mb-3">
                            <label for="" className="mb-2">Email</label>
                            <input className="form-control ps-4" type="text" placeholder="Enter your Email" aria-label=""/>
                        </div>
                        <div className="form-group mb-3">
                          <label for="" className="mb-2">Password</label>
                          <input className="form-control ps-4" type="password" placeholder="**************" aria-label=""/>
                      </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group mb-3">
                            <label for="" className="mb-2">Last Name</label>
                            <input className="form-control ps-4" type="text" placeholder="Enter your Email" aria-label=""/>
                        </div>
                        <div className="form-group mb-3">
                            <label for="" className="mb-2">Date of Birth</label>
                            <input className="form-control ps-4" type="date" placeholder="mm/dd/yy" aria-label=""/>
                        </div>
                        <div className="form-group mb-3">
                          <label for="" className="mb-2">Confirm Password</label>
                          <input className="form-control ps-4" type="password" placeholder="**************" aria-label=""/>
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label className="form-check-label" for="flexCheckDefault">
                          Remember Me
                          </label>
                      </div>
                  </div>
                  <div className="form-group mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" for="flexCheckDefault">
                        I agree to all the Terms and Privacy policy
                        </label>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <button className="form-control button" type="submit" placeholder="Default input" aria-label="default input example">Register</button>   
                  </div>
                  <div className="form-group mb-3">
                    <button className="form-control" type="submit" placeholder="Default input" aria-label="default input example">Login with Google</button>   
                  </div>
                  <p className="text-center">Have account? <a href="/login" className="text-danger"> Sign In</a></p>
                  </div>
            </form>
        </div>
        <div className="right">
            <div className="plane d-flex justify-content-center align-items-center">
                <img src={RegisterBg} alt=""/>
            </div>
        </div>
    </div>
    </>
  )
}

export default RegisterComponent
