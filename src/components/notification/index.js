import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { logoutActions } from '../../config/redux/actions/authActions';
import { HistoryService } from '../../services/historyService';
import { NotificationService } from '../../services/notificationService';
import './notification.css'

const Notification = () => {
    const id = useSelector(state => state.auth.id);
    const history = useNavigate();
    const pages = useSelector(state => state.setting.pages)

    if (pages !== 'notification') {
        history('/')
    }

    //Notification
    const [notification, setNotification] = useState([]);
    const [status, setStatus] = useState(false)
    const [read, setRead] = useState(false)

    useEffect(() => {
        HistoryService.getHistory({id}).then((res) => {
            setNotification(res.data.orderList);
            setStatus(true)
            console.log(res)
        });
      }, [id,read])
      
    //   const filterNotification= notification.filter((item) => item.Notifications[0].status === false);
    //   const lengthNotification= filterNotification.length;

    const handleAllRead = () => {
    NotificationService.readAll({userId:id, status:true}).then((res) => {
        console.log(res)
    });
    setRead(!read)
    }

    const handleReadOne = (data) => {
    NotificationService.readOne({historyId:data, status:true}).then((res) => {
        console.log(res)
    });
    setRead(!read)
    }

  return (
    <>
        <div className="content-notif">
        <button className='read-all-notif color-primary text-light' onClick={handleAllRead}>Read All</button>
        <div className='content-notification'>
            <div className='row'>
                <div className='col-md-12 col-lg-12'>
                    <div className="card p-4 card-item card-notifku">
                            
                        <div className="card-body pb-4 pt-5">
                         {status && notification.map((item) => {
                                return (
                                    <>  
                                        {item.Booking.status === false ?
                                            <div
                                                onClick={()=>handleReadOne(item.id)} 
                                                className={item.Notifications[0].status === false ? 
                                                "notification-unread card mb-3" 
                                                : 
                                                "card mb-3 text-center "}> 
                                                <div class="card-body text-center">
                                                <p>The order on behalf of{' '+item.Booking.Passengers[0].name+' '}
                                                was successful, please make payment</p>
                                                </div>
                                            </div>
                                        :
                                            <div
                                                onClick={()=>handleReadOne(item.id)}
                                                className={item.Notifications[0].status === false ?
                                                "notification-unread card mb-3" 
                                                :
                                                " text-center card mb-3"}>
                                                <div class="card-body text-center">
                                                    <div className='row'>
                                                        <div className="col-md-10 col-lg-10">
                                                            <p>
                                                            Payment Successful Thank you   
                                                            {' '+item.Booking.Passengers[0].name+' '},
                                                            Please check the ticket on the history page
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Notification
