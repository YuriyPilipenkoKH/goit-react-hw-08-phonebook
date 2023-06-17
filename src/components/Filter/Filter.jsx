import { Input } from '../ContactForm/ContactForm.styled';
import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state =>  state.contacts.contactsList)
 
  return(
    <>
    <FilterLabel>
      {contacts.length === 0 
      ? 'List is empty . . .'
      : 'Find contacts by name'}
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

