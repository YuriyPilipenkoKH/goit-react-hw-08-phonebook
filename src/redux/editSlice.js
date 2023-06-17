import { createSlice } from "@reduxjs/toolkit";


export  const editSlice = createSlice({

    name: 'edit',
    initialState: {
     
        nick : 'Bob',
        phone: '888-22-00',
    },
    reducers: {

       updateValue:{
       reducer(state, action)  {
        // const { name } = action.payload;
        console.log(action.payload);
        state.nick = action.payload
        // const { field, value } = action.payload;
        // state[field] = value;
       
        }},
}
})

export const { updateValue}  = editSlice.actions
export const editReducer = editSlice.reducer