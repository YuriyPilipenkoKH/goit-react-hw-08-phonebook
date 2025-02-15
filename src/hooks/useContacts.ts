import { useSelector } from "react-redux";
import { getContactsList, selectError, selectIsLoading } from "../redux/contacts/selectors";


export const useContacts = () => {

  return {

    contacts: useSelector(getContactsList),
    isLoading: useSelector(selectIsLoading),
    sameNumber: useSelector(selectError),
 
  };
};