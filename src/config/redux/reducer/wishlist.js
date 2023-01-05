const initialState ={
    idwishlist: 0
  
    
}

const wishlist = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'ADD_WISHLIST':
            return ({
                ...state,
                idwishlist: action.payload.id
            });
        case 'ADD_WISHLIST_FROM_DESTINATION':
            return ({
                ...state,
                idwishlist: action.payload
            });
        default:
            return state;
    }
}

export default wishlist