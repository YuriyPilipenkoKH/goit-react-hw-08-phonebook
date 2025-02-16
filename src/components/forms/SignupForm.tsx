import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FormLink, FormWrapper, Input, Label, LogoWrapp, MainTitle, RouteWrapp, ShowBtn, StyledForm } from './Form.styled';
import { SiLazarus } from 'react-icons/si';
import { Button } from '../button/Button';
import { register } from '../../redux/auth/operations';
import { useLanguage } from '../../hooks/useLanguage';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const lang = useLanguage()

  const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    dispatch(register({ name, email, password }))
    .then((data) => {
      console.log(data);


      setName('');
      setEmail('');
      setPassword('');
      navigate('/login')
    })
  };

  return (
    <FormWrapper>
       <LogoWrapp ><SiLazarus size={50}/></LogoWrapp>
      <MainTitle>{lang.regBtn}</MainTitle>

      <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
        <Label >
        {lang.name}
          <Input

           type="text"
            name="name"
             value={name} 
             onChange={handleChange} />
        </Label>

        <Label >
        {lang.email}
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label >
        {lang.pass}
          <Input
            type={show ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
          />
            <ShowBtn 
            type='button' 
            onClick={() => setShow(!show)}>
              {show ? lang.hide : lang.show}
              </ShowBtn>
        </Label>

          <Button  type="submit">{lang.regSubmit}</Button>

      </StyledForm>
      <RouteWrapp>
        <p>{lang.alreadyGot}</p>
        <FormLink to="/login">{lang.logBtn}</FormLink>
      </RouteWrapp>
    </FormWrapper>
  );
}

export default SignupForm