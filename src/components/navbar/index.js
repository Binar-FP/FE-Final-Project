import React from 'react'
import './navbar.css'
import { Logo } from '../../assets'
import { House, PencilSquare, QuestionCircle, ArrowRightCircle, Bell, Gear, BoxArrowRight } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cekLogin = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      {/* <!-- navbar  --> */}
        <div className="containerku mb-2">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid mt-4">
                <a className="navbar-brand ps-5 ms-5 pt-4" href="/"><img className="logo" src={Logo} alt=""/></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto pt-4 ps-4 pe-4 pt-2">
                    {/* jika tidak Login  */}
                    {cekLogin === true ?
                    <li className="nav-item mobile-item">
                        <House className='icon' color="white" size={30}/>
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    :<li className="nav-item">
                        <House className='icon' color="white" size={30}/>
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>}

                    {cekLogin === false &&
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
                    {cekLogin === true &&
                    <>
                    <li className="nav-item mobile-item">
                        <Bell className='icon' color="white" size={30} />
                        <a className="nav-link" href="/login">Notifikasi</a>
                    </li>
                    <li className="nav-item mobile-item">
                        <Gear className='icon' color="white" size={30} />
                        <a className="nav-link" href="/login">Setting</a>
                    </li>
                    <li className="nav-item mobile-item">
                        <BoxArrowRight className='icon' color="white" size={30}/>
                        <a className="nav-link" href="/register">Logout</a>
                    </li>

                    <li className="dropdown destop-item">
                        <a className="nav-link dropdown-toggle destop-item" href="#/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#/">Setting</a></li>
                            {/* <li><a className="dropdown-item" href="#/">Another action</a></li> */}
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#/">Logout</a></li>
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
