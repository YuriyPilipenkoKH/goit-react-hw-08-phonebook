import React from 'react'
import { PhonebookWrapper } from './Pages.styled'
import { useLanguage } from '../hooks/useLanguage'
import { useSelector } from 'react-redux'
import { getLang } from '../redux/selectors/selectors'

const PhonebookPage = () => {
  const language = useSelector(getLang)
  const lang = useLanguage()
  return (
    <PhonebookWrapper className="phonebook__wrap">
    <Section title={lang.phonebook} icon ={language === 'english' &&   iconMphone}>
      <ContactForm  />

      {/* <Filter /> */}
      
      {contacts.length > 0 && (
        <>
       {/* <ListBar></ListBar> */}
        <ContactList  />
        </>
      )}
    </Section >
    

  </PhonebookWrapper>
  )
}

export default PhonebookPage