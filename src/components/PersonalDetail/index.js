import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { UsersService } from '../../services/usersService';
import './index.css'

const PersonalDetail = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors} ,getValues} = useForm();
    const [formValues, setFormValues] = useState({});
    const id = useSelector(state => state.auth.id)

    useEffect(() => {
        UsersService.getUsersById(id).then((res) => {
            console.log(res)
            setFormValues(res.data.data);
            });
    }, [id,loading])

    const onSubmit = (data) => {
        setLoading(true);
        const updatedObject = {
            ...data,
            image:data.image[0]
          };
        console.log(updatedObject);
        axios.put(`http://www.flywithme-api.me/api/users/update/${id}`, updatedObject,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .finally(() => {
            setLoading(false);
        })
        .then((response) => {
            console.log(response.data);
            SweatAlert('Update Berhasil', 'success');
        }).catch(function (error) {
            console.log(error);
            if(error){
                SweatAlert(String(error.response.data.message), 'warning')
            }
        });

        const SweatAlert = (title,icon) => {
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: title,
                icon: icon,
                confirmButtonText: 'Oke'
                })
        }
    }

  return (
    <>
      <div className="col-12 col-md-8">
            <div className="card">
              <div className="card-header fw-bold bg-color">
                Personal Details
              </div>
              <div className="card-body">
              <form className="" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
              {loading === true ? <div id="cover-spin"></div>: ''}
            <div className="row">
                <div className="col-6">
                    <div className="form-group mb-3">
                        <label className="mb-2">First Name</label>
                        <input className={errors.firstName?"form-control ps-4 border-danger":"form-control ps-4"} 
                        type="text" placeholder="Enter your First Name" 
                        aria-label=""
                        defaultValue={formValues.firstName} 
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
                        readOnly 
                        name='email'
                        value={formValues.email}
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
                        defaultValue={formValues.NIK}
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
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Image Profile</label>
                        <input class="form-control" type="file" id="formFile" {...register("image")}/>
                        <input class="form-control" type="hidden" value={formValues.roleId} id="formFile" {...register("roleId")}/>
                        <input class="form-control" type="hidden" name='id' value={formValues.id} {...register("id")}/>
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
                        defaultValue={formValues.lastName}
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
                        defaultValue={formValues.dateOfBirth}
                        {...register('dateOfBirth',{
                            required: "Date Of Birth is Required",
                        })}/>
                        {errors.dateOfBirth && <p className="text-danger">{errors.dateOfBirth.message}</p>}
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-2">Phone Number</label>
                        <input className={errors.phoneNumber?"form-control ps-4 border-danger":"form-control ps-4"}
                        type="text" 
                        placeholder="Enter Your Phone Number" 
                        aria-label="" 
                        name='phoneNumber'
                        defaultValue={formValues.phoneNumber}
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
                    <div class="form-check mb-3">
                        {formValues.gender === "Male" ?
                            <input class="form-check-input" value={'Male'} checked type="radio" name="gender" id="flexRadioDefault1"{...register('gender',{
                            required: "Date Of Birth is Required",
                        })}/>
                        : <input class="form-check-input" value={'Male'}  type="radio" name="gender" id="flexRadioDefault1"{...register('gender',{
                            required: "Date Of Birth is Required",
                        })}/>}
                        <label class="form-check-label" for="flexRadioDefault1">
                            Male
                        </label>
                        </div>
                        <div class="form-check">
                        {formValues.gender === "Female" ?
                            <input class="form-check-input" value={'Female'} type="radio" checked name="gender" id="flexRadioDefault2"{...register('gender',{
                            required: "Date Of Birth is Required",
                        })}/>
                        :
                        <input class="form-check-input" value={'Female'} type="radio" name="gender" id="flexRadioDefault2"{...register('gender',{
                            required: "Date Of Birth is Required",
                        })}/>}
                        <label class="form-check-label" for="flexRadioDefault2">
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
                    defaultValue={formValues.address}
                    {...register('address',{
                        required: "Adress is Required",
                        minLength: {
                            value: 8,
                            message: "Address Too Short",
                        },
                    })}></textarea>
                    {errors.address && <p className="text-danger">{errors.address.message}</p>}
                </div>
                    <div className="form-group mb-3">
                    <button className="button form-control" onClick={handleSubmit}>Update</button>   
                    </div>
                </div>
            </form>
              </div>
            </div>
          </div>
    </>
  )
}

export default PersonalDetail
