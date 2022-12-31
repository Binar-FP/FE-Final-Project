import React from "react";
import './index.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginAdminActions } from '../../config/redux/actions/authActions';
import { useDispatch } from "react-redux";




const LoginAdminComponent = () => {

  const history = useNavigate();
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();

    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(loginAdminActions(data, history));
    }

  return (
    <>
      <section className="position-relative py-4 py-xl-5">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-8 col-xl-6 text-center mx-auto mt-5">
              <h2>LOGIN ADMIN</h2>
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
                  <form className="text-center" method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <input
                        className={errors.email?"form-control ps-4 border-danger":"form-control ps-4"}
                        type="text"
                        name="email"
                        placeholder="Email"
                        {...register('email',{
                          required: "Please enter your email",
                          pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Please input true email.",
                          }
                     })}
                      />
                      {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                    <div className="mb-3">
                      <input
                        className={errors.password?"form-control ps-4 border-danger":"form-control ps-4"}
                        type="password"
                        name="password"
                        placeholder="Password"
                        {...register('password',{
                          required: "Please enter your password",
                          }
                      )}
                      />
                       {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    </div>
                    <div className="mb-3">
                      <button
                        className={isDirty && isValid?'button form-control':'button form-control opacity-50'}
                        disabled={!isDirty || !isValid}
                        type="submit"
                      >
                        Login
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
  );
};

export default LoginAdminComponent;
