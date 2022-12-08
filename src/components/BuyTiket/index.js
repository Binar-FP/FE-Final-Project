import React, { useState } from 'react'
import RoundWay from '../roundWay'
import OneWay from '../oneWay'

const BuyTiket = () => { 
    const [trip, setTrip] = useState('first')

  return (
    <>
      <div className='row mb-4'>
                    <div className='col-sm-12 col-lg-3'>
                        <div className="form-check">
                            {trip==="oneway"?
                                <input className="form-check-input" type="radio" name="flexCheckChecked" onClick={()=>{setTrip("oneway")}} id="flexCheckChecked" checked/>:
                                <input className="form-check-input" type="radio" name="flexCheckChecked" onClick={()=>{setTrip("oneway")}} id="flexCheckChecked" />
                            }
                            {trip==="first"?
                                <input className="form-check-input" type="radio" name="flexCheckChecked" onClick={()=>{setTrip("oneway")}} id="flexCheckChecked" checked/>:''
                            }
                            <label className="form-check-label" for="flexCheckChecked">
                                One Way
                            </label>
                        </div>
                    </div>
                    <div className='col-sm-12 col-lg-3'>
                        <div className="form-check">
                            {trip==="roundway"?
                                <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={()=>{setTrip("roundway")}} id="flexRadioDefault1" checked/>:
                                <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={()=>{setTrip("roundway")}} id="flexRadioDefault1"/>
                            }
                            <label className="form-check-label" for="flexRadioDefault1">
                                Round Way
                            </label>
                        </div>
                    </div>
                </div>
                { trip==="first" ?<OneWay />:''}
                { trip==="oneway" ?<OneWay />:''}
                { trip==="roundway" ?<RoundWay />:''}
    </>
  )
}

export default BuyTiket
