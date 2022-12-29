import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { UsersService } from '../../services/usersService';
import { updateProfile, updatePassword } from '../../config/redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading';
import './personal.css'

const PersonalDetail = () => {
    const { register, handleSubmit, formState: { errors} ,getValues} = useForm({});
    const [formValues, setFormValues] = useState([]);
    const [validate, setValidate] = useState(false);
    const id = useSelector(state => state.auth.id)
    const loader = useSelector(state => state.loading.loading)
    console.log(loader)

    const history = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({type: 'PROGRESS'})
        UsersService.getUsersById(id).then((res) => {
            setFormValues(res.data.data);
            dispatch({type: 'END'})
            });
    }, [id,dispatch])
    
    const handleUpdate = () => {
        console.log(formValues)
        if(formValues.firstName === ''){
            alert('Please fill in the first name')
        }else if(formValues.NIK === ''){
            alert('Please fill in the NIK')
        }else if(formValues.phoneNumber === ''){
            alert('Please fill in the phone number')
        }else if(formValues.address === ''){
            alert('Please fill in the address')
        }else if(formValues.gender === ''){
            alert('Please fill in the image')
        }else if(formValues.dateOfBirth === ''){
            alert('Please fill in the image')
        }else if(typeof formValues.image === 'object' === false){
            setValidate("Please fill in the image")
        }else{
            dispatch({type: 'PROGRESS'})
            dispatch(updateProfile(id, formValues,   history));
        }
        
    }

    const onSubmit = (data) => {
        console.log(data)
        dispatch({type: 'PROGRESS'})
        dispatch(updatePassword(id, data,history));
    }

  return (
    <>
        <div className="col-md-12 col-lg-9">
            <div className='box-item-profile d-flex justify-content-between'>
                <h4 className='p-4 text-light text-profile'>Profile</h4>
            </div>
            <div className="card-content">
                <div className="card-personal">
                <div className="card-body">
                {loader === true ? <Loading/>: ''}
                <div class="card  body-cardku">
                <div className="card-header fw-bold history-head text-light">
                    <h4>Profile</h4>
                </div>
                    <div class="card-body">
                        <div className="row">
                    <h4 className="mt-4 mb-5 text-center text-mobile">Update Profile</h4>
                        <div className="col-6">
                            <div className="form-group mb-3">
                                <label className="mb-2">First Name</label>
                                <input className="form-control ps-4"
                                type="text" placeholder="Enter your First Name" 
                                aria-label=""
                                required
                                value={formValues.firstName}
                                onChange={(e)=> setFormValues({...formValues,firstName: e.target.value})}  
                                name='firstName'
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="mb-2">Email</label>
                                <input className="form-control ps-4"
                                type="text" 
                                placeholder="Enter your Email" 
                                aria-label=""
                                readOnly 
                                name='email'
                                value={formValues.email}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label className="mb-2">NIK</label>
                                <input className="form-control ps-4"
                                type="text" 
                                placeholder="Enter your NIK" 
                                aria-label="" 
                                name='NIK'
                                required
                                value={formValues.NIK}
                                onChange={(e)=> setFormValues({...formValues,NIK: e.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image Profile</label>
                                <input 
                                className="form-control" 
                                id='image' 
                                required
                                type="file" 
                                onChange={(e)=> setFormValues({...formValues,image: e.target.files[0]})}/>
                                {validate && <p className="text-danger">{validate}</p>}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mb-3">
                                <label className="mb-2">Last Name</label>
                                <input className="form-control ps-4"
                                type="text" 
                                placeholder="Enter Your Last Name" 
                                aria-label="" 
                                name='lastName'
                                value={formValues.lastName}
                                onChange={(e)=> setFormValues({...formValues,lastName: e.target.value})}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="mb-2">Date of Birth</label>
                                <input className="form-control ps-4"
                                type="date" 
                                placeholder="mm/dd/yy" 
                                aria-label="" 
                                name='dateOfBirth'
                                value={formValues.dateOfBirth}
                                onChange={(e)=> setFormValues({...formValues,dateOfBirth: e.target.value})}/>
                            </div>
                            <div className="form-group mb-3">
                                <label className="mb-2">Phone Number</label>
                                <input className="form-control ps-4"
                                type="text" 
                                placeholder="Enter Your Phone Number" 
                                aria-label="" 
                                name='phoneNumber'
                                value={formValues.phoneNumber}
                                onChange={(e)=> setFormValues({...formValues,phoneNumber: e.target.value})}/>
                            </div>
                            <div className="form-check mb-3">
                                {formValues.gender === "Male" ?
                                    <input 
                                    className="form-check-input" 
                                    value={'Male'} 
                                    checked 
                                    type="radio" 
                                    name="gender" 
                                    id="flexRadioDefault1"
                                    onChange={(e)=> setFormValues({...formValues,gender: e.target.value})}/>
                                : <input 
                                    className="form-check-input" 
                                    value={'Male'}  
                                    type="radio" 
                                    name="gender"
                                    onChange={(e)=> setFormValues({...formValues,gender: e.target.value})} 
                                    id="flexRadioDefault1"/>}
                                <label className="form-check-label">
                                    Male
                                </label>
                                </div>
                                <div className="form-check">
                                {formValues.gender === "Female" ?
                                    <input className="form-check-input" 
                                    value={'Female'} 
                                    type="radio" 
                                    checked 
                                    name="gender" 
                                    id="flexRadioDefault2"
                                    onChange={(e)=> setFormValues({...formValues,gender: e.target.value})}/>
                                :
                                <input className="form-check-input" 
                                value={'Female'} 
                                type="radio" 
                                name="gender" 
                                id="flexRadioDefault2"
                                onChange={(e)=> setFormValues({...formValues,gender: e.target.value})}/>}
                                <label className="form-check-label">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-2">Address</label>
                            <textarea className={errors.address?"form-control border-danger":"form-control"} 
                            placeholder="Enter your address here" 
                            id="floatingTextarea2" 
                            name='address'
                            value={formValues.address}
                            onChange={(e)=> setFormValues({...formValues,address: e.target.value})}></textarea>
                            {errors.address && <p className="text-danger">{errors.address.message}</p>}
                        </div>
                            <div className="form-group mb-3">
                            <button className="button form-control text-light" onClick={handleUpdate}>Update</button>   
                            </div>
                        </div>
                    </div>
                </div>
                    {/* Update Password */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="card mt-3">
                    <div className="card-header fw-bold history-head text-light">
                        <h4>Change Password</h4>
                    </div>
                        <div class="card-body ">
                            <div className="row">
                                <h4 className="mt-4 mb-5 text-center text-mobile">Update Password</h4>
                                <div className="col-6">
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
                                            }
                                            
                                        })}/>
                                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group mb-3">
                                        <label className="mb-2">Confirm Password</label>
                                        <input className={errors.confirmPassword?"form-control ps-4 border-danger":"form-control ps-4"}
                                        type="password" 
                                        placeholder="**************" 
                                        aria-label="" 
                                        name='passwordConfirm'
                                        defaultValue={formValues.passwordConfirm}
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
                                    <button className="button form-control text-light" onClick={handleSubmit}>Update Password</button>   
                                    </div>
                            </div>
                        </div>
                    </div>
                    </form>
                    {/* Tutup Update Password */}
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PersonalDetail
