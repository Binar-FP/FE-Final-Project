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
    typeOfClass: "",
    idBooking: 0,
    // FLights RoundWay
    roundtrip: false,
    idBookingRound: 0,
    idFlightRound: 1,
    airLineRound: "",
    priceRound: "0",
    seatNumberRound: "A1",
    
}

const booking = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'CONFIRM_FLIGHT':
            return ({
                ...state,
                id: action.payload.id,
                airLine: action.payload.airLine,
                typeOfClass: action.payload.typeOfClass,
                price: action.payload.ClassPrice,
                pages: "passenger"
            });
        case 'CONFIRM_FLIGHT_ROUND':
        return ({
            ...state,
            idFlightRound: action.payload.id,
            airLineRound: action.payload.airLine,
            typeOfClassRound: action.payload.typeOfClass,
            priceRound: action.payload.ClassPrice,
            roundtrip: true,
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
        case 'BOOKING':
            return ({
                ...state,
                pages: "payment",
                idBooking: action.payload
            });
        case 'BOOKING_ROUND':
            return ({
                ...state,
                pages: "payment",
                idBooking: action.payload.newBooking[0].id,
                idBookingRound: action.payload.newBooking[1].id
            });
        case 'SUCCESS_PAYMENT':
            return ({
                ...state,
                pages: "success"
            });
        default:
            return state;
    }
}

export default booking