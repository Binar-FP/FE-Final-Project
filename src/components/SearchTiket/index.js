import React from 'react'

const SearchTiket = () => {
  return (
    <>
        <div className='row d-flex justify-content-center'>
            <div className="col-12">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder='Search Flight' aria-label="Dollar amount (with dot and two decimal places)"/>
                    <button className="input-group-text button text-white">Search</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchTiket
