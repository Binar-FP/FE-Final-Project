import { useState } from 'react';
import { FileBreakFill, Square } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import './bookingseat.css'

const BookingSeat = () => {
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch({type: 'ADD_SEAT', payload: data})
    }
    const [seat, setSeat] = useState([
        'A1',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'B1',
        'B2',
        'B3',
        'B4',
    ])

    // const [seatSelected, setSeatSelected] = useState([
    //     'B1',
    //     'B2',
    //     'B3',
    //     'B4',
    // ])

    const [seatSelected, setSeatSelected] = useState([
        {
            name: 'B1',
        },
        {
            name: 'B2',
        },
    ])

    // const [test, setTest] = useState([
    //     {
    //         name: 'B1',
    //         status: false
    //     },
    //     {
    //         name: 'B2',
    //         status: false
    //     }
    // ])

    // const seatRefactor = seatSelected.map((item, index) => {
    //     const name = test[index].name
    //     if (name === item.name) {
    //         test[index].status = true
    //     }
    //     return test
    // })

    const seatRefactor = seatSelected.map((item) => {
        const name = item.name
        return name
    })

    console.log(seatRefactor)

  return (
    <>
    <div className='container content-bookingSeat'>
        <div className='row'>
            <div className='col-md-12 col-lg-12'>
                <div className="card p-4 card-color">
                    <div className="card-body pt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <image src='https://www.flaticon.com/svg/static/icons/svg/149/149071.svg' alt=''/>
                                    <FileBreakFill size={70} color="grey" />
                                    <label htmlFor="" className="mb-2">Seat</label>
                                    <h6 className='ps-2 pt-3'>Choose your seats</h6>
                                </div>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                   <div className='row'>
                                        {seat.map((item1, index) => {
                                            // const name = seatRefactor[index]
                                            // console.log(typeof(toString(name)))
                                            // console.log(seatRefactor[1])
                                            
                                        return (
                                            <>
                                            {item1 == seatRefactor[index]?
                                            <div className='col-md-4 col-lg-2'>
                                            <Square size={50} color="grey" />
                                            <p className='ps-2 pt-3'>{item1}</p>
                                            </div>: 
                                                <div className='col-md-4 col-lg-2'>
                                                <Square size={50} color="blue" />
                                                <p className='ps-2 pt-3'>{item1}</p>
                                            </div>}
                                            
                                            </>
                                            )
                                        })}
                                        
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="" className="mb-2">Seat</label>
                                        <input className={errors.password?"form-control ps-4 border-danger":"form-control ps-4"} 
                                        type="text" 
                                        placeholder="Input your first seat" 
                                        name='seat' 
                                        aria-label="" 
                                        {...register('seat',{
                                            required: "Please enter your first Name",
                                            minLength: {
                                                value: 2,
                                                message: "seat Too Short",
                                            },
                                            maxLength: {
                                                value: 2,
                                                message: "seat Too Long",
                                            },
                                            }
                                        )}/>
                                        {errors.seat && <p className="text-danger">{errors.seat.message}</p>}
                                    </div>
                                            
                                    <button  className={isDirty && isValid?'button form-control mt-5':'button form-control opacity-50 mt-5'} placeholder="Default input" aria-label="default input example" disabled={!isDirty || !isValid}>Next</button>
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

export default BookingSeat
