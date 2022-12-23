const initialState ={
    pages: "",
    id: 1,
    airLine: "",
    name: "",
    price: "1000000",
    bagage: 0,
    age: 0, 
    NIK: 0, 
    phoneNumber: "0823243462344",
    seatNumber: "A1",
    
}

const booking = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'CONFIRM_FLIGHT':
            return ({
                ...state,
                id: action.payload.id,
                airLine: action.payload.airLine,
                // price: action.payload.ClassPrice, ditembak dulu
                price: "200000",
                pages: "passenger"
            });
        case 'ADD_PASSENGER':
            return ({
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                NIK: action.payload.nik,
                bagage: action.payload.bagage,
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
                seatNumber: action.payload,
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