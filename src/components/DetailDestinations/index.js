import React, { useEffect, useState } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { WishlistService } from '../../services/wishlistService';
import './detaildestination.css'

const DetailDestination = () => {
  const [active, setActive] = useState(true)
  const [messege, setMessege] = useState('')
  const dispatch = useDispatch()
  const dataDestinations = useSelector(state => state.destinations)
  const userId = useSelector(state => state.auth.id)
  const dataWishlist = useSelector(state => state.wishlist)

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

  return (
    <>
      <div className="container content-detailDestination">
        <div class="card card-destination">
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
                    <div className='col-lg-1 col-sm-12'>
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
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                      
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <label>Filter Penerbangan</label>
                      <div class="input-group mb-3">
                        <input type="date" class="form-control rounded" placeholder='Search Date'/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default DetailDestination
