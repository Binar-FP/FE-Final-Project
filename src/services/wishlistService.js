import API from "./api"

export const WishlistService = {

    addWishlist : async (data) => {
        const response = await API.post('/whislist/add', data);
        return response;
    },

    removeWishlist : async (id) => {
        const response = await API.delete('whislist/delete/'+ id);
        return response;
    },

    searchWishlist : async (data) => {
        const response = await API.post('whislist/searchWhislist/', data);
        return response;
    },

    getWishlistUser : async (data) => {
        const response = await API.post('whislist/whislistUser', data);
        return response;
    },

    searhFlightWishlist : async (data) => {
        const response = await API.post('whislist/searchFlight', data);
        return response;
    }


}