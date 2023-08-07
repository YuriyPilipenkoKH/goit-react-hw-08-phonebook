// import { useSelector } from "react-redux"
import { StyledListBar, SortBtns } from "./ListBar.styled"
// import { getSorted } from "redux/selectors"
import { toggleSortId,  toggleSortName, toggleSortNUmber } from "redux/sortSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { langEN, langUA } from "utils/languages"
import { getLang } from "redux/selectors"

const ListBar = () => {

    const [lang, setLang] = useState(langUA)
    const language = useSelector(getLang)
   
    // Language
    useEffect(() => {
      setLang(language === 'english' ?  langEN :  langUA);
    }, [language])

    const dispatch = useDispatch()

    const sortById = () =>{   
        dispatch(toggleSortId()) 
    }

    const sortByName = () =>{
        dispatch(toggleSortName()) 
    }

    const sortByNumber = () =>{
        dispatch(toggleSortNUmber()) 
    }


  return (
    <StyledListBar>
        <SortBtns onClick={sortById}>id</SortBtns>
        <SortBtns onClick={sortByName}> {lang.sname} </SortBtns>
        <SortBtns onClick={sortByNumber}> {lang.phone} </SortBtns>
    </StyledListBar>
  )
}

export default ListBar