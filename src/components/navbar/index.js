import React from 'react'
import './index.css'
import { Logo } from '../../assets'

const Navbar = () => {
  return (
    <>
      {/* <!-- navbar  --> */}
        <div className="containerku mb-2">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid mt-4">
                <a className="navbar-brand ps-5 ms-5 " href="#/"><img className="logo" src={Logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto pt-0 p-4 pe-5">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/help">Help</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
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
