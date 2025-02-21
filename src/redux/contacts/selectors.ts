import { RootState } from "../store";


export const getContactsList = (state: RootState) => state.contacts.contactsList

export const selectIsLoading = (state: RootState) => state.contacts.isLoading; 

export const selectError = (state: RootState) => state.contacts.error; 

export const selectTotalPages = (state: RootState) => state.contacts.totalPages;

export const selectCurrentPage = (state: RootState) => state.contacts.currentPage; 

export const selectCounter = (state: RootState) => state.contacts.counter; 

export const selectQuery = (state: RootState) => state.contacts.query; 

export const selectMessage = (state: RootState) => state.contacts.message; 


// export const getContactsFilter = (state: RootState) => state.filter

// export const getEditedName =  (state: RootState) => state.edit.nick
// export const getEditedPhone =  (state: RootState)=> state.edit.phone
// export const getSorted =  (state: RootState) => state.sort



