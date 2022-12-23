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
        const response = await API.post('/checkout/create', data);
        return response;
    },

}