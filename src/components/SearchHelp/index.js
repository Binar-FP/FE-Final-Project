import React from 'react'
import './index.css'

const SearchHelp = () => {
  return (
    <div className='searchHelp'>
        <div className="d-flex justify-content-center">
            <div className="col-6">
                <h1 className='text-center text-light fw-bold'>Welcome! How can we help?</h1>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text button search-input">O</span>
                    </div>
                    <input type="text" className="form-control search-input" placeholder='Search Help' aria-label="Amount (to the nearest dollar)"/>
                    <div className="input-group-append">
                        <button className="input-group-text button search-input search">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchHelp
