import React from 'react'
import './navbarAdmin.css'
import { Logo } from '../../assets'
import { useDispatch } from 'react-redux';
import { logoutActions } from '../../config/redux/actions/authActions';
import { useNavigate } from 'react-router';

const NavbarAdmin = () => {
  const history = useNavigate();
    const dispatch = useDispatch();

    const logoutHandle = () => {
        dispatch(logoutActions(history));
    }
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#/"><img className='img-logo' src={Logo} alt="" /></a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
            <div className="nav-item text-nowrap">
            <button className="nav-link px-3 btn" onClick={logoutHandle} >Sign out</button>
            </div>
        </div>
        </header>
    </>
  )
}

export default NavbarAdmin
