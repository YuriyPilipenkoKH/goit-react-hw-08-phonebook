import { useEffect, useState } from 'react';
import { Input } from '../ContactForm/ContactForm.styled';
import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { langEN, langUA } from 'utils/languages';
import { getLang } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state =>  state.contacts.contactsList)
  const [lang, setLang] = useState(langUA)
  const language = useSelector(getLang)
 
  // Language
  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])
 
  return(
    <>
    <FilterLabel>
      {contacts.length === 0 
      ? lang.empty
      : lang.find}
      <Input
        className='filter__field'
        type="text"
        onChange={(e) => dispatch(filterContacts(e.target.value))}
        disabled={contacts.length === 0}
 
      />
    </FilterLabel>
  </>

  )
}

