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
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const DeleteUsersActions = (id) => async (dispatch) => {
    try {
        const response = await UsersService.deleteUsers(id);
        SweatAlert('Delete Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const CreateUsersActions = (data) => async (dispatch) => {
    try {
        const response = await UsersService.createUsers(data);
        // dispatch({type: 'GET_AIRPORT', payload: response.data});
        SweatAlert('Create Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}