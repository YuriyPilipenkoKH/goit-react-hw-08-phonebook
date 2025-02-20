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