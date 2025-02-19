import { useSelector } from "react-redux"
import { getModal, getModalIsOpen, getSelectedContact } from "../redux/modal/modalSelectors"
import { getLang, getTheme } from "../redux/selectors/selectors"


export const useAll = () => {
  
  return {
    modal: useSelector(getModal),
    modalIsOpen: useSelector(getModalIsOpen),
    selectedContact: useSelector(getSelectedContact),
    theme: useSelector(getTheme),
    language: useSelector(getLang),

  }
}