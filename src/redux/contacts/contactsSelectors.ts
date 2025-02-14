import { RootState } from "../store";


export const getContactsList = (state: RootState) => state.contacts.contactsList
export const getContactsFilter = (state: RootState) => state.filter

export const getEditedName =  (state: RootState) => state.edit.nick
export const getEditedPhone =  (state: RootState)=> state.edit.phone
export const getSorted =  (state: RootState) => state.sort



export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
