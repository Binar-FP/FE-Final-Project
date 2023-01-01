import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { WishlistService } from '../../services/wishlistService';
import './wishlist.css'

const WishlistComponent = () => {
  const [wishlist, setWishlist] = useState([]);
  const [status, setStatus] = useState(false)
  const userId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({type: 'PROGRESS'})
    WishlistService.getWishlistUser({userId}).then((res) => {
      setWishlist(res.data.dataWhislist);
        setStatus(true)
        // dispatch({type: 'END'})  
        console.log(res)
    });
  }, [userId])

  return (
    <>
    <div className="container content-profile">
        <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12">
            <div className='box-item-wishlist d-flex justify-content-between'>
                <p className='p-4 text-light text-notification'>Wishlist</p>
                <p className='p-4 text-light text-notification'></p>
            </div>
            <div className="card">
              {/* {loader === true ? <Loading/>: ''} */}
              <div className="card-header fw-bold text-light wishlist-head">
                <h4>Wishlist</h4>
              </div>
              <div className="card-body body-wishlist">
                <ul className="list-group list-group-flush">
                {status && wishlist.map((item) => {
                  console.log(item)
                  return (
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-sm-12 col-md-4 col-lg-3 bg-light text-center d-flex justify-content-around flex-column">
                                <h6><img className='img-fluid' src={item.WhislistDestination.imageDestination} alt=""/></h6>
                                <h6>{item.WhislistDestination.nameDestination}</h6>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-7 pt-2">
                              <h6>{item.WhislistDestination.description}</h6>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-2 d-flex justify-content-center align-items-center">
                                <Link 
                                className="btn button-wishlist" 
                                to="/destination" 
                                onClick={()=>{
                                  dispatch({type: 'DETAIL_DESTINATION', payload: item.WhislistDestination});
                                  dispatch({type: 'ADD_WISHLIST', payload: item})
                                }}>
                                  Go Now
                                </Link>
                              {/* <button className='btn button-wishlist' onClick={dispatch({type: 'DETAIL_DESTINATION', payload: item})}>Go Now</button> */}
                            </div>
                          </div>
                        </li>
                       )
                      }
                      )}
                </ul>
              </div>
            </div>
            {/* <!-- Button trigger modal --> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default WishlistComponent
