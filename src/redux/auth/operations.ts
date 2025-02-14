import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { RootState } from '../store';

axios.defaults.baseURL = 'http://localhost:5000/api';


// Utility to add JWT
const setAuthHeader = (token:string )=> {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

interface AuthResponse {
  user: { name: string; email: string }; // Adjust based on your API response
  token: string;
}
interface Credentials {
  email: string;
  password: string;
}

export const register = createAsyncThunk<
    AuthResponse, 
    Credentials, 
    { state: RootState }
    >(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/signup', credentials);
     
        setAuthHeader(res.data.token);
        // console.log(res);
        return res.data;
      } catch (error: unknown) {
        Notify.info('Something went wrong. Please, try again later.');
        if(error instanceof AxiosError){
          return thunkAPI.rejectWithValue(error.message);

        }
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
        const res = await axios.post('/users/login', credentials);
      
        setAuthHeader(res.data.token);
        return res.data;
      } catch (error: unknown) {
        Notify.info('Something went wrong. Please, try again later.');
        if(error instanceof AxiosError){
        return thunkAPI.rejectWithValue(error.message);
        }
      }
    }
  );

  export const logOut = createAsyncThunk<void, void, { state: RootState }>('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
   
      clearAuthHeader();
    } catch (error:unknown) {
      if(error instanceof AxiosError){
      return thunkAPI.rejectWithValue(error.message);
      }
    }
  });

  export const refreshUser = createAsyncThunk<
  any, // The type of the return value (you can replace `any` with a proper type)
  void, // No arguments are passed to the async function
  { state: RootState } // This tells TypeScript what type `thunkAPI.getState()` returns
>(
    'auth/refresh',
    async (_, thunkAPI) => {
     
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
    
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        // If there is a token, add it to the HTTP header and perform the request
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error:unknown) {
        if(error instanceof AxiosError){
        return thunkAPI.rejectWithValue(error.message);
        }
      }
    }
  );