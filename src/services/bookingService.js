import API from "./api"

export const BookingService = {

    getBookingSchedules : async (data) => {
        const response = await API.post('/flights/search/', data);
        return response;
    },

    Booking : async (data) => {
        const response = await API.post('/bookings/add/', data);
        return response;
    },

    paymentBooking : async (data) => {
        const response = await API.post('/checkout/checkout', data);
        return response;
    },

    SeatBooking : async (data) => {
        const response = await API.get('/seats/findAll/', data);
        return response;
    },

    updateBooking : async (data) => {
        const response = await API.post('/bookings/update/', data);
        return response;
    }

}