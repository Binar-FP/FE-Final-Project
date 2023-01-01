const initialState ={
    pages: "destination",
    image: "",
    nameDestination: "",
    description: "",
    id: 0,
    idwishlist: 0
  
    
}

const destinations = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'DETAIL_DESTINATION':
            return ({
                ...state,
                image: action.payload.imageDestination,
                nameDestination: action.payload.nameDestination,
                description: action.payload.description,
                id: action.payload.id,
                pages: "detail_destination"
            });
        default:
            return state;
    }
}

export default destinations