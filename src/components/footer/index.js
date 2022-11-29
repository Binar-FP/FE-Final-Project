import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-muted justify-content-between pt-2">
      <section className="">
        <div className="container text-center mt-5">

          <div className="row mt-3">

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-lg-start">
              <h6 className="text-uppercase fw-bold mb-4">
                Passengers
              </h6>
              <p>
                <a href="#!" className="text-reset">Flights</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Airlines</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Park</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Secutiry Wait Times</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Map</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Shop & Dine</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4  text-md-center">
              <p className="text-uppercase fw-bold mb-4">
                Business and Community
              </p>
              <p>
                <a href="#!" className="text-reset">About Us</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Career</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4  text-md-end">
              <h6 className="text-uppercase fw-bold mb-4">General</h6>
              <p>
                <a href="#!" className="text-reset">Report Property</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Sign Up</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Contact us</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Newsroom</a>
              </p>
            </div>
          </div>
        </div>
      </section>
   
      </footer>
    </>
  )
}

export default Footer
