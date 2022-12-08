import React from 'react'
import './index.css'

const SendQuestion = () => {
  return (
    <>
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-sm-12 col-lg-5 bg-light'>
                   <form className='p-4'>
                    <h5 className='mb-4'>Didn’t find what you are looking for ? Write us a question</h5>
                   <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="input your email"/>
                    </div>
                    <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <textarea class="form-control" placeholder='Input Your Address' id="address" rows="3"></textarea>
                    </div>
                    <button className="form-control button-question text-light" placeholder="Default input">Send</button>
                   </form>
                </div>
                <div className='col-sm-12 col-lg-4 bg-right text-light p-4'>
                    <h5 className='mb-4'>Contact information</h5>
                    <h6 className='mb-4 text-quetions'>(800) 900 200 300</h6>
                    <h6 className='mb-4 text-quetions'>contact@flywithme.com</h6>
                </div>
            </div>
        </div>
    </>
  )
}

export default SendQuestion
