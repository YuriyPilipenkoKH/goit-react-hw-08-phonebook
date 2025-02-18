import { RootState } from "../store";

export const getModal = (state: RootState) => state.modal

export const getModalIsOpen = (state: RootState) => state.modal.modalIsOpen

export const selectedContact = (state: RootState) => state.modal.selectedContact