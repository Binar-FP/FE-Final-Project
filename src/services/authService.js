import API from "./api"

export const AuthService = {
    login : async (data) => {
        const response = await API.post('/login', data);
        setHeadersAndStorage(response.data, data.rememberMe);
        if (data.rememberMe === true) {
            setTimeout(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('isLogged');
            }
            , 604800000);
        } else {
            setTimeout(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('isLogged');
            }
            , 86400000);
        }
        return response;
    },

    register : async (data) => {
        const response = await API.post('/register', data);
        return response;
    }
}

const setHeadersAndStorage = ({ user, token}, rememberMe) => {
    API.defaults.headers['Authorization'] = `Bearer ${token}`;
    // localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('isLogged',true);
    
    
  }