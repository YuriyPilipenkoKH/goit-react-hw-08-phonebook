import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { Contact } from "../../types/contact.model";
import { ContactsState } from "./contactsSlice";

axios.defaults.baseURL = import.meta.env.VITE_HOST

interface PB_Response {
  list: Contact[]
  message: string
}
interface PB_update_Response {
  contact: Contact
  message: string
}
interface PB_data{
  name: string
  number: string
}


 export const fetchContacts  = 
  createAsyncThunk< PB_Response, void, { state: ContactsState }>(
    "contacts/fetchAll",
  
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
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
  createAsyncThunk< PB_update_Response, PB_data, { state: ContactsState }>(
    "contacts/addContact",
  
    async (contact, thunkAPI) => {
      const {name, number} = contact
      try {
        const response = await axios.post("/contacts", {name, number});
        return response.data;

      } catch (error: unknown) {
        if(error instanceof AxiosError){
          return thunkAPI.rejectWithValue(error.message);
        }
        Notify.info('Something went wrong. ');
      }
    }
  );

 export const deleteContact = 
  createAsyncThunk< PB_update_Response, string, { state: ContactsState}>(
    "contacts/deleteContact",
  
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);  
        return response.data;

      } catch (error: unknown) {
        if(error instanceof AxiosError){
          return thunkAPI.rejectWithValue(error.message);
        }
        Notify.info('Something went wrong. ');
      }
    }
  );

//  export const editContact = createAsyncThunk(
//     "contacts/editContact",
  
//     async (contact, thunkAPI) => {

//    const {id, name, number} = contact
//    try {
//     const response = await axios.patch(`/contacts/${id}`, {
//       name: name,
//       number: number,
//     });
      
//         return response.data;

//       } catch (error: unknown) {
//         if(error instanceof AxiosError){
//           return thunkAPI.rejectWithValue(error.message);
//         }
//         Notify.info('Something went wrong. ');
//       }
//     }
//   );