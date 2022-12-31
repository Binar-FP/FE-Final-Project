import API from "./api"

export const SchedulesService = {

    getSchedules : async () => {
        const response = await API.get('/schedules/findAll');
        return response;
    },

    getSchedulesById : async (id) => {
        const response = await API.get('/schedules/findById/'+id);
        return response;
    },

    postSchedules : async (id, data) => {
        const response = await API.put('/schedules/update/'+id, data);
        return response;
    },

    deleteSchedules : async (id) => {
        const response = await API.delete('/schedules/delete/'+id);
        return response;
    },

    createSchedules : async (data) => {
        const response = await API.post('/Schedules/add', data);
        return response;
    },

}