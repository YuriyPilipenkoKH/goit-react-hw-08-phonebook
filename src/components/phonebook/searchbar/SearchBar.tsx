import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Search, searchSchema } from "../../../types/search.schema";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { search } from "../../../redux/contacts/contactsSlice";

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

const SearchBar = () => {
  
  const dispatch = useAppDispatch()
  
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

    const onSubmit = async (data: Search) => {
    }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(search(value))

  };

  return (
    <form 
        autoComplete="off" 
        noValidate
         onSubmit={handleSubmit(onSubmit)}>
   <input
        {...register('query', {
          onChange(e) {
            handleChange(e)
          },
        })}
          // placeholder=	{( isSubmitting )? "Processing" : lang.namePlaceholder}
        />
    </form>

);
};

export default SearchBar;

// <input
//   type="text"
//   placeholder="Search contacts..."
//   value={query}
//   onChange={handleChange}
// />