import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { resetActions } from '../../config/redux/actions/authActions';
import './reset.css'



const ResetPasswordComponent = (props) => {
    const history = useNavigate();
    const { register, handleSubmit, formState: { errors, isDirty, isValid} ,getValues} = useForm();
    const dispatch = useDispatch();

    
    const onSubmit = (data) => {
        if (props.tokenVerify && props.id) {
          // const token={urlToken :props.tokenVerify, id: props.id};
          // console.log(token);
        // Hit API RESET
        dispatch(resetActions(data, history, props.tokenVerify, props.id));
        }
    }

    
    
  return (
    <>
     <>
      <section className="position-relative py-4 py-xl-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8 col-xl-6 text-center mx-auto mt-5">
              
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-xl-4">
              <div className="card mb-5">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-person"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                    </svg>
                  </div>
                  <form className="text-start" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <h5 className='pb-3 text-center'>Reset Password</h5>
                        {/* <label className="mb-2"></label> */}
                        <input className={errors.password?"form-control ps-4 border-danger":"form-control ps-4"}
                        type="password" 
                        placeholder="Password" 
                        aria-label=""
                        name='password'
                        {...register('password',{
                            required: "Password is Required",
                            minLength: {
                                value: 8,
                                message: "Password Too Short",
                            },
                            maxLength: {
                                value: 18,
                                message: "Password Too Long",
                            },
                            validate: (value) => value === getValues('confirmPassword') || "Password doesn't match",
                            
                        })}/>
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    </div>
                    <div className="form-group mb-3">
                        {/* <label className="mb-2">Confirm Password</label> */}
                        <input className={errors.confirmPassword?"form-control ps-4 border-danger":"form-control ps-4"}
                        type="password" 
                        placeholder="Confirm Password" 
                        aria-label="" 
                        name='passwordConfirm'
                        {...register('confirmPassword',{
                            required: "Password is Required",
                            minLength: {
                                value: 8,
                                message: "Password Too Short",
                            },
                            maxLength: {
                                value: 18,
                                message: "Password Too Long",
                            },
                            validate: (value) => value === getValues('password') || "Password doesn't match",
                        })}/>
                        {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                    </div>
                    <div className="mb-3">
                      <button
                        className={isDirty && isValid?'button form-control':'button form-control opacity-50'}
                        disabled={!isDirty || !isValid}
                        type="submit"
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    </>
  )
}

export default ResetPasswordComponent
