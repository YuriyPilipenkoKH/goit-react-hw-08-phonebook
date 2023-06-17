import Button from 'components/Button/Button';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormWrapper, ShowBtn, StyledForm } from './LoginForm.styled';
import { MainTitle } from 'components/section/Section.styled';
// import { authOperations } from '../redux/auth';




export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormWrapper>
      <MainTitle>LogIn</MainTitle>

      <StyledForm  onSubmit={handleSubmit}  autoComplete="on">
        <Label >
          Email
          <Input
            type='email'
            name="email"
            value={email}
            onChange={handleChange}
          />   
        </Label>

        <Label  className='pass__label'>
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

        <Button type="submit">Log In</Button>
      </StyledForm>
    </FormWrapper>
  );
}