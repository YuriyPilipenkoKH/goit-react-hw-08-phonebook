import { useSelector } from "react-redux"
import { getModal, getModalIsOpen, getSelectedContact } from "../redux/modal/modalSelectors"


export const useAll = () => {
  
  return {
    modal: useSelector(getModal),
    modalIsOpen: useSelector(getModalIsOpen),
    selectedContact: useSelector(getSelectedContact),
  }
}