import React, { useEffect, useState } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { WishlistService } from '../../services/wishlistService';
import { Arrow } from '../../assets'
import './detaildestination.css'
import { useNavigate } from 'react-router-dom';

const DetailDestination = () => {

  // Generate Date Now 
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedToday = yyyy + '-' + mm + '-' + dd;

  const [active, setActive] = useState(true)
  const [messege, setMessege] = useState('')
  const [data, setData] = useState([])
  const [button, setButton] = useState('')
  const [depatureDate, setDepartureDate] = useState(formattedToday)
  const [formValues, setFormValues] = useState([])
  const history = useNavigate()
  const dispatch = useDispatch()
  const dataDestinations = useSelector(state => state.destinations)
  const userId = useSelector(state => state.auth.id)
  const dataWishlist = useSelector(state => state.wishlist)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)


  useEffect(() => {
    WishlistService.getWishlistUser({userId: userId}).then((res) => {
      console.log(res)
      if(res.data.dataWhislist.length > 0) {
        res.data.dataWhislist.filter((item) => {
          if(item.destinationId === dataDestinations.id) {
            setActive(false)
          }
          console.log(item.destinationId)
          console.log(dataDestinations.id)
          return item;
        })
      }
    }
    )
  }, [dataWishlist, dataDestinations.id, userId])
  console.log(active)

  const handleAddWishlist = () => {
      const data = {
          destinationId: dataDestinations.id,
          userId: userId
      }

      WishlistService.addWishlist(data).then((res) => {
          console.log(res)
          dispatch({type: 'ADD_WISHLIST', payload: res.data.data.newWhislist})
      })
  }

  const handleRemoveWishlist = () => {
      WishlistService.removeWishlist(dataWishlist.idwishlist).then((res) => {
        console.log(res)
      })
  }

  

  useEffect(() => {
    dispatch({type: 'PROGRESS'})
    const searchFlight = {
      destinationId: dataDestinations.id,
      depatureDate: depatureDate
    }

    WishlistService.searhFlightWishlist(searchFlight).then((res) => {
        console.log(res)
        setData(res.data.data);
        dispatch({type: 'END'})  
    }).catch((err) => {
        dispatch({type: 'END'})  
        console.log(err)
    });
  }, [dispatch, dataDestinations.id, depatureDate])

  const handleConfirm = () => {
    dispatch({type: 'CONFIRM_FLIGHT', payload: formValues});
    history('/booking');
  }
  return (
    <>
      <div className="container content-detailDestination">
        <div class="card">
            <div class="card-body">
                {active === false && messege === true ? setTimeout(() => {setMessege(false)}, 2000)&&<div class="alert alert-primary" role="alert">
                  Add To Whislist
                </div>:''}
                {active === true && messege === true ? setTimeout(() => {setMessege(false)}, 2000) &&<div class="alert alert-danger" role="alert">
                  Delete in Whislist
                </div>:''}
                <div className='row'>
                    <div className='col-lg-4 col-sm-12'>
                      <img src={dataDestinations && dataDestinations.image} class="card-img-top" alt="..."/>
                    </div>
                    <div className='col-lg-7 col-sm-12'>
                      <p>{dataDestinations.nameDestination}</p>
                      <p>{dataDestinations.description}</p>
                    </div>
                    {isLoggedIn && <div className='col-lg-1 col-sm-12 wishlist-icon'>
                    {active === true ?<Heart size={50} color="pink"
                      onClick={()=>{setActive(!active);handleAddWishlist()
                        setTimeout(() => {setMessege(true)}, 1000);
                      }}
                      />:''}
                      {active === false ?<HeartFill size={50} color="pink"
                      onClick={()=>{setActive(!active);handleRemoveWishlist()
                        setTimeout(() => {setMessege(true)}, 1000)
                      }}
                      />:''}
                    </div>}
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                      
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <label>Filter Penerbangan</label>
                      <div class="input-group mb-3">
                        <input type="date" class="form-control rounded" placeholder='Search Date' value={depatureDate} onChange={(e)=>setDepartureDate(e.target.value)}/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        {/* SEARCH FLIGHT */}
        {data.map((flights) => {
                        return (
                            <>
                            <div 
                            class={button ===flights.id?'card mb-4 bg-card mt-4':'card mb-4 mt-4'} 
                            onClick={(event)=>{setButton(flights.id);setFormValues({
                                id:flights.id,
                                airLine:flights.airLine,
                                depatureDate:flights.depatureDate,
                                depatureTime:flights.depatureTime,
                                from:flights.from,
                                arrivalDate:flights.arrivalDate,
                                arrivalTime:flights.arrivalTime,
                                to:flights.to,
                                typeOfClass:flights.typeOfClass,
                                ClassPrice:flights.ClassPrice,
                                })}}>
                                <div className="card-body">
                                    <div className='row  p-3'>
                                        <div className='col-lg-3 col-sm-12'>
                                            <p>{flights.airLine}</p>
                                            <p>{flights.depatureDate}</p>
                                            <p>{flights.depatureTime}</p>
                                            <p>{flights.from}</p>
                                        </div>
                                        <div className='col-lg-3 col-sm-12 d-flex align-items-center '>
                                            <img className='img-arrow' src={Arrow} alt='' />
                                        </div>
                                        <div className='col-lg-3 col-sm-12'>
                                            <p>{flights.airLine}</p>
                                            <p>{flights.arrivalDate}</p>
                                            <p>{flights.arrivalTime}</p>
                                            <p>{flights.to}</p>
                                        </div>
                                        <div className='col-lg-3 col-sm-12'>
                                            <p>{flights.typeOfClass}</p>
                                            <p>{flights.ClassPrice}</p>
                                        </div>
                                        {button ===flights.id?<button className='btn button btn-block text-light mt-3' onClick={()=>{handleConfirm()}} >Confirm</button>:''}
                                    </div>
                                        
                                </div>
                            </div>
                            </>
                        )})}
      </div>
    </>
  )
}

export default DetailDestination
