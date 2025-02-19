import {  useEffect } from 'react';
import {MdOutlineNightlight} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';
import { useAll } from '../../hooks/useAll';
import { toggleTheme } from '../../redux/themeSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';


export default function ThemeChanger() {
    const {theme} = useAll()
    const dispatch = useAppDispatch()

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      className="btn btn-ghost text-[var(--text-color)]"
      onClick={()=>dispatch(toggleTheme())}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <MdOutlineNightlight /> : <MdOutlineLightMode />}
    </button>
  );
}