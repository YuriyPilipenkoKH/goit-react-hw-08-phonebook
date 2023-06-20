import Button from 'components/Button/Button';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { FormWrapper, ShowBtn, StyledForm } from 'components/LoginForm/LoginForm.styled';
import { MainTitle } from 'components/section/Section.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {SiLazarus} from 'react-icons/si';
import { FormLink, LogoWrapp, RouteWrapp } from './RegisterForm.styled';



export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);



  const handleChange = ({ target: { name, value } }) => {
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormWrapper>
       <LogoWrapp><SiLazarus size={50}/></LogoWrapp>
      <MainTitle>Register</MainTitle>

      <StyledForm onSubmit={handleSubmit}  autoComplete="on">
        <Label >
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label >
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label >
          Password
          <Input
            type={show ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={handleChange}
          />
            <ShowBtn 
            type='button' 
            onClick={() => setShow(!show)}>
              {show ? 'Hide' : 'Show'}
              </ShowBtn>
        </Label>

        <Button  type="submit">Register</Button>
      </StyledForm>
      <RouteWrapp>
        <p>Already have account?</p>
        <FormLink to="/login">LogIn</FormLink>
      </RouteWrapp>
    </FormWrapper>
  );
}