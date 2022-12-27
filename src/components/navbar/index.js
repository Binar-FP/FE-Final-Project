import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Logo } from '../../assets'
import { House, PencilSquare, QuestionCircle, ArrowRightCircle, Bell, Gear, BoxArrowRight, BoxArrowDownRight, BellFill } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logoutActions } from '../../config/redux/actions/authActions';
import { useNavigate } from 'react-router';
import { UsersService } from '../../services/usersService';
import { HistoryService } from '../../services/historyService'
import { NotificationService } from '../../services/notificationService'

const Navbar = () => {
    const [formValues, setFormValues] = useState({});
    const id = useSelector(state => state.auth.id)

    useEffect(() => {
        UsersService.getUsersById(id).then((res) => {
            console.log(res)
            setFormValues(res.data.data);
            });
    }, [id])

    const history = useNavigate();
    const checkLogin = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(logoutActions(history,'buyer'));
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
      
      const filterNotification= notification.filter((item) => item.Notifications[0].status === false);
      const lengthNotification= filterNotification.length;

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
      {/* <!-- navbar  --> */}
        <div className="containerku mb-2">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid mt-4">
                <a className="navbar-brand" href="/"><img className="logo" src={Logo} alt=""/></a>
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto ps-4 pe-4">
                    {/* jika tidak Login  */}
                    {checkLogin === true ?
                    <li className="nav-item mobile-item">
                        <House className='icon' color="white" size={30}/>
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    :<li className="nav-item">
                        <House className='icon' color="white" size={30}/>
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>}

                    {checkLogin === false &&
                    <>
                        <li className="nav-item">
                            <QuestionCircle className='icon' color="white" size={30}/>
                            <a className="nav-link" href="/help">Help</a>
                        </li>
                        <li className="nav-item">
                            <ArrowRightCircle className='icon' color="white" size={30} />
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <PencilSquare className='icon' color="white" size={30}/>
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                    </>
                    }
                    {/* jika login  */}
                    {checkLogin === true &&
                    <>
                    <li class="nav-item dropdown me-5">
                        <a className="nav-link" href="/#" id="navbarDropdown" role="button" data-bs-toggle={ notification.lenght !== 0 ?"dropdown":""} aria-expanded="false">
                            <BellFill size={20}/>
                            { lengthNotification === 0 ?'':
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {lengthNotification}
                            <span class="visually-hidden">unread messages</span>
                            </span>
                            }
                            
                            
                        </a>
                        {notification.lenght !== 0 ?
                            <ul className="dropdown-menu dropdown-menu-end pt-2" aria-labelledby="navbarDropdown">
                            <div className='d-flex justify-content-end align-items-center'>
                                <button type="button" className="read-all btn" onClick={handleAllRead}>Read All</button>
                            </div>
                            
                            <div className=' box-notification'>
                            {status && notification.map((item) => {
                                return (
                                    <>  
                                        {item.Booking.status === false ?
                                        <li >
                                            <button onClick={()=>handleReadOne(item.id)} 
                                            className={item.Notifications[0].status === false ? 
                                            "dropdown-item notification-unread" 
                                            : 
                                            "dropdown-item"} href="/#">The order on behalf of 
                                            {' '+item.Booking.Passengers[0].name+' '}
                                            was successful, please make payment</button></li>
                                        :
                                        <li>
                                            <button onClick={()=>handleReadOne(item.id)}
                                            className={item.Notifications[0].status === false ?
                                            "dropdown-item notification-unread" 
                                            :
                                            "dropdown-item"} href="/#">
                                            Payment Successful Thank you   
                                            {' '+item.Booking.Passengers[0].name+' '},
                                            Please check the ticket on the history page
                                            </button>
                                        </li>  }
                                        
                                    </>
                                    )
                                })}
                                {/* <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li> */}
                            </div>
                            
                            </ul>
                        :''}
                    
                    </li>
                    <li className="nav-item mobile-item">
                        <Bell className='icon' color="white" size={30} />
                        <a className="nav-link" href="/login">Notifikasi</a>
                    </li>
                    <li className="nav-item mobile-item">
                        <Gear className='icon' color="white" size={30} />
                        <a className="nav-link" href="/profile">Setting</a>
                    </li>
                    <li className="nav-item mobile-item">
                        <BoxArrowRight className='icon' color="white" size={30}/>
                        <a className="nav-link" href="/register" onClick={logoutHandle}>Logout</a>
                    </li>

                    <li className="dropdown destop-item">
                        <a className="nav-link dropdown-toggle destop-item" href="#/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className='img-profile me-2' src={formValues.image} alt=''></img>{formValues.firstName}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end m-2" aria-labelledby="navbarDropdown">
                            <li className='d-flex align-items-center'><a className="dropdown-item" href="/profile"><Gear className="ms-2" /> Setting</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li className='d-flex align-items-center'><a className="dropdown-item" href="#/" onClick={logoutHandle}><BoxArrowDownRight className="ms-2" /> Logout</a></li>
                        </ul>
                    </li>
                    </>
                    }
                    </ul>
                </div>
                </div>
            </nav>
        </div>
        {/* <!-- end navbar  --> */}
    </>
  )
}

export default Navbar
