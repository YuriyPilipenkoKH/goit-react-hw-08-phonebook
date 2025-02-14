import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

 export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
  
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

 export const addContact = createAsyncThunk(
    "contacts/addContact",
  
    async (contact, thunkAPI) => {
      const {name, number} = contact
      try {
        const response = await axios.post("/contacts", {name, number});
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

 export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
  
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);  
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

 export const editContact = createAsyncThunk(
    "contacts/editContact",
  
    async (contact, thunkAPI) => {

   const {id, name, number} = contact
   try {
    const response = await axios.patch(`/contacts/${id}`, {
      name: name,
      number: number,
    });
      
        return response.data;

      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );