import API from "./api"

export const DestinationsService = {

    getDestinations : async () => {
        const response = await API.get('/destinations/findAll');
        return response;
    },

    getDestinationsById : async (id) => {
        const response = await API.get('/destinations/findById/'+id);
        return response;
    },

    postDestinations : async (id, data) => {
        const response = await API.put('/destinations/update/'+id, data,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response;
    },

    deleteDestinations : async (id) => {
        const response = await API.delete('/destinations/delete/'+id);
        return response;
    },

    createDestinations : async (data) => {
        const response = await API.post('/destinations/add', data,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response;
    },

}