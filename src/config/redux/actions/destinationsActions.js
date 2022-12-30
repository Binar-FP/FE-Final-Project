import { DestinationsService } from "../../../services/destinationsService.js";
import SweatAlert from "../../SweatAlert";

export const getDestinationsActions = () => async (dispatch) => {
    try {
        const response = await DestinationsService.getDestinations();
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const PutDestinationsActions = (id, data) => async (dispatch) => {
    try {
        const response = await DestinationsService.postDestinations(id, data);
        SweatAlert('Update Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const DeleteDestinationsActions = (id) => async (dispatch) => {
    try {
        const response = await DestinationsService.deleteDestinations(id);
        SweatAlert('Delete Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const CreateDestinationsActions = (data) => async (dispatch) => {
    try {
        const response = await DestinationsService.createDestinations(data);
        SweatAlert('Create Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}