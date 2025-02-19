import { createSlice, } from "@reduxjs/toolkit";
import { Contact } from "../../types/contact.model";
import { fetchContacts, addContact, deleteContact,  editContact } from "./operations";

export interface ContactsState {
  contactsList: Contact[],
  isLoading: boolean,
  error: string | null;
  message: string | null;
  totalPages: number,
  currentPage: number,
}

const initialState:ContactsState = { 
  contactsList: [],
  isLoading: false,
  error: null,
  message: null,
  totalPages: 1,
  currentPage: 1,
};

const contactsSlice = createSlice({
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
        state.contactsList.push(payload.contact)
        state.error = null;
      })
  .addCase(addContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })

  .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
  .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contactsList = state.contactsList
          .filter(contact => contact._id !== payload.contact._id);
        state.error = null;
      })
  .addCase(deleteContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })

  .addCase(editContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
  .addCase(editContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contactsList = state.contactsList.map(contact =>
          contact._id === payload.contact._id ? payload.contact : contact
        );
        state.error = null;
      })
  .addCase(editContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      })



  }
});

export const contactsReducer = contactsSlice.reducer