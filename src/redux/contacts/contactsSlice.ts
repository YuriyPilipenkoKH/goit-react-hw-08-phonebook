import { createSlice, } from "@reduxjs/toolkit";

export interface ContactsState {
  contactsList:[],
  isLoading: boolean,
  error: string | null;
}

const initialState:ContactsState = { 
  contactsList: [],
  isLoading: false,
  error: null,
};