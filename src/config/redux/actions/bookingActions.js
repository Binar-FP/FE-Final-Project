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

export const BookingActions = (data,roundtrip) => async (dispatch) => {
    try {
        const response = await BookingService.Booking(data);
        if (roundtrip === true) {
            dispatch({type: 'BOOKING_ROUND', payload : response.data.data});
        }else{
            dispatch({type: 'BOOKING', payload : response.data.data.newBooking[0].id});
        }
        // dispatch({type: 'BOOKING', payload : response.data.data.newBooking.id});
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const PaymentActions = (data, dataBooking) => async (dispatch) => {
    console.log(dataBooking)
    try {
        const response = await BookingService.paymentBooking(data);
        if (response.data.paid === true) {
            if(dataBooking.roundtrip === true){
                const updateData = {
                    status : true,
                    id : dataBooking.idBooking
                }
                await BookingService.updateBooking(updateData);
                const updateDataRound = {
                    status : true,
                    id : dataBooking.idBookingRound
                }
                await BookingService.updateBooking(updateDataRound);
                dispatch({type: 'SUCCESS_PAYMENT'});
                dispatch({type: 'END'});
            }else{
                const updateData = {
                    status : true,
                    id : dataBooking.idBooking
                }
                await BookingService.updateBooking(updateData);
                dispatch({type: 'SUCCESS_PAYMENT'});
                dispatch({type: 'END'});
            }
        }
        return;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}
