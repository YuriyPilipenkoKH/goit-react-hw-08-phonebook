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

interface AuthResponse {
  user: User; // Adjust based on your API response
  token: string;
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
        // console.log(res);
        return res.data;
      } catch (error: unknown) {
        if(error instanceof AxiosError){
          return thunkAPI.rejectWithValue(error.message);
        }
        Notify.info('Something went wrong. ');
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
        return res.data;
      } catch (error: unknown) {
        Notify.info('Something went wrong. Please, try again later.');
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
      localStorage.setItem("token-08", "")
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
     console.log('refreshUser');
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      console.log('persistedToken');
  
      if (persistedToken === null) {
    
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        // If there is a token, add it to the HTTP header and perform the request
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