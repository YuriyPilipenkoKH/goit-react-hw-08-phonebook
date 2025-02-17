import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { addContactSchema, addContactSchemaType } from '../../types/AddComtact.model'
import { ContactFormBtn, Form, Input, Label } from './Form.styled'
import { useLanguage } from '../../hooks/useLanguage'

interface EditContactFormProps {
  contactName: string
  contactNumber: string
}

const EditContactForm: React.FC<EditContactFormProps> = ({
    contactName,
    contactNumber
  }) => {
    const lang = useLanguage()
    const {
      register, 
      handleSubmit,
      formState,
      reset,
      setError,
    } = useForm<addContactSchemaType >({
      defaultValues: {  
        name: contactName || '',
        number: contactNumber || '',
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
       
      </ContactFormBtn>

            
    </Form>
  )
}

export default EditContactForm