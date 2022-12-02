import React, {useState} from 'react'
import './index.css'
import { LoginBg } from '../../assets'
import axios from 'axios';
import { useForm } from 'react-hook-form';

const LoginComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formLogin, setFormLogin] = useState();
    const onSubmit = (data) => {
        setFormLogin(data);
        console.log(data);
        postLogin()
    }

    const postLogin = () => {
        axios.post('https://flywithme-be.up.railway.app/login', formLogin)
        .then((response) => {
            console.log(response);
        });
    }

    console.log(errors);
  return (
    <>
      <div className="d-flex justify-content-center content-login mx-auto">
        <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
            <div className="left-login ps-5 pt-5">
                    <h3 className="mb-5 text-center">Welcome to FlyWithMe</h3>
                    
                    <div className="form-group mb-3">
                        <label htmlFor="" className="mb-2">Email</label>
                        <input className={errors.email?"form-control ps-4 border-danger":"form-control ps-4"}
                         type="text" 
                         placeholder="Enter your Email" 
                         name='email' 
                         aria-label="" 
                         {...register('email',{
                            required: "Please enter your email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Please input true email.",
                            }
                       })}/>
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="" className="mb-2">Password</label>
                        <input className={errors.password?"form-control ps-4 border-danger":"form-control ps-4"} 
                        type="password" 
                        placeholder="**************" 
                        name='password' 
                        aria-label="" 
                        {...register('password',{
                            required: "Please enter your password",
                            minLength: {
                                value: 8,
                                message: "Password Too Short",
                            },
                            maxLength: {
                                value: 18,
                                message: "Password Too Long",
                            },
                            }
                        )}/>
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
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
                        <button className="button form-control" placeholder="Default input" aria-label="default input example">Login</button>   
                    </div>
                    <div className="form-group mb-3">
                        <button className="form-control" type="submit" placeholder="Default input" aria-label="default input example">Login with Google</button>   
                    </div>
                    <p className="text-center">Don't Have account? <a href="/register" className="text-danger"> Sign Up</a></p>
            </div>
        </form>
        
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
