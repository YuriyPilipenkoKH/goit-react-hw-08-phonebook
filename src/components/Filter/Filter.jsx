import { Input } from '../ContactForm/ContactForm.styled';
import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { useLanguage } from 'hooks/useLanguage';

export const Filter = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state =>  state.contacts.contactsList)
  const lang = useLanguage()
 
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

