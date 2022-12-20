const initialState ={
    
}

const booking = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PASSANGER':
            return ({
                ...state,
            });
        case 'ADD_BAGAGE':
            return ({
                ...state,
            });
        case 'ADD_SEAT':
            return ({
                ...state,
            });
        case 'ADD_PAYMENT':
            return ({
                ...state,
            });
        default:
            return state;
    }
}

export default booking