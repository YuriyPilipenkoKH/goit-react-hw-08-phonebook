import { useSelector } from "react-redux"
import { getModal, getModalIsOpen } from "../redux/modal/modalSelectors"


export const useALL = () => {
  
  return {
    modal: useSelector(getModal),
    modalIsOpen: useSelector(getModalIsOpen),
  }
}