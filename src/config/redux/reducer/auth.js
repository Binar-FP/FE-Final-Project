const initialState ={
    // local storage
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token'),
    isLoggedIn: localStorage.getItem('user') ? true : false,
    roleId: JSON.parse(localStorage.getItem('role')) || {},
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return ({
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true,
                roleId: action.payload.roleId
            });
        case 'REGISTER':
            return ({
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true
            });
        case 'LOGOUT':
            return ({
                ...state,
                user: {},
                token: null,
                isLoggedIn: false
            });
        default:
            return state;
    }
}

export default auth