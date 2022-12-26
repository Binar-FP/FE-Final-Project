import API from "./api"

export const AuthService = {
    login : async (data) => {
        const response = await API.post('/login', data);
        const Name = response.data.data.firstName;
        const RoleId = response.data.data.roleId;
        const id = response.data.data.id;
        setHeadersAndStorage(response.data, Name, RoleId, id);
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
        console.log(response.data.data.roleId);
        const Name = response.data.data.firstName;
        const RoleId = response.data.data.roleId;
        const id = response.data.data.id;
        setHeadersAndStorage(response.data, Name, RoleId, id);
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
        const id = response.data.data.id;
        setHeadersAndStorage(response.data, Name, RoleId, id);
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

    updateProfile : async (id, data) => {
        const response = await API.put('/users/update/'+id, data,{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response;
    },

    register : async (data) => {
        const response = await API.post('/register', data);
        return response;
    },

    verifyAccount : async (data) => {
        const response = await API.post('/auth/send-email', data);
        return response;
    },

    forgotPassword : async (data) => {
        const response = await API.post('/forgotpassword', data);
        return response;
    },

    resetPassword : async (data, token, id) => {
        const response = await API.post('/reset-password/'+id+"/"+token, data);
        return response;
    },

    logout : async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isLogged');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        return;
    }
}

const setHeadersAndStorage = ({ user, token}, Name, RoleId, id) => {
    API.defaults.headers['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('user', JSON.stringify(Name));
    localStorage.setItem('role', JSON.stringify(RoleId));
    localStorage.setItem('id', JSON.stringify(id));
    localStorage.setItem('token', token);
    localStorage.setItem('isLogged',true);
    
    
  }