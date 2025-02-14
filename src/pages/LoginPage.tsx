import LoginForm from '../components/forms/login/LoginForm';
import { useLanguage } from '../hooks/useLanguage';

const LoginPage = () => {
   const lang = useLanguage()
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
export default LoginPage