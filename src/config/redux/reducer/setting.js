const initialState ={
    pages: "personalDetail"
    
}

const setting = (state = initialState, action) => {
    switch (action.type) {
        case 'PERSONAL_DETAIL':
            return ({
                ...state,
                pages: "personalDetail"
            });
        case 'HISTORY':
            return ({
                ...state,
                pages: "history"
            });
        case 'WISHLIST-SETTING':
            return ({
                ...state,
                pages: "wishlist"
            });
        case 'HELP':
        return ({
            ...state,
            pages: "help"
        });
        case 'NOTIFICATION':
        return ({
            ...state,
            pages: "notification"
        });
        default:
            return state;
    }
}

export default setting