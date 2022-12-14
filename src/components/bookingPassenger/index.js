import React, { useState } from 'react'
import { PersonFill } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import './bookingpassenger.css'

const BookingPassenger = () => {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();
    const dispatch = useDispatch();
    const [bagage, setBagage] = useState(1)
    const onSubmit = (data) => {
        const newData= {
            ...data,
            bagage: bagage * 20000
        }
        dispatch({type: 'ADD_PASSENGER', payload: newData})

    }

  return (
    <>
    <div className='container content-bookingPassenger'>
        <div className='row row-passenger'>
            <div className='col-md-12 col-lg-12'>
                <div className="card p-4 card-color">
                    {/* <div className="card-header">
                        Passenger and Bagage
                    </div> */}
                    <div className="card-body pt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row pb-5'>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <image src='https://www.flaticon.com/svg/static/icons/svg/149/149071.svg' alt=''/>
                                    <PersonFill size={70} color="grey" />
                                    <label htmlFor="" className="mb-2">Passenger and Bagage</label>
                                    <h6 className='ps-2 text-passenger'>Enter  the names as they appear on the passport</h6>
                                </div>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Name</label>
                                        <input className={errors.password?"form-control form-passenger ps-4 border-danger":"form-control form-passenger ps-4"} 
                                        type="text" 
                                        placeholder="Input your first name" 
                                        name='name' 
                                        aria-label="" 
                                        {...register('name',{
                                            required: "Please enter your first Name",
                                            maxLength: {
                                                value: 30,
                                                message: "name Too Long",
                                            },
                                            }
                                        )}/>
                                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Age</label>
                                        <input className={errors.password?"form-control form-passenger ps-4 border-danger":"form-control form-passenger ps-4"} 
                                        type="number" 
                                        placeholder="Input your age" 
                                        name='age' 
                                        aria-label="" 
                                        {...register('age',{
                                            required: "Please enter your last Name",
                                            maxLength: {
                                                value: 3,
                                                message: "Age Too Long",
                                            },
                                            }
                                        )}/>
                                        {errors.age && <p className="text-danger">{errors.age.message}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">NIK</label>
                                        <input className={errors.password?"form-control form-passenger ps-4 border-danger":"form-control form-passenger ps-4"} 
                                        type="number" 
                                        placeholder="Input your last name" 
                                        name='nik' 
                                        aria-label="" 
                                        {...register('nik',{
                                            required: "Please enter your nik",
                                            maxLength: {
                                                value: 16,
                                                message: "NIK Too Long",
                                            },
                                            }
                                        )}/>
                                        {errors.nik && <p className="text-danger">{errors.nik.message}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Phone Number</label>
                                        <input className={errors.password?"form-control form-passenger ps-4 border-danger":"form-control form-passenger ps-4"} 
                                        type="number" 
                                        placeholder="Input your Phone Number" 
                                        name='phoneNumber' 
                                        aria-label="" 
                                        {...register('phoneNumber',{
                                            required: "Please enter your last Name",
                                            maxLength: {
                                                value: 13,
                                                message: "phone number Too Short",
                                            },
                                            minLength: {
                                                value: 12,
                                                message: "phone number Too Long",
                                            },
                                            }
                                        )}/>
                                        {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber.message}</p>}
                                    </div>
                                    <div className="form-group mb-3">
                                        <label for="bagage" class="form-label">Bagage</label>
                                        <input type="range" className="form-range" min="0" max="20" id="bagage" defaultValue={1} onChange={(e)=>{setBagage(e.target.value)}}/>
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
