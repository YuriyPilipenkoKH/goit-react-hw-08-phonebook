import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  modalIsOpen: boolean
}

export  const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalIsOpen: false,
    },
    reducers: {
      toggleModal: (state) => {
        state.modalIsOpen = !state.modalIsOpen;
      }
}
})

export const {toggleModal, }  = modalSlice.actions
export const modalReducer = modalSlice.reducer