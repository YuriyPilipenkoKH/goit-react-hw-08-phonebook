import { createSlice } from "@reduxjs/toolkit";
import { themeTypes } from "../types";


const initialState:{ theme: themeTypes } = {
  theme: (localStorage.getItem("theme") as themeTypes) || "dark",
     
  };
  const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        
      toggleTheme: (state) => {
        state.theme = state.theme === "light" ? "dark" : "light";
      },
    },
  });

  export const { toggleTheme } = themeSlice.actions;
  // Export reducer
  export const themeReducer =  themeSlice.reducer;