import {  useState } from "react";

export const useLocalStorage = (key:string, initialState:string) => {
  const [state, setState] = useState<string>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialState;
});

    const setAndStoreState = (newValue:string) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      setState(newValue);
    };
  
    return [state, setAndStoreState] as const;
  }