import Button from 'components/Button/Button';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
import { FormWrapper, ShowBtn, StyledForm } from 'components/LoginForm/LoginForm.styled';
import { MainTitle } from 'components/section/Section.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import {SiLazarus} from 'react-icons/si';
import { FormLink, LogoWrapp, RouteWrapp } from './RegisterForm.styled';
import { langEN, langUA } from 'utils/languages';
import { getLang } from 'redux/selectors';




export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])



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
      <MainTitle>{lang.regBtn}</MainTitle>

      <StyledForm onSubmit={handleSubmit}  autoComplete="on">
        <Label >
        {lang.name}
          <Input type="text" name="name" value={name} onChange={handleChange} />
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