import React from 'react'
import { PhonebookWrapper } from './Pages.styled'
import { useLanguage } from '../hooks/useLanguage'
import { useSelector } from 'react-redux'
import { getLang } from '../redux/selectors/selectors'
import Section from '../components/section/Section'
import { useContacts } from '../hooks/useContacts'
import ContactList from '../components/phonebook/contactslist/ContactList'
import IconMphone from '../img/icons/iconMphone'

const PhonebookPage = () => {
  const language = useSelector(getLang)
  const lang = useLanguage()
  const{contacts} = useContacts()
  return (
    <PhonebookWrapper className="phonebook__wrap">
    <Section title={lang.phonebook} icon ={language === 'english' &&  <IconMphone/>}>
      {/* <ContactForm  /> */}

      {/* <Filter /> */}
      
      {contacts.length > 0 && (
        <>
       {/* <ListBar></ListBar> */}
        <ContactList contacts ={contacts} />
        </>
      )}
    </Section >
    

  </PhonebookWrapper>
  )
}

export default PhonebookPage