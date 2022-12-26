import API from "./api"

export const NotificationService = {

    readAll : async (data) => {
        const response = await API.put('/notification/updateAll/', data);
        return response;
    },

    readOne : async (data) => {
        const response = await API.put('/notification/update/', data);
        return response;
    },

}