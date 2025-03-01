import axios from "axios";
import { getDispatch } from "../redux/store";
import { logOut } from "../redux/auth/operations";

const HOST = import.meta.env.VITE_HOST

const api = axios.create({
  
  baseURL:  `${HOST}`,
  withCredentials:true,
  headers: { "Content-Type": "application/json" }
})

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       const refreshToken = localStorage.getItem("refreshToken");
//       if (!refreshToken) {
//         getDispatch()(logOut(user?.name || 'Dude')); // Dispatch Redux action outside a component
//         return Promise.reject(error);
//       }

//       try {
//         const { data } = await axios.post("/refresh", { refreshToken });
//         localStorage.setItem("accessToken", data.accessToken);

//         originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.log("Refresh token expired or invalid. Logging out.");
//         getDispatch()(logOut());
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;
