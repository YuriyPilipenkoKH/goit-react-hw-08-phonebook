import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../../types/contact.model";

export interface ModalState {
  modalIsOpen: boolean;
  selectedContact: Contact | null;
}

const initialState: ModalState = {
  modalIsOpen: false,
  selectedContact: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
    onModalOpen: (state, action: PayloadAction<Contact>) => {
      state.modalIsOpen = true;
      state.selectedContact = action.payload; // ✅ Correctly accessing payload
    },
    onModalClose: (state) => {
      state.modalIsOpen = false;
      state.selectedContact = null;
    },
  },
});

export const { toggleModal, onModalOpen, onModalClose } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
