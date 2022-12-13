import { AirportService } from "../../../services/airportService";
import SweatAlert from "../../SweatAlert";

export const getAirportActions = () => async (dispatch) => {
    try {
        const response = await AirportService.getAirport();
        // dispatch({type: 'GET_AIRPORT', payload: response.data});
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const PutAirportActions = (id, data) => async (dispatch) => {
    try {
        const response = await AirportService.postAirport(id, data);
        // dispatch({type: 'GET_AIRPORT', payload: response.data});
        SweatAlert('Update Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const DeleteAirportActions = (id) => async (dispatch) => {
    try {
        const response = await AirportService.deleteAirport(id);
        // dispatch({type: 'GET_AIRPORT', payload: response.data});
        SweatAlert('Delete Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const CreateAirportActions = (data) => async (dispatch) => {
    try {
        const response = await AirportService.createAirport(data);
        // dispatch({type: 'GET_AIRPORT', payload: response.data});
        SweatAlert('Create Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}