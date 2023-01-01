import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DestinationsService } from '../../services/destinationsService';
import { WishlistService } from '../../services/wishlistService';
import './destination.css'

const DestinationComponent = () => {
    const [destinations, setDestinations] = useState([])
    const [search, setSearch] = useState('')
    const userId =useSelector(state => state.auth.id)
    const dispatch = useDispatch()

    useEffect(() => {
      if(search === '') {
        DestinationsService.getDestinations().then((res) => {
          setDestinations(res.data.data)
        })
      }
    }, [search])

    useEffect(() => {
      if(search !== '') {
        DestinationsService.getDestinations().then((res) => {
          setDestinations(res.data.data.filter((item) => {
            return item.nameDestination.toLowerCase().includes(search.toLowerCase())
          }))
        })
      }
    }, [search])

    const getIdWishlist = (id) => {
      const dataSearch = {
        destinationId: id,
        userId : userId
      }

      WishlistService.searchWishlist(dataSearch).then((res) => {
        console.log(res)
        // console.log(res.data.data[0].WhislistDestination.id)
          dispatch({type: 'ADD_WISHLIST_FROM_DESTINATION', payload: res.data.data[0].id})
      })

    }
    
    console.log(search)
  return (
    <>
    <div className='searchDestination'>
        <div className="d-flex justify-content-center">
            <div className="col-6">
                {/* <h1 className='text-center text-light fw-bold'>Welcome!</h1> */}
                <h3 className='text-center text-light fw-bold'>Find your next destination</h3>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text button search-input">O</span>
                    </div>
                    <input type="text" 
                    className="form-control search-input" 
                    placeholder='Search Destination'
                    onChange={(e) => {setSearch(e.target.value)}}
                    />
                    <div className="input-group-append">
                        <button className="input-group-text button search-input search">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='container mt-5 content-destination'>
      <div className="row">
        {destinations.map((item, index) => {
          console.log(item)
              return (
                <div className="col-lg-4 col-sm-12 card-destination">
                  <div className='item mt-4 m-2'
                      onClick={()=>
                        {dispatch({type: 'DETAIL_DESTINATION', payload: item});
                        getIdWishlist(item.id)
                        }}>
                      <div className="card card-carouselku"
                      >
                          <img src={item.imageDestination} className="card-img-top img-destinationku" alt="..."/>
                          <div className="card-body">
                              <p className='text-center'>{item.nameDestination}</p>
                          </div>
                      </div>
                  </div>
                </div>
              )
          })}
      </div>
    </div>
    </>
  )
}

export default DestinationComponent
