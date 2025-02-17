import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { Contact } from "../../types/contact.model";
import { ContactsState } from "./contactsSlice";
import { RootState } from "../store";

axios.defaults.baseURL = import.meta.env.VITE_HOST

interface PB_Response {
  list: Contact[]
  message: string
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

 export const fetchContacts  = 
  createAsyncThunk< PB_Response, void, { state: RootState}>(
    "contacts/fetchAll",
  
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts/grab");
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
          return thunkAPI.rejectWithValue(error.response?.data.message);
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
        return response.data;

      } catch (error: unknown) {
        if(error instanceof AxiosError){
          return thunkAPI.rejectWithValue(error.response?.data.message);
        }
        Notify.info('Something went wrong. ');
      }
    }
  );