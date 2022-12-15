import API from "./api"

export const FlightsService = {

    getFlights : async () => {
        const response = await API.get('/flights/findAll');
        return response;
    },

    getFlightsById : async (id) => {
        const response = await API.get('/flights/findById/'+id);
        return response;
    },

    postFlights : async (id, data) => {
        const response = await API.put('/flights/update/'+id, data);
        return response;
    },

    deleteFlights : async (id) => {
        const response = await API.delete('/flights/delete/'+id);
        return response;
    },

    createFlights : async (data) => {
        const response = await API.post('/flights/add', data);
        return response;
    },

}