import { BookingService } from "../../../services/bookingService";
import SweatAlert from "../../SweatAlert";

export const getBookingActions = (data) => async (dispatch) => {
    try {
        const response = await BookingService.getBookingSchedules(data);
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const BookingActions = (data) => async (dispatch) => {
    try {
        dispatch({type: 'CONFIRM_FLIGHT', payload: data});
        return;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}
