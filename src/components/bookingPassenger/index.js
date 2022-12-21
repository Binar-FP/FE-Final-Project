import React, { useState } from 'react'
import { PersonFill } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import './bookingpassenger.css'

const BookingPassenger = () => {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();
    const dispatch = useDispatch();
    const [bagage, setBagage] = useState()
    console.log(bagage)
    const onSubmit = (data) => {
        const newData= {
            ...data,
            bagage: bagage
        }
        console.log(newData)
        dispatch({type: 'ADD_PASSENGER', payload: newData})

    }

  return (
    <>
    <div className='container content-bookingPassenger'>
        <div className='row'>
            {/* <div className='col-md-12 col-lg-3'>
            <div className="card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price</li>
                    <li className="list-group-item">500000</li>
                </ul>
            </div>
            </div> */}
            <div className='col-md-12 col-lg-12'>
                <div className="card p-4 card-color">
                    {/* <div className="card-header">
                        Passenger and Bagage
                    </div> */}
                    <div className="card-body pt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <image src='https://www.flaticon.com/svg/static/icons/svg/149/149071.svg' alt=''/>
                                    <PersonFill size={70} color="grey" />
                                    <label htmlFor="" className="mb-2">Passenger and Bagage</label>
                                    <h6 className='ps-2'>Enter  the names as they appear on the passport</h6>
                                </div>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Name</label>
                                        <input className={errors.password?"form-control ps-4 border-danger":"form-control ps-4"} 
                                        type="text" 
                                        placeholder="Input your first name" 
                                        name='name' 
                                        aria-label="" 
                                        {...register('name',{
                                            required: "Please enter your first Name",
                                            minLength: {
                                                value: 8,
                                                message: "name Too Short",
                                            },
                                            maxLength: {
                                                value: 18,
                                                message: "name Too Long",
                                            },
                                            }
                                        )}/>
                                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Age</label>
                                        <input className={errors.password?"form-control ps-4 border-danger":"form-control ps-4"} 
                                        type="text" 
                                        placeholder="Input your age" 
                                        name='age' 
                                        aria-label="" 
                                        {...register('age',{
                                            required: "Please enter your last Name",
                                            minLength: {
                                                value: 8,
                                                message: "age Too Short",
                                            },
                                            maxLength: {
                                                value: 18,
                                                message: "age Too Long",
                                            },
                                            }
                                        )}/>
                                        {errors.age && <p className="text-danger">{errors.age.message}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">NIK</label>
                                        <input className={errors.password?"form-control ps-4 border-danger":"form-control ps-4"} 
                                        type="text" 
                                        placeholder="Input your last name" 
                                        name='nik' 
                                        aria-label="" 
                                        {...register('nik',{
                                            required: "Please enter your nik",
                                            minLength: {
                                                value: 8,
                                                message: "Nik Too Short",
                                            },
                                            maxLength: {
                                                value: 18,
                                                message: "Nik Too Long",
                                            },
                                            }
                                        )}/>
                                        {errors.nik && <p className="text-danger">{errors.nik.message}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Phone Number</label>
                                        <input className={errors.password?"form-control ps-4 border-danger":"form-control ps-4"} 
                                        type="text" 
                                        placeholder="Input your Phone Number" 
                                        name='phoneNumber' 
                                        aria-label="" 
                                        {...register('phoneNumber',{
                                            required: "Please enter your last Name",
                                            minLength: {
                                                value: 8,
                                                message: "Phone Number Too Short",
                                            },
                                            maxLength: {
                                                value: 18,
                                                message: "Phone Number Too Long",
                                            },
                                            }
                                        )}/>
                                        {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber.message}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="bagage" class="form-label">Bagage</label>
                                        <input type="range" className="form-range" min="0" max="20" id="bagage" onChange={(e)=>{setBagage(e.target.value)}}/>
                                        <p>{bagage} Kg x Rp. 20000 = Rp. {bagage*20000}</p>
                                    </div>
                                    <button  className={isDirty && isValid?'button form-control':'button form-control opacity-50'} placeholder="Default input" aria-label="default input example" disabled={!isDirty || !isValid}>Next</button>
                                </div>   
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BookingPassenger
