import React from 'react'
import './sidebar.css'
import { Airplane, ClockHistory, CloudFog2, Globe, HouseExclamation } from 'react-bootstrap-icons';

const Sidebar = () => {
  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse mt-4">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#/">
            <HouseExclamation color="black" className='me-2' />
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
            <Airplane color="black" className='me-2' />
              Airport
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
            <CloudFog2 color="black" className='me-2' />
              Flights
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
            <Globe color="black" className='me-2' />
              Destinations
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
            <ClockHistory color="black" className='me-2' />
              History
            </a>
          </li>
        </ul>

        {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a className="link-secondary" href="#/" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="file-text"></span>
              Last quarter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="file-text"></span>
              Social engagement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">
              <span data-feather="file-text"></span>
              Year-end sale
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
    </>
  )
}

export default Sidebar
