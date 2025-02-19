import React, { useEffect, useState , FormEvent, ChangeEvent} from 'react'
import { useLanguage } from '../../hooks/useLanguage';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { AuthResponse, logIn } from '../../redux/auth/operations';
import { FormLink, FormWrapper, Input, Label, LogoWrapp, MainTitle, RouteWrapp, SecondsCounter, ShowBtn, StyledForm } from './Form.styled';
import { IoMdUnlock } from 'react-icons/io';
import { CgSandClock } from 'react-icons/cg';
import { Button } from '../button/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAuth } from '../../hooks/useAuth';
import { LoginSchemaType, useLoginSchema } from '../../hooks/useLoginSchema';
import { Notify } from 'notiflix';
import capitalize from '../../utils/capitalize';

const LoginForm = () => {
  const TIME = 25
  const dispatch = useAppDispatch();
  const [show, setShow] = useState<boolean>(false);
  const [timer, setTimer] = useState<boolean | null>(null);
  const [remained, setRemained] = useState<number>(TIME);
  const lang = useLanguage()
  const {user} = useAuth()
  const {loginSchema} = useLoginSchema()

     const {
        register, 
        handleSubmit,
        formState,
        reset,
        setError,
      } = useForm<LoginSchemaType >({
        defaultValues: {  
          email: user?.email || '',
          password: ''
           },
            mode:'all',
            resolver: zodResolver(loginSchema), })
        const {
          errors,
          isDirty,
          isValid ,
          isSubmitting,
        } = formState

  useEffect(() => {
    if((remained > 0) && timer){
      setTimeout(() => {
      setRemained(prev => prev - 1)
      }, 1000);
      }
  else if(remained === 0) {
    setTimer(null)
    setTimeout(() => setRemained(TIME), 1000);
  }
  }, [timer,remained])

  const handleInputChange =() => {};
  const onSubmit = (data: LoginSchemaType) => {
    dispatch(logIn(data))
    .then((res) => {
      if(res.type === 'auth/login/rejected' ){
        const errorCode = res.payload as string
        const translatedMsg = lang[errorCode] || errorCode;
        // setError('password', { type: 'manual',message: res.payload as string });
        setError('password', { type: 'manual', message: translatedMsg  }  )
      }
      if(res.type === 'auth/login/fulfilled'){
      reset()
      }
      if ((res.payload as AuthResponse).success) {
        const newusername = (res.payload as AuthResponse).user.name || 'Dude';
        Notify.success(`${lang.welcome}, ${capitalize(newusername)}`)
      }
    })
  }

  return (
    <FormWrapper>
      <LogoWrapp><IoMdUnlock size={50}/></LogoWrapp>
      <MainTitle>
      {lang.logBtn} {timer ? <CgSandClock/> : ''}</MainTitle>

      <StyledForm 
      autoComplete="off" 
      noValidate
      onSubmit={handleSubmit(onSubmit)}>
        <Label >
        {lang.email}
          <Input
           {...register('email',{ onChange: handleInputChange })}
           placeholder=	{( isSubmitting )? "Processing" : 'email'}
         />
        </Label>
        {errors.email && <div className='text-purple-900'>{errors.email.message}</div>}
        <Label  className='pass__label'>
        {lang.pass}
          <Input
            {...register('password',{ onChange: handleInputChange } )}
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
        disabled = {!remained || isSubmitting || !isDirty || !isValid}>
          {remained ? lang.logBtn : lang.try }
        </Button>
        {timer 
        ?  <SecondsCounter>{remained}{lang.left}</SecondsCounter>
        :  !remained && <SecondsCounter>{lang.wasted}</SecondsCounter>
        }
      </StyledForm>
      <RouteWrapp>
        <p> {lang.notYet} </p>
        <FormLink to="/signup">{lang.regBtn}</FormLink>
      </RouteWrapp>
    </FormWrapper>
  );
}

export default LoginForm