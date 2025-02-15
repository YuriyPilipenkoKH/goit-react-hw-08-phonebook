import { createSlice, } from "@reduxjs/toolkit";
import { Contact } from "../../types/contact.model";
import { fetchContacts, addContact, deleteContact, editContact  } from "./operations";

export interface ContactsState {
  contactsList: Contact[],
  isLoading: boolean,
  error: string | null;
}

const initialState:ContactsState = { 
  contactsList: [],
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder

  .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
  .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contactsList = payload.list;
        state.error = null;
      })
  .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })
      
  .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
  .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contactsList = payload.list;
        state.error = null;
      })
  .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })

  }
});