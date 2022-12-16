import React from 'react'
import './navbar.css'
import { Logo } from '../../assets'
import { House, PencilSquare, QuestionCircle, ArrowRightCircle, Bell, Gear, BoxArrowRight } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { logoutActions } from '../../config/redux/actions/authActions';
import { useNavigate } from 'react-router';

const Navbar = () => {

    const history = useNavigate();
    const checkLogin = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(logoutActions(history,'buyer'));
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
                            Profile
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/profile">Setting</a></li>
                            {/* <li><a className="dropdown-item" href="#/">Another action</a></li> */}
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#/" onClick={logoutHandle}>Logout</a></li>
                        </ul>
                    </li>
                    </>
                    }
                    {/* <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </li> */}
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
