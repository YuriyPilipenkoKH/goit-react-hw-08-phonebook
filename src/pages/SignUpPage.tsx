import { useLanguage } from '../hooks/useLanguage'

const SignUpPage = () => {
 const lang = useLanguage()
  return (
    <div className='login__bg '>
    <div className='login__wrap'>
        <title>{lang.regBtn} </title>
      {/* <RegisterForm /> */}
    </div>
    </div>
  );
}
export default SignUpPage