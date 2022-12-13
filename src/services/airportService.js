import API from "./api"

export const AirportService = {

    getAirport : async () => {
        const response = await API.get('/airports/findAll');
        return response;
    },

    postAirport : async (id, data) => {
        const response = await API.put('/airports/update/'+id, data);
        return response;
    },

    deleteAirport : async (id) => {
        const response = await API.delete('/airports/delete/'+id);
        return response;
    },

}