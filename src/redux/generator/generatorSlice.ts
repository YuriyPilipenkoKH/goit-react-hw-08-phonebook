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
    setGenContact(state, action) {
      state.genContact = action.payload
    },
    rmGenContact(state) {
      state.genContact.name = ''
      state.genContact.number = ''
    }
  },
})
export const { setGenContact, rmGenContact } = generatorSlice.actions;
export const generatorReducer = generatorSlice.reducer