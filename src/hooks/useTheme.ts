import { useState } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../redux/selectors/selectors";
import { themeTypes } from "../types";



export const Theme = () => {
  const [theme, setTheme] = useState<themeTypes>('dark');
  const language = useSelector(getTheme);

}