import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { addContactSchema, addContactSchemaType } from '../../types/AddComtact.model'

const EditContactForm = () => {
    const {
      register, 
      handleSubmit,
      formState,
      reset,
      setError,
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
  return (
    <div>EditContactForm</div>
  )
}

export default EditContactForm