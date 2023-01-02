import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { HistoryService } from '../../services/historyService';
import Loading from '../loading';

const HistoryAdmin = () => {
    const [history, setHistory] = useState([])
    const loader = useSelector(state => state.loading.loading)

    useEffect(() => {
      HistoryService.getHistoryAll().then((res) => {
        setHistory(res.data.data);
      });
    }, [])
    

  return (
    <>
      {loader === true ? <Loading/>: ''}
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">History</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
          </div>
        </div>
      </div>
      <h2>{history.name}</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">History Date</th>
                  <th scope="col">NIK</th>
                  <th scope="col">Name Passengers</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Seat Number</th>
                  <th scope="col">AirLine</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">Departure Date</th>
                  <th scope="col">Class Flights</th>
                </tr>
              </thead>
              <tbody>
                {history.map((history, index) => {
                return (
                <>
                    <tr>
                    <td>{index+1}</td>
                    <td>{history.historyDate}</td>
                    <td>{history.Booking.Passengers[0].NIK}</td>
                    <td>{history.Booking.Passengers[0].name}</td>
                    <td>{history.Booking.Passengers[0].phoneNumber}</td>
                    <td>{history.Booking.Seats[0].seatNumber}</td>
                    <td>{history.Flight.airLine}</td>
                    <td>{history.Flight.from}</td>
                    <td>{history.Flight.to}</td>
                    <td>{history.Flight.depatureDate}</td>
                    <td>{history.Flight.typeOfClass}</td>
                    </tr>
                </>
              )
            })}
              </tbody>
            </table>
          </div>
    </main>
    </>
  )
}

export default HistoryAdmin
