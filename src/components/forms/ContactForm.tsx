import React, { useState } from 'react'
import { ContactFormBtn, Form, Input, Label } from './Form.styled';
import IconRedux from '../../img/icons/iconRedux';
import { useContacts } from '../../hooks/useContacts';
import { useLanguage } from '../../hooks/useLanguage';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addContact } from '../../redux/contacts/operations';
import { resetForm } from '../../redux/formSlice';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/selectors/selectors';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addContactSchema, addContactSchemaType, } from '../../types/AddComtact.model';


const ContactForm = () => {
  const {contacts} = useContacts()
  // const { name, number } = useSelector(getForm);
  const [newAdded, setNewAdded] = useState(false)
  const lang = useLanguage()
  const language = useSelector(getLang)
  const dispatch = useAppDispatch()
  const {
    register, 
    handleSubmit,
    formState,
    reset,
    clearErrors,
  } = useForm<addContactSchemaType >({
    defaultValues: {  
      name: '',
      number: '',
       },
        mode:'all',
        resolver: zodResolver(addContactSchema), })
    const {
      errors,
      isDirty,
      isValid ,
      isSubmitting,
      isLoading 
    } = formState

  const onSubmit = async (data: addContactSchemaType) => {
    dispatch(addContact(data))
    reset()
    setNewAdded(true)
    setTimeout(() => setNewAdded(false), 2000)
  }

  return (
    <Form 
    autoComplete="off" 
    noValidate
     onSubmit={handleSubmit(onSubmit)}>
      <Label>
      {lang.name}:
        <Input
        {...register('name',)}
          placeholder=	{( isSubmitting )? "Processing" : 'name'}
        />
      </Label>
      {errors.name && <div className='text-purple-900'>{errors.name?.message}</div>}
      <Label>
      {lang.number}:
        <Input
        {...register('number',)}
        placeholder=	{( isSubmitting )? "Processing" : 'number'}
        />
      </Label>
      {errors.number && <div className='text-purple-900'>{errors.number?.message}</div>}
      <ContactFormBtn 
      type="submit"
      disabled={isSubmitting || !isDirty || !isValid}
            >
               { isLoading  ? "Sending.." :  lang.add}
              {' '}{ language === 'english' && <IconRedux/> }
      </ContactFormBtn>
             {/* {newAdded && <Lottie animationData={animationData} className="new"/>} */}
            
    </Form>
  );
};

export default ContactForm


    // if (contacts.find((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
    //   Notiflix.Notify.failure(`${name} is already in contacts.`);
    //   return;
    // } else if (contacts.find((contact) => contact.number === number)) {
    //   Notiflix.Notify.failure(`${number} is already in contacts.`);
    //   return;
    // }
