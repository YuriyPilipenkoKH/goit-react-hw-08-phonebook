// import axios from "axios";

// const HOST = import.meta.env.VITE_HOST

// const api = axios.create({
  
//   baseURL:  `${HOST}`,
//   withCredentials:true,
//   headers: { "Content-Type": "application/json" }
// })

// // Axios interceptor for handling expired tokens
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // If the access token is expired or invalid
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       const refreshToken = localStorage.getItem("refreshToken");
//       if (!refreshToken) {
//         logoutUser();
//         return Promise.reject(error);
//       }

//       try {
//         const { data } = await axios.post("/refresh", { refreshToken });
//         localStorage.setItem("accessToken", data.accessToken);

//         // Retry the original request with the new token
//         originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.log("Refresh token expired or invalid. Logging out.");
//         logoutUser();
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;