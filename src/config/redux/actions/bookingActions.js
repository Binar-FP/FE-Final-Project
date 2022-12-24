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
        dispatch({type: 'BOOKING'});
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const PaymentActions = (data, userId) => async (dispatch) => {
    try {
        const response = await BookingService.paymentBooking(data);
        if (response.data.paid === true) {
            console.log('masuk')
            const updateData = {
                status : true,
                id : userId
            }
            await BookingService.updateBooking(updateData);
            dispatch({type: 'SUCCESS_PAYMENT'});
            dispatch({type: 'END'});
        }
        return;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}
