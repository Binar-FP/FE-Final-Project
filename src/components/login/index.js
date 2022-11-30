import React, {useState} from 'react'
import './index.css'
import { LoginBg } from '../../assets'
import axios from 'axios';

const LoginComponent = () => {
    const [formLogin,setFormLogin] = useState({
        email: '',
        password: ''
    });

    const handleFormChange = (event) => {
        console.log(event.target.name);
        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value
        })
    }

    const postLogin = () => {
        axios.post('http://localhost:8000/login', formLogin)
        .then((response) => {
            console.log(response);
        });
    }

    const handleSubmit = () => {
        postLogin();
    }

  return (
    <>
      <div className="d-flex justify-content-center content-login mx-auto">
        <div className="left-login ps-5 pt-5">
                <h3 className="mb-5 text-center">Welcome to FlyWithMe</h3>
                <div className="form-group mb-3">
                    <label htmlFor="" className="mb-2">Email</label>
                    <input className="form-control ps-4" type="text" placeholder="Enter your Email" name='email' aria-label="" onChange={handleFormChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="" className="mb-2">Password</label>
                    <input className="form-control ps-4" type="password" placeholder="**************" name='password' aria-label="" onChange={handleFormChange}/>
                </div>
                <div className="form-group mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Remember Me
                        </label>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <button className="button form-control" placeholder="Default input" onClick={handleSubmit} aria-label="default input example">Login</button>   
                </div>
                <div className="form-group mb-3">
                    <button className="form-control" type="submit" placeholder="Default input" aria-label="default input example">Login with Google</button>   
                </div>
                <p className="text-center">Don't Have account? <a href="/register" className="text-danger"> Sign Up</a></p>
        </div>
        <div className="right-login">
            <div className="plane d-flex justify-content-center align-items-center">
                <img src={LoginBg} alt="" className='plane-img'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoginComponent
