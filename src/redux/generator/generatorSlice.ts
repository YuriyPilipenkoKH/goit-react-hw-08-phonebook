import { createSlice } from "@reduxjs/toolkit"
import { Gen_Contact } from "../../components/generator/GenerateRandomContact"

export interface GeneratorState {
  genContact: Gen_Contact
}
const initialState: GeneratorState = {
  genContact:{
    name: '',
    number: '',
  }
}

const generatorSlice = createSlice({
  name: 'generator',
  initialState,
  reducers: {
    setContact(state, action) {
      state.genContact = action.payload
    },
    rmContact(state) {
      state.genContact.name = ''
      state.genContact.number = ''
    }
  },
})
export const { setContact, rmContact } = generatorSlice.actions;
export const generatorReducer = generatorSlice.reducer