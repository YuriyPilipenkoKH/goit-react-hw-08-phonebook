import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Search, searchSchema } from "../../../types/search.schema";

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

const SearchBar = () => {
  const {
    register, 
    handleSubmit,
    formState,
    reset,
    setValue,
    setError,
  } = useForm<Search >({
    defaultValues: {  
      query:  '',
         },
        mode:'all',
        resolver: zodResolver(searchSchema), })
    const {
      errors,
      isDirty,
      isValid ,
      isSubmitting,
      isLoading 
    } = formState

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={query}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
