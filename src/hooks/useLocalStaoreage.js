import {  useState } from "react";

export const useLocalStorage1 = (key, initialState) => {
    const [state, setState] = useState(() => JSON.parse(localStorage.getItem(key)) ?? initialState);

    const setAndStoreState = (newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      setState(newValue);
    };
  
    return [state, setAndStoreState];
}