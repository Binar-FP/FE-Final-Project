import { BookingService } from "../../../services/bookingService";
import SweatAlert from "../../SweatAlert";

export const getBookingActions = (data) => async (dispatch) => {
    try {
        const response = await BookingService.getBookingSchedules(data);
        // dispatch({type: 'BOOKING_SEARCH', payload: data});
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}
