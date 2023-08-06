
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getLang } from 'redux/selectors';
import { langEN, langUA } from 'utils/languages';

export default function Register() {

  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])
  
  return (
    <div className='login__bg '>
    <div className='login__wrap'>
        <title>{lang.regBtn} </title>
      <RegisterForm />
    </div>
    </div>
  );
}
