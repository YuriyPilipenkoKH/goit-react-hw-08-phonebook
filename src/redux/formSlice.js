import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: '',
    number: '',
  };

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        
      updateField: (state, action) => {
        const { field, value } = action.payload;
        
        state[field] = value;
      },

      resetForm: (state) => initialState, // Add resetForm action
      
    },
  });
  
  // Export actions
  export const { updateField , resetForm } = formSlice.actions;
  // Export reducer
  export const formReducer =  formSlice.reducer;