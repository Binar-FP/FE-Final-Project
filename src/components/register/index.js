import './index.css'
import { RegisterBg } from '../../assets'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } ,getValues} = useForm();

    const onSubmit = (data) => {
        axios.post('https://flywithme-be.up.railway.app/api/register', data)
        .then((response) => {
            console.log(response.data);
            SweatAlert('Register Berhasil', 'success');
            navigate('/login');
        }).catch(function (error) {
            console.log(error);
            if(error){
                SweatAlert(String(error.response.data.message), 'warning')
            }
        });
    }

    const SweatAlert = (title,icon) => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: title,
            icon: icon,
            confirmButtonText: 'Oke'
            })
    }

    console.log(errors);

  return (
    <>
    <div className="d-flex justify-content-center content mx-auto">
        <div className="left ps-5 pt-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="mb-5 text-center">Create Account</h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group mb-3">
                        <label className="mb-2">First Name</label>
                        <input className={errors.firstName?"form-control ps-4 border-danger":"form-control ps-4"} 
                        type="text" placeholder="Enter your First Name" 
                        aria-label="" 
                        name='firstName'
                        {...register('firstName',{
                            required: "First Name is Required",
                            maxLength: {
                                value: 15,
                                message: "Name Too Long",
                            },
                       })}/>
                       {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2">Email</label>
                        <input className={errors.email?"form-control ps-4 border-danger":"form-control ps-4"} 
                        type="text" 
                        placeholder="Enter your Email" 
                        aria-label="" 
                        name='email'
                        {...register('email',{
                            required: "Email is Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Please input true email.",
                            }
                       })}/>
                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2">NIK</label>
                        <input className={errors.NIK?"form-control ps-4 border-danger":"form-control ps-4"} 
                        type="text" 
                        placeholder="Enter your NIK" 
                        aria-label="" 
                        name='NIK'
                        {...register('NIK',{
                            required: "Email is Required",
                            maxLength: {
                                value: 16,
                                message: "NIK Too Long",
                            },
                        })}/>
                        {errors.NIK && <p className="text-danger">{errors.NIK.message}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2">Password</label>
                        <input className={errors.password?"form-control ps-4 border-danger":"form-control ps-4"}
                        type="password" 
                        placeholder="**************" 
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
                </div>
                <div className="col-6">
                    <div className="form-group mb-3">
                        <label className="mb-2">Last Name</label>
                        <input className={errors.lastName?"form-control ps-4 border-danger":"form-control ps-4"} 
                        type="text" 
                        placeholder="Enter Your Last Name" 
                        aria-label="" 
                        name='lastName'
                        {...register('lastName',{
                            required: "Last Name is Required",
                        })}/>
                        {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2">Date of Birth</label>
                        <input className={errors.dateOfBirth?"form-control ps-4 border-danger":"form-control ps-4"}
                        type="date" 
                        placeholder="mm/dd/yy" 
                        aria-label="" 
                        name='dateOfBirth'
                        {...register('dateOfBirth',{
                            required: "Date Of Birth is Required",
                        })}/>
                        {errors.dateOfBirth && <p className="text-danger">{errors.dateOfBirth.message}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2">Phone Number</label>
                        <input className={errors.phoneNumber?"form-control ps-4 border-danger":"form-control ps-4"}
                        type="number" 
                        placeholder="Enter Your Phone Number" 
                        aria-label="" 
                        name='phoneNumber'
                        {...register('phoneNumber',{
                            required: "Phone Number is Required",
                            minLength: {
                                value: 12,
                                message: "Phone Number Too Short",
                            },
                            maxLength: {
                                value: 13,
                                message: "Phone Number Too Long",
                            },
                        })}/>
                        {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber.message}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2">Confirm Password</label>
                        <input className={errors.confirmPassword?"form-control ps-4 border-danger":"form-control ps-4"}
                        type="password" 
                        placeholder="**************" 
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
                </div>
                <div className="form-group mb-3">
                    <label className="mb-2">Address</label>
                    <textarea className={errors.address?"form-control border-danger":"form-control"} 
                    placeholder="Enter your address here" 
                    id="floatingTextarea2" 
                    name='address'
                    {...register('address',{
                        required: "Adress is Required",
                        minLength: {
                            value: 8,
                            message: "Address Too Short",
                        },
                    })}></textarea>
                    {errors.address && <p className="text-danger">{errors.address.message}</p>}
                </div>
                <div className="form-group mb-2">
                    <div className="form-check">
                        <input className="form-check-input" 
                        type="checkbox" value="" id="rememberMe"/>
                        <label className="form-check-label" htmlFor="rememberMe">
                        Remember Me
                        </label>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <div className="form-check">
                        <input className="form-check-input" 
                        type="checkbox" value="" id="privatePolicy"/>
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
