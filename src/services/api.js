import axios from "axios";

const API = axios.create({
  baseURL: "http://64.226.82.173:3000",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});

API.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response.status !== 401) {
      throw err;
    }
    throw err;
    // console.log(err.response)
    // if (typeof err.response.data.error.name !== 'undefined') {
    //   if ( err.response.data.error.name === 'TokenExpiredError') {
    //     // store.dispatch(logout());
    //     throw err
    //   }
    // }
  }
);

export default API;
