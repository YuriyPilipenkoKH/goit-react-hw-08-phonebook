import { useSelector } from "react-redux";
import { getContactsList, selectIsLoading } from "../redux/contacts/selectors";


export const useContacts = () => {

  return {

    ContactsList: useSelector(getContactsList),
    isLoading: useSelector(selectIsLoading),
 
  };
};