import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Logo } from '../../assets'
import { 
    House,
    PencilSquare,
    QuestionCircle,
    ArrowRightCircle,
    Bell,
    BoxArrowDownRight,
    BellFill,
    PersonFillGear,
    ClockHistory,
    SearchHeart,
    BookmarkHeart,
    ThreeDots, 
    Person
} from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logoutActions } from '../../config/redux/actions/authActions';
import { useNavigate } from 'react-router';
import { UsersService } from '../../services/usersService';
import { HistoryService } from '../../services/historyService'
import { NotificationService } from '../../services/notificationService'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [formValues, setFormValues] = useState({});
    const id = useSelector(state => state.auth.id)
    const [navHidden, setNavHidden] = useState(false);

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
                        <House className='icon' color="white" size={25}/>
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    :<li className="nav-item">
                        <House className='icon' color="white" size={25}/>
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>}

                    {checkLogin === false &&
                    <>
                        <li className="nav-item">
                            <QuestionCircle className='icon' color="white" size={25}/>
                            <a className="nav-link" href="/help">Help</a>
                        </li>
                        <li className="nav-item">
                        <SearchHeart className='icon' color="white" size={25} />
                        <a className="nav-link" href="/destination">Destination</a>
                        </li>
                        <li className="nav-item">
                            <ArrowRightCircle className='icon' color="white" size={25} />
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <PencilSquare className='icon' color="white" size={25}/>
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                    </>
                    }
                    {/* jika login  */}
                    {checkLogin === true &&
                    <>
                    <li class="nav-item dropdown me-5 notifications-destop">
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
                            </div>
                            
                            </ul>
                        :''}
                    
                    </li>
                    <li className="nav-item mobile-item">
                        <SearchHeart className='icon' color="white" size={25} />
                        <a className="nav-link" href="/destination">Destination</a>
                    </li>
                    <li className="nav-item mobile-item">
                    { lengthNotification === 0 ?'':
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger table-none">
                                {lengthNotification}
                        <span class="visually-hidden">unread messages</span>
                            </span>}
                        <Bell className='icon' color="white" size={25} />
                        <Link className="nav-link" to="/notification" onClick={()=>dispatch({type:"NOTIFICATION"})}>Notif</Link>
                    </li>
                    <li className="nav-item mobile-item">
                        <ThreeDots className='icon' color="white" size={25} />
                        <Link className="nav-link" onClick={()=>setNavHidden(!navHidden)}>Menu</Link>
                    </li>

                    <li className="dropdown destop-item">
                        <a className="nav-link dropdown-toggle destop-item" href="#/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className='img-profile me-2' src={formValues.image} alt=''></img>{formValues.firstName}
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end m-2" aria-labelledby="navbarDropdown">
                            <li className='d-flex align-items-center text-dark'>
                                <Link className="dropdown-item text-dark" to="/profile" onClick={()=>{dispatch({type:"PERSONAL_DETAIL"});dispatch({type:"BACK_DESTINATION"})}}>
                                    <Person className="ms-2" /> Profile
                                </Link>
                            </li>
                            <li className='d-flex align-items-center text-dark'>
                                <Link className="dropdown-item text-dark" to="/profile" onClick={()=>{dispatch({type:"WISHLIST-SETTING"});dispatch({type:"BACK_DESTINATION"})}}>
                                    <BookmarkHeart className="ms-2" /> Wishlist
                                </Link>
                            </li>
                            
                            <li className='d-flex align-items-center'>
                                <Link className="dropdown-item text-dark" to="/profile" onClick={()=>{dispatch({type:"HISTORY"});dispatch({type:"BACK_DESTINATION"})}}>
                                    <ClockHistory className="ms-2" /> History
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="dropdown-item text-dark" to="/destination">
                                    <SearchHeart className="ms-2" /> Destination
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider"/></li>
                            <li className='d-flex align-items-center'><a className="dropdown-item" href="#/" onClick={logoutHandle}><BoxArrowDownRight className="ms-2" /> Logout</a></li>
                        </ul>
                    </li>
                    </>
                    }
                    </ul>
                </div>
                </div>
                {navHidden === true ?<div className="navbar-item-box">
                        <ul className="box-navbar">
                            <li className="">
                                <Link className="" to="/profile" onClick={()=>dispatch({type:"HISTORY"})}><ClockHistory className="ms-2"/> History</Link>
                            </li>
                            <li>
                                <Link className="" to="/profile" onClick={()=>dispatch({type:"WISHLIST-SETTING"})}><BookmarkHeart className="ms-2"/> Wishlist</Link>
                            </li>
                            <li>
                                <a className="nav-link" href="/profile" onClick={()=>dispatch({type:"PERSONAL_DETAIL"})}><PersonFillGear className="ms-2"/> Profile</a>
                            </li>
                            <li><a className="dropdown-item" href="#/" onClick={logoutHandle}><BoxArrowDownRight className="ms-2" /> Logout</a></li>
                        </ul>
                    </div>:''}
            </nav>
        </div>
        {/* <!-- end navbar  --> */}
    </>
  )
}

export default Navbar
