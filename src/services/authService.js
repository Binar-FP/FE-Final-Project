import API from "./api"

export const AuthService = {
    login : async (data) => {
        const response = await API.post('/login', data);
        const Name = response.data.data.firstName;
        setHeadersAndStorage(response.data, Name);
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
        console.log(response.data);
        
        return response;
    },

    register : async (data) => {
        const response = await API.post('/register', data);
        return response;
    }
}

const setHeadersAndStorage = ({ user, token}, Name) => {
    API.defaults.headers['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('user', JSON.stringify(Name));
    localStorage.setItem('token', token);
    localStorage.setItem('isLogged',true);
    
    
  }