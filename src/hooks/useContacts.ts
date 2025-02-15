import { useSelector } from "react-redux";
import { getContactsList, selectIsLoading } from "../redux/contacts/selectors";


export const useContacts = () => {

  return {

    contacts: useSelector(getContactsList),
    isLoading: useSelector(selectIsLoading),
 
  };
};