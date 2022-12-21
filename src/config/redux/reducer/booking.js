const initialState ={
    pages: "",
    fligth_id: 1,
    airLine: "Garuda Indonesia",
    name: "nadir",
    price: 1000000,
    age: 20, 
    NIK: 1234567891012, 
    phoneNumber: "0823243462344",
    seatNumber: "A1",
    
}

const booking = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'CONFIRM_FLIGHT':
            return ({
                ...state,
                fligth_id: action.payload.id,
                airLine: action.payload.airLine,
                price: action.payload.ClassPrice,
                pages: "passenger"
            });
        case 'ADD_PASSENGER':
            return ({
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                NIK: action.payload.NIK,
                phoneNumber: action.payload.phoneNumber,
                pages: "bagage"
            });
        case 'ADD_BAGAGE':
            return ({
                ...state,
                pages: "seat"
            });
        case 'ADD_SEAT':
            return ({
                ...state,
                pages: "payment"
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