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
        case 'HELP':
        return ({
            ...state,
            pages: "help"
        });
        default:
            return state;
    }
}

export default setting