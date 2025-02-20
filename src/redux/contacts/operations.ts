import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { Contact } from "../../types/contact.model";
import { RootState } from "../store";


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
export interface PB_update_Response {
  contact: Contact
  message: string
  existingNameError?: boolean
  existingNumberError?: boolean
  querytFormatError?: boolean
}
interface PB_data{
  name: string
  number: string
}
export interface pagination {
  page: number 
  }

 export const fetchContacts  = 
  createAsyncThunk< PB_Response, pagination, { state: RootState}>(
    "contacts/fetchAll",
  
    async ({ page = 1 } , thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const limit = state.contacts.limit; // Retrieve limit from Redux state
      const query = state.contacts.query;

      try {
        const response = await axios
        .get(`/contacts/grab?page=${page}&limit=${limit}&query=${query}`);
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

        if (response.data) {
          // Notify.success(response.data.message);
          // Get current page & limit from state
          const { currentPage, totalPages} = (thunkAPI.getState() as RootState).contacts;
          const page = currentPage > totalPages ? totalPages : currentPage; // Stay within bounds
  
          // Re-fetch contacts after adding
          thunkAPI.dispatch(fetchContacts({ page }));
        }
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

        if (response.data) {
          // Notify.success(response.data.message);
            const { currentPage,  contactsList } = (thunkAPI.getState() as RootState).contacts;
          let page = currentPage;
          if (contactsList.length === 1 && currentPage > 1) {
            page = currentPage - 1; // Move back a page if last item is deleted
          }
            // Re-fetch contacts after deletion
          thunkAPI.dispatch(fetchContacts({ page }));
        }
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
      // if(response.data) Notify.success(response.data.message)

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