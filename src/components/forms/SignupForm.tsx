import React, { useState } from 'react'
import { FormLink, FormWrapper, Input, Label, LogoWrapp, MainTitle, RouteWrapp, ShowBtn, StyledForm } from './Form.styled';
import { SiLazarus } from 'react-icons/si';
import { Button } from '../button/Button';
import { register } from '../../redux/auth/operations';
import { useLanguage } from '../../hooks/useLanguage';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {  useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, signUpSchemaType } from '../../types/signUpSchema';

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const lang = useLanguage()

    const {
      register: rg, 
      handleSubmit,
      formState,
      reset,
      setError,
    } = useForm<signUpSchemaType >({
      defaultValues: {  
        name: '',
        email: '',
        password: ''
         },
          mode:'all',
          resolver: zodResolver(signUpSchema), })
      const {
        errors,
        isDirty,
        isValid ,
        isSubmitting,
        isLoading 
      } = formState

  const handleInputChange =() => {
   }

  const onSubmit = (data: signUpSchemaType)=> {
   
    dispatch(register(data))
    .then((res) => {
      console.log(res);
      if(res.type === 'auth/register/rejected'){
        // setError('number', { type: 'manual', message: res.payload as string }  )
      }
      if(res.type === 'auth/register/fulfilled'){
      reset()
      navigate('/login')
      }
    })
  };

  return (
    <FormWrapper>
       <LogoWrapp ><SiLazarus size={50}/></LogoWrapp>
      <MainTitle>{lang.regBtn}</MainTitle>

      <StyledForm 
      autoComplete="off" 
      noValidate
      onSubmit={handleSubmit(onSubmit)}>
        <Label >
        {lang.name}
          <Input
        {...rg('name',{ onChange: handleInputChange })}
        placeholder=	{( isSubmitting )? "Processing" : 'name'}
        />
        </Label>
        {errors.name && <div className='text-purple-900'>{errors.name.message}</div>}
        <Label >
        {lang.email}
          <Input
           {...rg('email',{ onChange: handleInputChange })}
           placeholder=	{( isSubmitting )? "Processing" : 'email'}
         />
        </Label>
        {errors.email && <div className='text-purple-900'>{errors.email.message}</div>}
        <Label >
        {lang.pass}
          <Input
            {...rg('password',{ onChange: handleInputChange } )}
            placeholder=	{( isSubmitting )? "Processing" : "••••"}
            type = {show ? 'text' : 'password' }
          />
            <ShowBtn 
            type='button' 
            onClick={() => setShow(!show)}>
              {show ? lang.hide : lang.show}
              </ShowBtn>
        </Label>
        {errors.password && <div className='text-purple-900'>{errors.password.message}</div>}
          <Button  
          type="submit"
          disabled={isSubmitting || !isDirty || !isValid}>
            { isLoading  ? "Sending.." :  lang.regSubmit}
          </Button>

      </StyledForm>
      <RouteWrapp>
        <p>{lang.alreadyGot}</p>
        <FormLink to="/login">{lang.logBtn}</FormLink>
      </RouteWrapp>
    </FormWrapper>
  );
}

export default SignupForm