import API from "./api"

export const HistoryService = {

    getHistory : async (id) => {
        const response = await API.post('/histories', id);
        return response;
    },
    
    getBoardingPass : async (data) => {
        const response = await API.post('/boardingPass/add', data);
        return response;
    },

}