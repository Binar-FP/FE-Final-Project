import './login.css'
import React, { useEffect} from 'react';
import { LoginBg } from '../../assets'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useDispatch} from 'react-redux';
import { loginActions } from '../../config/redux/actions/authActions';



const LoginComponent = () => {
    const history = useNavigate();
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();

    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(loginActions(data, history));
    }
    
    const responseGoogle = (response) => {
        console.log(response);
    }

    useEffect(() => {
        function start(){
            gapi.load('client:auth2', () => {
                gapi.auth2.init({
                    clientId: '310809761322-ci5u1ija6vd0auki4ppqjqghqp1tum18.apps.googleusercontent.com',
                })
            })};
        gapi.load('client:auth2', start);
    })

  return (
    <>
      <div className="d-flex justify-content-center content-login mx-auto">
        <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
            <div className="left-login">
                    {/* {sessionStorage.getItem('isLogged') && <h1>TEST SESSIon</h1>} */}
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
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" {...register('rememberMe',{}
                        )}/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember Me
                            </label>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <button  className={isDirty && isValid?'button form-control':'button form-control opacity-50'} placeholder="Default input" aria-label="default input example" disabled={!isDirty || !isValid}>Login</button>   
                    </div>
                    <div className="form-group mb-3">
                        <GoogleLogin
                            className="form-control btn-google"
                            clientId="905402319799-571q1pqb6tmlmbjubq70eb88tr4308ao.apps.googleusercontent.com"
                            buttonText="Login With Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            // isSignedIn={true}
                        />
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
