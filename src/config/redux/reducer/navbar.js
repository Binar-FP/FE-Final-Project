const initialState ={
    pages: "home",
}

const navbar = (state = initialState, action) => {
    switch (action.type) {
        case 'HOME':
            return ({
                ...state,
                pages: "home",
            });
        case 'HELP':
            return ({
                ...state,
                pages: "help",
            });
        case 'DESTINATION':
            return ({
                ...state,
                pages: "destination",
            });
        case 'LOGIN_NAV':
            return ({
                ...state,
                pages: "loginku",
            });
        case 'REGISTER_NAV':
            return ({
                ...state,
                pages: "register",
            });
        case 'NOTIF':
            return ({
                ...state,
                pages: "notification",
            });
        default:
            return state;
    }
}

export default navbar