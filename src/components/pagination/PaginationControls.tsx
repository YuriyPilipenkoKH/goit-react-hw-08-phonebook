import React from "react"
import { useContacts } from "../../hooks/useContacts"
import { fetchContacts } from "../../redux/contacts/operations"
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { PaginationWrap, PagSpan } from "../../pages/Pages.styled";
import { BtnEdit } from "../phonebook/contactslist/ContactList.styled";
import {  Wrap } from "../appbar/AppBar.styled";




const PaginationControls:React.FC = () => {
  const dispatch = useAppDispatch();
  const {currentPage, totalPages, } = useContacts()

  const handlePageChange = (newPage: number) => {

    dispatch(fetchContacts({ page: newPage, limit: 5 }))
  }

  return (
    <PaginationWrap className="flex items-center gap-6 mt-4">
      <BtnEdit
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-[8px] disabled:opacity-50 bg-base-300"
      >
        Previous
      </BtnEdit>

      <PagSpan ><Wrap>Page</Wrap> {currentPage} of {totalPages}</PagSpan>

      <BtnEdit
      type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-[8px] disabled:opacity-50 bg-base-300"
      >
        Next
      </BtnEdit>
    </PaginationWrap>
  );
}

export default PaginationControls