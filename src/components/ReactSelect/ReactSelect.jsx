import  { useState } from 'react'
import { StyledLabel } from './FiltersBar.styled';
import Select from 'react-select';


const ReactSelect = () => {
    const [selectedModel, setSelectedModel] = useState('Enter the text'); // State to track the selected car model

    // Event handler to update the selected model when the dropdown changes
    const handleModelChange = (selectedOption) => {
      setSelectedModel(selectedOption);
    };

    const options  = [
        {value:"buick" , label: "buick"},
        {value:"volvo" , label: "volvo"},
        {value:"hummer" , label: "hummer"},
        {value:"subaru" , label: "subaru"},
        {value:"mitsubishi" , label: "mitsubishi"},
        {value:"nissan" , label: "nissan"},
        {value:"lincoln" , label: "lincoln"},
        {value:"gmc" , label: "gmc"},
        {value:"hyundai" , label: "hyundai"},
        {value:"jeep" , label: "jeep"},
    ]
    const colorStyles = {
        control: (styles, state) => ({
            ...styles, backgroundColor: 'var(--sel-color)',
            width: '224px',
            height: '48px',
            borderRadius: '14px',
            borderColor: state.isSelected ? 'transparent' : 'transparent',
            color: 'var(--black)',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer'

        }),
        option: (styles, {data}) => {
            return {...styles, color: 'var(--grey)'}
        }
    }
    
  return (
    <div>
   
      <StyledLabel htmlFor="carModel">Car brand
      <Select 
       id="carModel"
       options = {options}
       placeholder ="Enter the text"
       onChange={handleModelChange} 
       value={selectedModel }
       styles={colorStyles}
    />
       {/* <p>You selected: {selectedModel ? selectedModel.label : 'None'}</p> */}
      </StyledLabel>
    </div>
  )
}

export default ReactSelect