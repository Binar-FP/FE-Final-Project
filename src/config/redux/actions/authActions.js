import { AuthService } from "../../../services/authService";
import SweatAlert from "../../SweatAlert";

export const loginActions = (data, history) => async (dispatch) => {
    try {
        const response = await AuthService.login(data);
        dispatch({type: 'LOGIN', payload: response.data});
        SweatAlert(response.data.message, 'success');
        history('/');
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

export const loginGoogleActions = (data, history) => async (dispatch) => {
    try {
        const response = await AuthService.loginGoogle(data);
        dispatch({type: 'LOGIN', payload: response.data});
        SweatAlert(response.data.message, 'success');
        history('/');
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

export const loginAdminActions = (data, history) => async (dispatch) => {
    try {
        const response = await AuthService.loginAdmin(data);
        dispatch({type: 'LOGIN', payload: response.data});
        console.log(response.data)
        SweatAlert("Success Login", 'success');
        history('/admin');
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

export const registerActions = (data, history) => async (dispatch) => {
    try {
        await AuthService.register(data);
        SweatAlert('Register Success', 'success');
        history('/login');
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

export const updateProfile = (id, data, history) => async (dispatch) => {
    try {
        const response = await AuthService.updateProfile(id, data);
        dispatch({type: 'END'});
        SweatAlert('Update Berhasil', 'success');
        history('/profile');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const updatePassword = (id, data, history) => async (dispatch) => {
    try {
        const response = await AuthService.updatePassword(id, data);
        dispatch({type: 'END'});
        SweatAlert('Update Berhasil', 'success');
        history('/profile');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const verifyAccountActions = (data, history) => async (dispatch) => {
    try {
        await AuthService.verifyAccount(data);
        SweatAlert('Verified Account', 'success');
        history('/login');
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

export const forgotActions = (data) => async (dispatch) => {
    try {
        await AuthService.forgotPassword(data);
        SweatAlert('Email Send, Check Your Email', 'success');
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

export const resetActions = (data, history, token, id) => async (dispatch) => {
    try {
        await AuthService.resetPassword(data, token, id);
        SweatAlert('Password Success Change', 'success');
        history('/login');
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

export const logoutActions = (history, role) => async (dispatch) => {
    try {
        const response = await AuthService.logout();
        dispatch({type: 'LOGOUT', payload: response});
        SweatAlert('Success Logout', 'success');
        role === "admin" ? history('/login/admin') : history('/login')
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }   
}

