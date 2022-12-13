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

    loginGoogle : async (data) => {
        const response = await API.post('/google', data);
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

    loginAdmin : async (data) => {
        const response = await API.post('/login/admin', data);
        const Name = response.data.data.firstName;
        const RoleId = response.data.data.roleId;
        setHeadersAndStorage(response.data, Name, RoleId);
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
    },

    logout : async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isLogged');
        localStorage.removeItem('user');
        return;
    }
}

const setHeadersAndStorage = ({ user, token}, Name, RoleId) => {
    API.defaults.headers['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('user', JSON.stringify(Name));
    localStorage.setItem('role', JSON.stringify(RoleId));
    localStorage.setItem('token', token);
    localStorage.setItem('isLogged',true);
    
    
  }