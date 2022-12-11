import { AuthService } from "../../../services/authService";
import SweatAlert from "../../SweatAlert";

export const loginActions = (data, history) => async (dispatch) => {
    try {
        const response = await AuthService.login(data);
        dispatch({type: 'LOGIN', payload: response.data});
        SweatAlert('Login Berhasil', 'success');
        history('/');
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

export const registerActions = (data, history) => async (dispatch) => {
    try {
        const response = await AuthService.register(data);
        dispatch({type: 'REGISTER', payload: response.data});
        SweatAlert('Register Berhasil', 'success');
        history('/login');
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

