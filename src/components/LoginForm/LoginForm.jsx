import Button from 'components/Button/Button';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormWrapper, SecondsCounter, ShowBtn, StyledForm } from './LoginForm.styled';
import { MainTitle } from 'components/section/Section.styled';
import {IoMdUnlock} from 'react-icons/io';
import {CgSandClock} from 'react-icons/cg';
import { FormLink, LogoWrapp, RouteWrapp } from 'components/RegisterForm/RegisterForm.styled';
import { useLanguage } from 'hooks/useLanguage';


export const LoginForm = () => {
  const TIME = 5
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(null);
  const [remained, setRemained] = useState(TIME);
  const lang = useLanguage()


useEffect(() => {
  if((remained > 0) && timer){
    setTimeout(() => {
    setRemained(prev => prev - 1)
    }, 1000);
 
  }
  else if(remained === 0) {
    setTimer(null)

    setTimeout(() => {
      setRemained(TIME)
      setEmail('');
      setPassword('');
    }, 4000);
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
      <MainTitle>
      {lang.logBtn} {timer ? <CgSandClock/> : ''}</MainTitle>

      <StyledForm  onSubmit={handleSubmit}  autoComplete="on">
        <Label >
        {lang.email}
          <Input
            type='email'
            name="email"
            value={email}
            onChange={handleChange}
          />   
        </Label>

        <Label  className='pass__label'>
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

        <Button 
        type="submit"
        disabled = {!remained}>
          {remained ? lang.logBtn : lang.try }
        </Button>
        {timer 
        ?  <SecondsCounter>{remained}{lang.left}</SecondsCounter>
        :  !remained && <SecondsCounter>{lang.wasted}</SecondsCounter>
        }
      </StyledForm>
      <RouteWrapp>
        <p> {lang.notYet} </p>
        <FormLink to="/register">{lang.regBtn}</FormLink>
      </RouteWrapp>
    </FormWrapper>
  );
}