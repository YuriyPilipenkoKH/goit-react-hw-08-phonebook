import React from "react"
import { useContacts } from "../../hooks/useContacts"
import { fetchContacts } from "../../redux/contacts/operations"




const PaginationControls:React.FC = () => {
  // const { currentPage, totalPages, grabTransactions } = useFinanceStore()
  const {currentPage, totalPages, } = useContacts()

  const handlePageChange = (newPage: number) => {
    fetchContacts({ page: newPage, limit: 5 })
  }

  return (
    <div className="flex items-center gap-6 mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-[8px] disabled:opacity-50 bg-base-300"
      >
        Previous
      </button>

      <span>Page {currentPage} of {totalPages}</span>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-[8px] disabled:opacity-50 bg-base-300"
      >
        Next
      </button>
    </div>
  );
}

export default PaginationControls