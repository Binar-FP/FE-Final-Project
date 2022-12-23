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
        const response = await BookingService.Booking(data);
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const PaymentActions = (data, history) => async (dispatch) => {
    try {
        const response = await BookingService.paymentBooking(data);
        history(response.data.link);
        return;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}
