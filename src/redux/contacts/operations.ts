import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { Contact } from "../../types/contact.model";
import { RootState } from "../store";
import { number } from "zod";

axios.defaults.baseURL = import.meta.env.VITE_HOST

interface PB_Response {
  list: Contact[]
  message: string
  pagination:{
    totalItems: number
    totalPages: number
    currentPage: number
    pageSize: number
    page: number
  }
}
interface PB_update_Response {
  contact: Contact
  message: string
  existingNameError?: boolean
  existingNumberError?: boolean
}
interface PB_data{
  name: string
  number: string
}

export interface pagination {
  page: number
  limit: number
}


 export const fetchContacts  = 
  createAsyncThunk< PB_Response, pagination, { state: RootState}>(
    "contacts/fetchAll",
  
    async ({page = 1, limit = 5}, thunkAPI) => {

      try {
        const response = await axios.get(`/contacts/grab?page=${page}&limit=${limit}`); //?page=${page}&limit=${limit}
        if(!response.data){
          return thunkAPI.rejectWithValue('Unable to fetch contacts');
        }
        return response.data;

      } catch (error: unknown) {
        if(error instanceof AxiosError){
          return thunkAPI.rejectWithValue(error.message);
        }
        Notify.info('Something went wrong. ');
      }
    }
  );

 export const addContact = 
  createAsyncThunk< PB_update_Response, PB_data, { state: RootState }>(
    "contacts/addContact",
  
    async (contact, thunkAPI) => {
      const {name, number} = contact
      try {
        const response = await axios.post("/contacts/new", {name, number});
        return response.data;

      } catch (error: unknown) {
        if(error instanceof AxiosError){
          // return thunkAPI.rejectWithValue(error.response?.data.message);//receiving massage from backend
          return thunkAPI.rejectWithValue(error.response?.data.errorCode);//receiving errorCode from backend
        }
        Notify.warning('Something went wrong. ');
      }
    }
  );

 export const deleteContact = 
  createAsyncThunk< PB_update_Response, string, { state: RootState}>(
    "contacts/deleteContact",
    async (id, thunkAPI) => {

      try {
        const response = await axios.delete(`/contacts/${id}`);  
        return response.data;

      } catch (error: unknown) {
        if(error instanceof AxiosError){
          console.log(error);
          return thunkAPI.rejectWithValue(error.message);
        }
        Notify.info('Something went wrong. ');
      }
    }
  );


 export const editContact = 
  createAsyncThunk< PB_update_Response, Contact, { state: RootState }>(
    "contacts/editContact",
  
    async (contact, thunkAPI) => {
     

   const {_id, name, number} = contact
   try {
      const response = await axios.patch(`/contacts/${_id}`, {
        name,
        number,
      });
      if(response.data) Notify.success(response.data.message)
        return response.data;

      } catch (error: unknown) {
        if(error instanceof AxiosError){
          // return thunkAPI.rejectWithValue(error.response?.data.message);
          return thunkAPI.rejectWithValue(error.response?.data.errorCode);//receiving errorCode from backend
        }
        Notify.info('Something went wrong. ');
      }
    }
  );