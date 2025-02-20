import { useSelector } from "react-redux";
import { getContactsList, selectCounter, selectCurrentPage, selectError, selectIsLoading, selectQuery, selectTotalPages } from "../redux/contacts/selectors";


export const useContacts = () => {

  return {

    contacts: useSelector(getContactsList),
    isLoading: useSelector(selectIsLoading),
    sameNumber: useSelector(selectError),
    totalPages: useSelector(selectTotalPages),
    currentPage: useSelector(selectCurrentPage),
    counter: useSelector(selectCounter),
    query: useSelector(selectQuery),
 
  };
};