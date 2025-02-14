import React, { useEffect, useState , FormEvent, ChangeEvent} from 'react'
import { useLanguage } from '../../../hooks/useLanguage';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { logIn } from '../../../redux/auth/operations';
import { FormLink, FormWrapper, Input, Label, LogoWrapp, MainTitle, RouteWrapp, SecondsCounter, ShowBtn, StyledForm } from '../Form.styled';
import { IoMdUnlock } from 'react-icons/io';
import { CgSandClock } from 'react-icons/cg';
import { Button } from '../../button/Button';

const LoginForm = () => {
  const TIME = 10
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const [timer, setTimer] = useState<boolean | null>(null);
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


  const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

      <StyledForm  onSubmit={handleSubmit}  noValidate autoComplete="off">
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
        <FormLink to="/signup">{lang.regBtn}</FormLink>
      </RouteWrapp>
    </FormWrapper>
  );
}

export default LoginForm