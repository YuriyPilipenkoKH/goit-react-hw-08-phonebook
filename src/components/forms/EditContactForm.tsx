import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { addContactSchema, addContactSchemaType } from '../../types/AddComtact.model'
import { ContactFormBtn, Form, Input, Label } from './Form.styled'
import { useLanguage } from '../../hooks/useLanguage'
import { editContact } from '../../redux/contacts/operations'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { Contact } from '../../types/contact.model'

interface EditContactFormProps {
 contact: Contact
}

const EditContactForm: React.FC<EditContactFormProps> = ({
  contact
  }) => {
    const lang = useLanguage()
     const dispatch = useAppDispatch();
     const {_id, name, number, userId} = contact
    const {
      register, 
      handleSubmit,
      formState,
      reset,
      setError,
    } = useForm<addContactSchemaType >({
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
  const onSubmit = async (data: addContactSchemaType) => {

        dispatch(editContact({
          _id,
          name: data.name,
          number: data.number,
          userId
        }))
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
        { isLoading  ? "Sending.." :  lang.editCont}
      </ContactFormBtn>
    </Form>
  )
}

export default EditContactForm