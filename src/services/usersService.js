import API from "./api"

export const UsersService = {

    getUsers : async () => {
        const response = await API.get('/users/findAll');
        return response;
    },

    getUsersById : async (id) => {
        const response = await API.get('/users/findById/'+id);
        return response;
    },

    postUsers : async (id, data) => {
        const response = await API.put('/users/update/'+id, data,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response;
    },

    deleteUsers : async (id) => {
        const response = await API.delete('/users/delete/'+id);
        return response;
    },

    createUsers : async (data) => {
        const response = await API.post('/register', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response;
    },

}