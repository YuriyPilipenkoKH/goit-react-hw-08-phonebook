import React, { useEffect } from 'react'
import { useAll } from '../../hooks/useAll'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { toggleLang } from '../../redux/langSlice'

const LangChanger = () => {
    const {language} = useAll()
    const dispatch = useAppDispatch()

      useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.setAttribute('data-lang', language);
      }, [language]);

  return (
      <button
        className="btn btn-ghost text-[var(--text-color)]"
        onClick={()=>dispatch(toggleLang())}
        aria-label="Toggle Theme"
      >
        {language === 'english' ? 'en' : 'ua'}
      </button>
  )
}

export default LangChanger