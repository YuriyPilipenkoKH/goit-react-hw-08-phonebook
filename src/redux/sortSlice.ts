import { createSlice } from "@reduxjs/toolkit";


export  const sortSlice = createSlice({

    name: 'sort',
    initialState: {
        activeIndex : 0,
        id : true,
        name : null,
        number: null,
    },
    reducers: {

      toggleSortId:{
       reducer(state)  {
       state.activeIndex = 0 
       state.id = !state.id 
       state.name = null
       state.number = null
       
        }},


      toggleSortName:{
       reducer(state)  {
       state.activeIndex = 1
       state.id = null 
       state.name = !state.name
       state.number = null
       
        }},

      toggleSortNUmber:{
       reducer(state)  {
       state.activeIndex = 2
       state.id = null 
       state.name = null
       state.number = !state.number
       
        }},
}
})

export const { toggleSortId,  toggleSortName, toggleSortNUmber }  = sortSlice.actions
export const sortReducer = sortSlice.reducer