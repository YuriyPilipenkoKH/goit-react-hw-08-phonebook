import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Search, searchSchema } from "../../../types/search.schema";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { search } from "../../../redux/contacts/contactsSlice";
import { StyledSearchingForm } from "./SearchBar.styled";
import { BiSearchAlt } from "react-icons/bi";
import { Input } from "../../forms/Form.styled";

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
    setError,
  } = useForm<Search >({
    defaultValues: {  
      query:  '',
         },
        mode:'all',
        resolver: zodResolver(searchSchema), })
    const {
      errors,
      isSubmitting,
    } = formState
    console.log('errors', errors);

    const onSubmit = async (data: Search) => {
      console.log(data, 'submited..');
      reset()
    }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(search(value))

  };
  const shut =() => {
    reset()
    setError('query', { type: 'manual', message: ''  })
  }

  return (
    <StyledSearchingForm 
        autoComplete="off" 
        noValidate
         onSubmit={handleSubmit(onSubmit)}>
   <label htmlFor="">
     <Input
      {...register('query', {
        onChange(e) {
          handleChange(e)
        },
      })}
        placeholder=	{( isSubmitting )? "Processing" : "Search..."}
      />
   {errors.query?.message && <div className='text-purple-900'>{errors.query?.message}</div>}
   </label>
    <div className='search_btn_wrap absolute'>
      {/* {isDirty && (
      <button 
      onClick={cleaner}
      type='button'>
        <IoMdCloseCircleOutline size={25} className='text-violet-950'/>
      </button>
      )} */}
      <button type='submit'>
        <BiSearchAlt size={25} />
      </button>
    </div>
    <button 
        onClick={shut}
        className='shut'>
      </button>
    </StyledSearchingForm>

);
};

export default SearchBar;

