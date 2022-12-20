import API from "./api"

export const BookingService = {

    getBookingSchedules : async (data) => {
        const response = await API.post('/flights/search/', data);
        return response;
    },

}