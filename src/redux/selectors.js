export const getContactsList = state => state.contacts.contactsList
export const getContactsFilter = state => state.filter
export const getForm =  state => state.form
export const getEditedName =  state => state.edit.nick
export const getEditedPhone =  state => state.edit.phone
export const getSorted =  state => state.sort

export const getTheme =  state => state.theme.theme
export const getLang =  state => state.lang.lang

export const selectIsLoading = state => state.contacts.isLoading;



export const getSortedById = (contactsList, bool)  => { 
 
    return bool 
    ? [...contactsList].sort((a, b) => Number(a.id) - Number(b.id))
    : [...contactsList].sort((b, a) => Number(a.id) - Number(b.id)) 
  } 

// export const getSortedByDate = (contactsList, bool)  => {
//     return bool 
//     ? [...contactsList].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
//     : [...contactsList].sort((b, a) => a.createdAt.localeCompare(b.createdAt))
//   } 

export const getSortedByName = (contactsList, bool)  => {
    return bool 
    ? [...contactsList].sort((a, b) => a.name.localeCompare(b.name))
    : [...contactsList].sort((b, a) => a.name.localeCompare(b.name))
  } 

  export const getSortedByNumber = (contactsList, bool)  => {
  return bool 
    ? [...contactsList].sort((a, b) => a.number.localeCompare(b.number))
    : [...contactsList].sort((b, a) => a.number.localeCompare(b.number))
} 

export const arrayOfMethods = [getSortedById,  getSortedByName, getSortedByNumber]
