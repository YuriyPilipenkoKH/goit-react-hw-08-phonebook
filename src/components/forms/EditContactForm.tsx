import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { ContactFormBtn, Form, Input, Label } from './Form.styled'
import { useLanguage } from '../../hooks/useLanguage'
import { editContact } from '../../redux/contacts/operations'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { Contact } from '../../types/contact.model'
import { onModalClose } from '../../redux/modal/modalSlice'
import { AddContactSchemaType, useAddContactSchema } from '../../hooks/useAddContactSchema'

interface EditContactFormProps {
 contact: Contact
}

const EditContactForm: React.FC<EditContactFormProps> = ({
  contact
  }) => {
    const lang = useLanguage()
     const dispatch = useAppDispatch();
       const {addContactSchema} = useAddContactSchema()
     const {_id, name, number, userId} = contact
    const {
      register, 
      handleSubmit,
      formState,
      reset,
      setError,
    } = useForm<AddContactSchemaType >({
      defaultValues: {  
        name: name || '',
        number: number || '',
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
  const onSubmit = async (data: AddContactSchemaType) => {

   dispatch(editContact({
      _id,
      name: data.name,
      number: data.number,
      userId
    }))
    .then((res) => {
      if(res.type === 'contacts/editContact/rejected'){
        const errorCode = res.payload as string; // Ensure it's a string
        const translatedMsg = lang[errorCode] || errorCode;
        setError('number', { type: 'manual', message: translatedMsg  }  )
        // setError('number', { type: 'manual', message: res.payload as string }  )
      }
      if(res.type === 'contacts/editContact/fulfilled'){
        reset()
        dispatch(onModalClose())
      }
    })
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
          placeholder=	{( isSubmitting )? "Processing" : lang.namePlaceholder}
        />
      </Label>
      {errors.name && <div className='text-purple-900'>{errors.name?.message}</div>}
      <Label>
      {lang.number}:
        <Input
        {...register('number',)}
        placeholder=	{( isSubmitting )? "Processing" : '0980001204'}
        />
      </Label>
      {errors.number && <div className='text-purple-900'>{errors.number?.message}</div>}
      <ContactFormBtn 
      type="submit"
      disabled={isSubmitting || !isDirty || !isValid}
        >
        { isLoading  ? "Sending.." :  lang.editCont}
      </ContactFormBtn>
    </Form>
  )
}

export default EditContactForm