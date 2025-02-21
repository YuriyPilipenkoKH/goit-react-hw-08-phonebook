import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Search, searchSchema } from "../../../types/search.schema";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { search } from "../../../redux/contacts/contactsSlice";
import { StyledSearchingForm } from "./SearchBar.styled";
import { BiSearchAlt } from "react-icons/bi";
import { Input } from "../../forms/Form.styled";
import { fetchContacts } from "../../../redux/contacts/operations";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useContacts } from "../../../hooks/useContacts";
import { useLanguage } from "../../../hooks/useLanguage";

// interface SearchBarProps {
//   onSearch: (query: string) => void;
// }

const SearchBar = () => {
  const dispatch = useAppDispatch()
  const{currentPage} = useContacts()
    const lang = useLanguage()
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
      isDirty
    } = formState
console.log(errors);

  const onSubmit = async (data: Search) => {
    dispatch(fetchContacts({ page: 1}))
    .then((res) => {
      console.log(res);
      if(res.type === 'contacts/fetchAll/rejected'){
        const errorCode = res.payload as string; 
        const translatedMsg = lang[errorCode] || errorCode;
        setError('query', { type: 'manual', message: translatedMsg  }  )
        console.log('errorCode',errorCode, 'translatedMsg',translatedMsg);
      }
     }).catch((rej) => {
      console.log(rej);
     })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(search(value.trim()))
  };
  const cleaner =() => {
    reset()
    setError('query', { type: 'manual', message: '' })
  }
  const shut =() => {
     dispatch(search(''))
     dispatch(fetchContacts({ page: currentPage, }))

    reset()
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
        placeholder=	{( isSubmitting )? "Processing" : lang.search}
      />
   {errors.query && <div className='text-purple-900'>{errors.query?.message}</div>}
   </label>
    <div className='search_btn_wrap absolute'>
      {isDirty && (
      <button 
      onClick={cleaner}
      type='button'>
        <IoMdCloseCircleOutline size={25} className='text-violet-950'/>
      </button>
      )}
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

