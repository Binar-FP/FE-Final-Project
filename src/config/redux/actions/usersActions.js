import { UsersService } from "../../../services/usersService";
import SweatAlert from "../../SweatAlert";

export const getUsersActions = () => async (dispatch) => {
    try {
        const response = await UsersService.getUsers();
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const PutUsersActions = (id, data) => async (dispatch) => {
    try {
        const response = await UsersService.postUsers(id, data);
        SweatAlert('Update Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const DeleteUsersActions = (id) => async (dispatch) => {
    try {
        const response = await UsersService.deleteUsers(id);
        SweatAlert('Delete Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}

export const CreateUsersActions = (data) => async (dispatch) => {
    try {
        const response = await UsersService.createUsers(data);
        SweatAlert('Create Berhasil', 'success');
        dispatch({type: 'END'})  
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
        dispatch({type: 'END'})  
    }       
}