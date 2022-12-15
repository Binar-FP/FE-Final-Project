import { SchedulesService } from "../../../services/schedulesService";
import SweatAlert from "../../SweatAlert";

export const getSchedulesActions = () => async (dispatch) => {
    try {
        const response = await SchedulesService.getSchedules();
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const PutSchedulesActions = (id, data) => async (dispatch) => {
    try {
        const response = await SchedulesService.postSchedules(id, data);
        SweatAlert('Update Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const DeleteSchedulesActions = (id) => async (dispatch) => {
    try {
        const response = await SchedulesService.deleteSchedules(id);
        SweatAlert('Delete Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}

export const CreateSchedulesActions = (data) => async (dispatch) => {
    try {
        const response = await SchedulesService.createSchedules(data);
        SweatAlert('Create Berhasil', 'success');
        return response;
    } catch (error) {
        SweatAlert(String(error.response.data.message), 'warning')
    }       
}