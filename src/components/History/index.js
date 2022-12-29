import React, { useEffect, useState } from 'react'
import { Ticket } from 'react-bootstrap-icons'
import './history.css'
import { HistoryService } from '../../services/historyService'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../loading';

const History = () => {
  const [history, setHistory] = useState({});
  const [status, setStatus] = useState(false)
  const [statusData , setStatusData] = useState(false)
  const [detailData, setDetailData] = useState([])
  const id = useSelector(state => state.auth.id)
  const loader = useSelector(state => state.loading.loading)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({type: 'PROGRESS'})
    HistoryService.getHistory({id}).then((res) => {
      setHistory(res.data.orderList);
      setStatus(true)
      dispatch({type: 'END'})
    });
  }, [id,dispatch])

  const handleBoardingPass = (data) => {
      dispatch({type: 'PROGRESS'})
      fetch(`https://www.flywithme-api.me/api/boardingPass/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(async res => {
        if (res.status === 200) {
          const blob = await res.blob();
          const file = new Blob(
            [blob], 
            {type: 'application/pdf'}
          );
          //Build a URL from the file
          const fileURL = URL.createObjectURL(file);
          //Open the URL on new Window
          window.open(fileURL);
          dispatch({type: 'END'})  
        }
      })
      
  }

  const handleDetail = (data) => {
    setDetailData(data)
    setStatusData(true)
  }
  
  console.log(detailData)

  return (
    <>
      <div className="col-sm-12 col-lg-9">
            <div className='box-item-history d-flex justify-content-between'>
                <p className='p-4 text-light text-notification'>History</p>
                <p className='p-4 text-light text-notification'></p>
            </div>
            <div className="card">
              {loader === true ? <Loading/>: ''}
              <div className="card-header fw-bold text-light history-head">
                <h4>History</h4>
              </div>
              <div className="card-body body-history">
                <ul className="list-group list-group-flush">
                {status && history.map((item) => {
                  return (
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light text-center d-flex justify-content-around flex-column">
                                <h6>{item.historyDate}</h6>
                                <h6><Ticket size={50} /></h6>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-9">
                                <div className='row'>
                                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-between flex-column">
                                      <p>From {item.Flight.from}</p>
                                      <p>{item.Flight.depatureDate}</p>
                                      <p>{item.Flight.flightNumber}</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-between flex-column">
                                      <p>To {item.Flight.to}</p>
                                      <p>{item.Flight.arrivalDate}</p>
                                      <p>{item.Flight.flightNumber}</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-end">
                                      <button className='btn mb-2 border-0 text-color' data-bs-toggle="modal" data-bs-target="#showDetail" onClick={()=>handleDetail(item)}>More Detail</button>
                                    </div>
                                    {item.Booking.status === true?
                                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-end">
                                      <button className='btn mb-2 border-0 text-color' 
                                        onClick={()=>handleBoardingPass({
                                          name :item.Booking.Passengers[0].name,
                                          NIK :item.Booking.Passengers[0].NIK,
                                          from :item.Flight.from,
                                          to :item.Flight.to,
                                          depatureDate :item.Flight.depatureDate,
                                          depatureTime :item.Flight.depatureTime,
                                          flightNumber :item.Flight.flightNumber,
                                          typeOfClass :item.Flight.typeOfClass,
                                          seatNumber :item.Booking.Seats[0].seatNumber,
                                        })}>Select Tiket</button>
                                    </div>
                                    :''}
                                    {item.Booking.status === false?
                                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-end">
                                      <button className='text-pay btn mb-2 border-0'>Pay Now</button>
                                      <p className='text-color'>{console.log(history)}</p>
                                    </div>
                                    :''}
                                    <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-items-end">
                                      <p className='text-color'>Status : {item.Booking.status === true ? 'Success' : 'Pending'}</p>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </li>
                      )
                      }
                      )}
                </ul>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}

            {/* <!-- Modal --> */}
            <div className="modal fade" data-bs-backdrop="false" id="showDetail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Detail Flight</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="card">
                          <div className="card-header">
                            Status Pembayan
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">{statusData === true ?
                            detailData.Booking.status === true?
                            <p>Paid</p>
                            :
                            <p>UnPaid</p>
                            :''}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-3">
                      <div className="card-header">
                        Flights
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-12 col-md-2">
                              <p>Flights</p>
                            </div>
                            <div className="col-12 col-md-6">
                              <p>: {statusData === true ?detailData.Flight.airLine:''}</p>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-12 col-md-2">
                              <p>From</p>
                            </div>
                            <div className="col-12 col-md-6">
                              <p>: {statusData === true ?detailData.Flight.from:''}</p>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-12 col-md-2">
                              <p>To</p>
                            </div>
                            <div className="col-12 col-md-6">
                              <p>: {statusData === true ?detailData.Flight.to:''}</p>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-12 col-md-2">
                              <p>Seats</p>
                            </div>
                            <div className="col-12 col-md-6">
                              <p>: {statusData === true ?detailData.Booking.Seats[0].seatNumber:''}</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="card mt-3">
                      <div className="card-header">
                        Passengers
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-12 col-md-2">
                              <p>Name</p>
                            </div>
                            <div className="col-12 col-md-6">
                              <p>: {statusData === true ?detailData.Booking.Passengers[0].name:''}</p>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-12 col-md-2">
                              <p>Age</p>
                            </div>
                            <div className="col-12 col-md-6">
                              <p>: {statusData === true ?detailData.Booking.Passengers[0].age:''}</p>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-12 col-md-2">
                              <p>NIK</p>
                            </div>
                            <div className="col-12 col-md-6">
                              <p>: {statusData === true ?detailData.Booking.Passengers[0].NIK:''}</p>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-12 col-md-2">
                              <p>Phone Number</p>
                            </div>
                            <div className="col-12 col-md-6">
                              <p>: {statusData === true ?detailData.Booking.Passengers[0].phoneNumber:''}</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default History
