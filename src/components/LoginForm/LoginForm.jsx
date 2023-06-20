import Button from 'components/Button/Button';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormWrapper, SecondsCounter, ShowBtn, StyledForm } from './LoginForm.styled';
import { MainTitle } from 'components/section/Section.styled';
import {IoMdUnlock} from 'react-icons/io';
import {CgSandClock} from 'react-icons/cg';
import { LogoWrapp } from 'components/RegisterForm/RegisterForm.styled';




export const LoginForm = () => {
  const TIME = 7
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(null);
  const [remained, setRemained] = useState(TIME);


useEffect(() => {
  if((remained > 0) && timer){
    setTimeout(() => {
    setRemained(prev => prev - 1)
    // console.log(`${remained} seconds`);
    
   }, 1000);
 
  }
  else if(remained === 0) {
    setTimer(null)

    setTimeout(() => {
      setRemained(TIME)
      setEmail('');
      setPassword('');
    }, 2000);
  }

}, [timer,remained])


  const handleChange = ({ target: { name, value } }) => {

//  clearTimeout(timer); // Clear the previous timer on every change

setTimer(true)


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
      <LogoWrapp><IoMdUnlock size={50}/></LogoWrapp>
      <MainTitle>LogIn {timer ? <CgSandClock/> : ''}</MainTitle>

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

        <Button 
        type="submit"
        disabled = {!remained}
        >{remained ? 'Log In' : 'Try again'}</Button>
        {timer 
        ?  <SecondsCounter>{remained} seconds left</SecondsCounter>
        : !remained && <SecondsCounter>Wasted</SecondsCounter>
        }
      </StyledForm>
    </FormWrapper>
  );
}