import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { RootState } from '../store';
import { User } from '../../types/user.model';

axios.defaults.baseURL =  import.meta.env.VITE_HOST



// Utility to add JWT
const setAuthHeader = (token:string )=> {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export interface AuthResponse {
  user: User; // Adjust based on your API response
  token: string;
  message:string
}
interface Credentials {
  name?:string
  email: string
  password: string
}
// export interface Rg_result{
//   type:string
//   payload: {
//     message:string
//     user: User
//   }
// }

export const register = createAsyncThunk<
    AuthResponse, 
    Credentials, 
    { state: RootState }
    >(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/auth/signup', credentials);
     
        // setAuthHeader(res.data.token);
        // console.log(res);
        Notify.success(res.data.message)
        return res.data
      } catch (error) {
        if(error instanceof AxiosError){
          return thunkAPI.rejectWithValue(error.response?.data.message );
        }
        Notify.warning('Something went wrong. ');
      }
    }
  );

  export const logIn = createAsyncThunk<
    AuthResponse, 
    Credentials, 
    { state: RootState }
    >(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/auth/login', credentials);
      
        setAuthHeader(res.data.token);
        localStorage.setItem("token-08",res.data.token)
        Notify.success(res.data.message)
        return res.data;
      } catch (error: unknown) {
        Notify.warning('Something went wrong. Please, try again later.');
        if(error instanceof AxiosError){
        return thunkAPI.rejectWithValue(error.message);
        }
      }
    }
  );

  export const logOut = createAsyncThunk<
    void, 
    void, 
    { state: RootState }
    >(
    'auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/auth/logout');
   
      clearAuthHeader();
      localStorage.removeItem("token-08");
      localStorage.removeItem("refreshToken");
      Notify.success(res.data.message)
    } catch (error:unknown) {
      if(error instanceof AxiosError){
      return thunkAPI.rejectWithValue(error.message);
      }
    }
  });

  export const refreshUser = createAsyncThunk<
    AuthResponse, 
    void, 
    { state: RootState } 
  >(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/auth/current');
        return res.data;
      } catch (error:unknown) {
        if(error instanceof AxiosError){
        return thunkAPI.rejectWithValue(error.message);
        }
      }
    }
  );