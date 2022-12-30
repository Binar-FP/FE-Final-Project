import { FlightsService } from "../../../services/flightsService";
import SweatAlert from "../../SweatAlert";

export const getFlightsActions = () => async (dispatch) => {
    try {
        const response = await FlightsService.getFlights();
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const PutFlightsActions = (id, data) => async (dispatch) => {
    try {
        const response = await FlightsService.postFlights(id, data);
        SweatAlert('Update Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const DeleteFlightsActions = (id) => async (dispatch) => {
    try {
        const response = await FlightsService.deleteFlights(id);
        SweatAlert('Delete Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const CreateFlightsActions = (data) => async (dispatch) => {
    try {
        const response = await FlightsService.createFlights(data);
        SweatAlert('Create Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}