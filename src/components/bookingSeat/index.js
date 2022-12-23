import { useState } from 'react';
import { FileBreakFill, Square } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BookingActions } from '../../config/redux/actions/bookingActions';
import './bookingseat.css'

const BookingSeat = () => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.booking)
    console.log(data)
    
    const onSubmit = (data) => {
        dispatch({type: 'ADD_SEAT', payload: data})
    }
   
    // ================== PENTING RESOURCES =========================
    // const [seatSelected, setSeatSelected] = useState([
    //     {
    //         name: 'B1',
    //     },
    //     {
    //         name: 'B2',
    //     },
    // ])

    // Logic Ubah Array of Object menjadi Array of String
    // const seatRefactor = seatSelected.map((item) => {
    //     const name = item.name
    //     return name
    // })
    // =================== TUTUP RESOURCES ==========================

    const [seat, setSeat] = useState([
        "a1","a2","a3","a4","a5","a6","a7","a8","a9","a10",
        "b1","b2","b3","b4","b5","b6","b7","b8","b9","b10",
        "c1","c2","c3","c4","c5","c6","c7","c8","c9","c10",
        "d1","d2","d3","d4","d5","d6","d7","d8","d9","d10",
        "e1","e2","e3","e4","e5","e6","e7","e8","e9","e10",
        "f1","f2","f3","f4","f5","f6","f7","f8","f9","f10",
        "g1","g2","g3","g4","g5","g6","g7","g8","g9","g10",
    ]);
    const [seatAvailable, setSeatAvailable] = useState([]);
    const [seatReserved, setSeatReserved] = useState([]);
    const [seatSelected, setSeatSelected] = useState([
        "x7",
        "y7",
        "z7"
    ]);

    const onClickData = (seat) => {
        if(seatReserved.indexOf(seat) > -1){
            setSeatAvailable([...seatAvailable, seat]);
            setSeatReserved(seatReserved.filter(item => item !== seat));
        }if(seatReserved.length > 0){
            // Logic Tambahan Sendiri untuk membatasi seat Reserved hanya 1
            const indexOfSeat = seatReserved.indexOf(seat);
            seatReserved.splice(indexOfSeat, 1);
            // Tutup 
            setSeatReserved([...seatReserved, seat]);
            setSeatAvailable(seatAvailable.filter(item => item !== seat));
        }else{
            setSeatReserved([...seatReserved, seat]);
            setSeatAvailable(seatAvailable.filter(item => item !== seat));
        }
    };

    const checktrue= (row) =>{
        if(seatSelected.indexOf(row) > -1){
            return true;
        }else{
            return false;
        }
    }

    const handleSubmit = () => {
        console.log(seatReserved)
        const dataBooking ={
            name : data.name,
            age : parseInt(data.age),
            NIK : parseInt(data.NIK),
            seatNumber: seatReserved.toString(),
            phoneNumber : data.phoneNumber,
            price: data.price,
            flightId: data.id,
        }
        console.log(dataBooking)
        dispatch(BookingActions(dataBooking))
        setSeatSelected(seatSelected.concat(seatReserved));
        setSeatReserved([]);
    }

    const onClickSeat = (seat) => {
        onClickData(seat);
    }


  return (
    <>
    <div className='container content-bookingSeat'>
        <div className='row'>
            <div className='col-md-12 col-lg-12'>
                <div className="card p-4 card-color">
                    <div className="card-body pt-4">
                        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                            <div className='row'>
                                <div className="form-group mb-3 col-md-12 col-lg-6">
                                    <FileBreakFill size={70} color="grey" />
                                    <label htmlFor="" className="mb-2">Seat</label>
                                    <h6 className='ps-2 pt-3'>Choose your seats</h6>
                                </div>
                                <div className="form-group mb-3 col-md-12 col-lg-4">
                                    <div className='row'>
                                    <table className="grid d-flex justify-content-center background-airplane ps-5">
                                        <tbody className=''>
                                            <tr>
                                                {seat.map((row, index) => {
                                                    return (
                                                        <>
                                                        <td className={seatSelected.indexOf(row) > -1 
                                                            ? "reserved text-light" 
                                                            : seatReserved.indexOf(row) > -1
                                                            ? "selected text-light"
                                                            : "available text-light"
                                                        }
                                                        key={row}
                                                        onClick={checktrue(row) 
                                                        ? null  : () => onClickSeat(row) }
                                                        >
                                                            {row}
                                                        </td>
                                                        {index % 3 === 2 && <td className='skip'></td>}
                                                        {/* {index % 3 === 2 && <td className='skip'></td>} */}
                                                        {index % 6 === 5 && <div className='pt-5'/>}
                                                        {/* {index % 7 === 6 && <div className='pt-5'/>} */}
                                                        </>
                                                    )
                                                })}
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>   
                                    <button 
                                    className="button form-control mt-5" 
                                    onClick={handleSubmit}>Next</button>
                                </div>   
                            </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BookingSeat
