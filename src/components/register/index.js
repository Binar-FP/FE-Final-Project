import React, {useState} from 'react'
import './index.css'
import { RegisterBg } from '../../assets'
import axios from 'axios'

const RegisterComponent = () => {
  const [formRegister,setFormRegister] = useState({
        email:"",
        password:"",
        firstName: "",
        lastName: "",
        NIK: "",
        phoneNumber: "", 
        address: "",
        dateOfBirth:""
    });

    const handleFormChange = (event) => {
        console.log(event.target.value);
        setFormRegister({
            ...formRegister,
            [event.target.name]: event.target.value
        })
    }

    const postRegister = () => {
        axios.post('http://localhost:8000/api/register', formRegister)
        .then((response) => {
            console.log(response);
        });
    }
    console.log(formRegister);
    const handleSubmit = () => {
        postRegister();
    }
  return (
    <>
    <div className="d-flex justify-content-center content mx-auto">
        <div className="left ps-5 pt-5">
          <h3 className="mb-5 text-center">Create Account</h3>
          <div className="row">
              <div className="col-6">
                  <div className="form-group mb-3">
                      <label className="mb-2">First Name</label>
                      <input className="form-control ps-4" type="text" placeholder="Enter your First Name" aria-label="" name='firstName' onChange={handleFormChange}/>
                  </div>
                  <div className="form-group mb-3">
                      <label className="mb-2">Email</label>
                      <input className="form-control ps-4" type="text" placeholder="Enter your Email" aria-label="" name='email' onChange={handleFormChange}/>
                  </div>
                  <div className="form-group mb-3">
                      <label className="mb-2">NIK</label>
                      <input className="form-control ps-4" type="text" placeholder="Enter your NIK" aria-label="" name='NIK' onChange={handleFormChange}/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-2">Password</label>
                    <input className="form-control ps-4" type="password" placeholder="**************" aria-label="" name='password' onChange={handleFormChange}/>
                </div>
              </div>
              <div className="col-6">
                  <div className="form-group mb-3">
                      <label className="mb-2">Last Name</label>
                      <input className="form-control ps-4" type="text" placeholder="Enter your Email" aria-label="" name='lastName' onChange={handleFormChange}/>
                  </div>
                  <div className="form-group mb-3">
                      <label className="mb-2">Date of Birth</label>
                      <input className="form-control ps-4" type="date" placeholder="mm/dd/yy" aria-label="" name='dateOfBirth' onChange={handleFormChange}/>
                  </div>
                  <div className="form-group mb-3">
                      <label className="mb-2">Phone Number</label>
                      <input className="form-control ps-4" type="number" placeholder="Enter Your Phone Number" aria-label="" name='phoneNumber' onChange={handleFormChange}/>
                  </div>
                  <div className="form-group mb-3">
                    <label className="mb-2">Confirm Password</label>
                    <input className="form-control ps-4" type="password" placeholder="**************" aria-label="" name='passwordConfirm' onChange={handleFormChange}/>
                </div>
              </div>
              <div className="form-group mb-3">
                  <label className="mb-2">Address</label>
                  <textarea className="form-control" placeholder="Enter your address here" id="floatingTextarea2" name='address' onChange={handleFormChange}></textarea>
              </div>
              <div className="form-group mb-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="rememberMe"/>
                    <label className="form-check-label" htmlFor="rememberMe">
                    Remember Me
                    </label>
                </div>
              </div>
              <div className="form-group mb-3">
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="privatePolicy"/>
                      <label className="form-check-label" htmlFor="privatePolicy">
                      I agree to all the Terms and Privacy policy
                      </label>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <button className="form-control button" placeholder="Default input" aria-label="default input example" onClick={handleSubmit}>Register</button>   
                </div>
                <div className="form-group mb-3">
                  <button className="form-control" type="submit" placeholder="Default input" aria-label="default input example">Login with Google</button>   
                </div>
                <p className="text-center">Have account? <a href="/login" className="text-danger"> Sign In</a></p>
              </div>
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
