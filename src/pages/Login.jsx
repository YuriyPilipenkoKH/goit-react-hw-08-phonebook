
import { LoginForm } from 'components/LoginForm/LoginForm';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getLang } from 'redux/selectors';
import { langEN, langUA } from 'utils/languages';

export default function Login() {

  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])

  return (

    <div className='login__bg '>
    <div className='login__wrap'>
      <div>
        <title>{lang.logBtn}</title>
      </div>
      <LoginForm />
    </div>

    </div>




  );
}
