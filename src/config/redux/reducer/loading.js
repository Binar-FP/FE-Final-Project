const initialState ={
    loading: false,
}

const loading = (state = initialState, action) => {
    switch (action.type) {
        case 'PROGRESS':
            return ({
                ...state,
                loading: true,
            });
        case 'END':
            return ({
                ...state,
                loading: false,
            });
        default:
            return state;
    }
}

export default loading