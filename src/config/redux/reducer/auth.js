const initialState ={
    // local storage
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token'),
    isLoggedIn: localStorage.getItem('user') ? true : false,
    roleId: JSON.parse(localStorage.getItem('role')) || {},
    id: JSON.parse(localStorage.getItem('id')) || {},
    email: JSON.parse(localStorage.getItem('email')) || {},
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return ({
                ...state,
                user: action.payload.data.user,
                token: action.payload.data.token,
                isLoggedIn: true,
                roleId: action.payload.data.roleId,
                id: action.payload.data.id,
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