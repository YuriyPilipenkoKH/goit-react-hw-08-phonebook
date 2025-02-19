
import  axios, { AxiosError } from 'axios';
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
  user: User; 
  token: string;
  message:string
}
interface Credentials {
  name?:string
  email: string
  password: string
}

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

        Notify.success(res.data.message)
        return res.data
      } catch (error) {
        if(error instanceof AxiosError){
       
          // return thunkAPI.rejectWithValue(error.response?.data.message );
          return thunkAPI.rejectWithValue(error.response?.data.errorCode);
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
        if(error instanceof AxiosError){
        // return thunkAPI.rejectWithValue(error.response?.data.message);
        return thunkAPI.rejectWithValue(error.response?.data.errorCode);
        }
      }
    }
  );

  export const logOut = createAsyncThunk<
    void, 
    string, 
    { state: RootState }
    >(
    'auth/logout', async (userName, thunkAPI) => {
    try {
     const res =  await axios.post('/auth/logout', {userName});
   
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