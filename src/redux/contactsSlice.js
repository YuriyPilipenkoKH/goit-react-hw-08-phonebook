import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import { fetchContacts , addContact, deleteContact, editContact } from "./operations";

const arrayOfThunks  = [fetchContacts , addContact, deleteContact, editContact]
const fn = (type) => arrayOfThunks.map((el) => el[type])

const initialState = { 
  contactsList: [],
  isLoading: false,
  error: null,
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
}

const handlePending = (state) => {
  state.isLoading = true;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

export const contactsSlice =  createSlice({
    name: 'contacts',
    initialState,

    extraReducers: (builder) => {
      builder

        .addCase(fetchContacts.fulfilled, (state, action) => {
           state.contactsList= action.payload;
        })

        .addCase(addContact.fulfilled, (state, action) => {
           state.contactsList.push(action.payload)
        })

        .addCase(deleteContact.fulfilled, (state, action) => {
           state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload.id);
        })

        .addCase(editContact.fulfilled, (state, action) => {

          const contactToUpdate  = state.contactsList.find(
            contact => contact.id === action.payload.id
          )
          const index = state.contactsList.findIndex(
            contact => contact.id === action.payload.id
          );

            state.contactsList.splice(index, 1, action.payload);
            Notiflix.Notify.success(`Contact ${contactToUpdate.name} was updated.`);
        })

        .addMatcher(isAnyOf(...fn('pending') ), handlePending )
        .addMatcher(isAnyOf(...fn('fulfilled') ),  handleFulfilled)    
        .addMatcher(isAnyOf(...fn('rejected') ),handleRejected )

        // .addMatcher(isAnyOf(
        //   fetchContacts.rejected,
        //   addContact.rejected,
        //   deleteContact.rejected,
        //   editContact.rejected,
        //    ),
        //     handleRejected
        //    )

    }

})


export const contactsReducer = contactsSlice.reducer

