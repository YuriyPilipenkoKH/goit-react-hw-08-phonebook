import { useState ,useEffect} from 'react'
import { HomeTitle, HomeWrapper } from './Pages.styled'
import { useSelector } from 'react-redux'
import { langEN, langUA } from 'utils/languages'
import { getLang } from 'redux/selectors'
import { UserForm } from 'components/UserForm/UserForm'


const Profile = () => {
    const [lang, setLang] = useState(langUA)
    const language = useSelector(getLang)
   
    // Language
    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])
  return (
    <HomeWrapper  >
    <HomeTitle  >
    { lang.profile }
    </HomeTitle>
   <UserForm />
  

  </HomeWrapper>
  )
}

export default Profile
