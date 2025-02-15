import React, { useEffect } from 'react'
import { PhonebookWrapper } from './Pages.styled'
import { useLanguage } from '../hooks/useLanguage'
import { useSelector } from 'react-redux'
import { getLang } from '../redux/selectors/selectors'
import Section from '../components/section/Section'
import { useContacts } from '../hooks/useContacts'
import ContactList from '../components/phonebook/contactslist/ContactList'
import IconMphone from '../img/icons/iconMphone'
import { fetchContacts } from '../redux/contacts/operations'
import { useAppDispatch } from '../hooks/useAppDispatch'
import ContactForm from '../components/forms/ContactForm'

const PhonebookPage = () => {
  const lang = useLanguage()
  const language = useSelector(getLang)
  const{contacts, } = useContacts()
const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])
  
  return (
    <PhonebookWrapper className="phonebook__wrap">
    <Section title={lang.phonebook} icon ={language === 'english' &&  <IconMphone/>}>
      <ContactForm  />
      </Section >

      {/* <Filter /> */}
      
      {contacts.length > 0 && (
        <>
       {/* <ListBar></ListBar> */}
        <ContactList contacts ={contacts} />
        </>
      )}
    

  </PhonebookWrapper>
  )
}

export default PhonebookPage