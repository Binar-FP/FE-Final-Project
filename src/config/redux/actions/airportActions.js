import { AirportService } from "../../../services/airportService";
import SweatAlert from "../../SweatAlert";

export const getAirportActions = () => async (dispatch) => {
    try {
        const response = await AirportService.getAirport();
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const PutAirportActions = (id, data) => async (dispatch) => {
    try {
        const response = await AirportService.postAirport(id, data);
        SweatAlert('Update Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const DeleteAirportActions = (id) => async (dispatch) => {
    try {
        const response = await AirportService.deleteAirport(id);
        SweatAlert('Delete Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const CreateAirportActions = (data) => async (dispatch) => {
    try {
        const response = await AirportService.createAirport(data);
        SweatAlert('Create Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}