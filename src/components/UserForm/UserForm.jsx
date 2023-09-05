import { useState } from "react";
import { BtnWrap, FormContainer, FormEditor, FormInput, FormLabel, FormStyled, ImgWrap } from "./UserForm.styled"
import { IconCrossForSearch, iconPen } from "utils/svgIcons";



 
export const UserForm = () => {
    const [showData, setShowData] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthday: '',
        phone: '',
        location: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can perform actions with the form data, like sending it to an API or processing it.
        console.log('Form Data:', formData);
        // Clear the form fields after submission (optional)
        setFormData({
          name: '',
          email: '',
          birthday: '',
          phone: '',
          location: '',
        });
      };

      const handleData = () => {
        setShowData(!showData);
        
    };
  return (
    <FormContainer>
        <ImgWrap className="ImgWrap">
            <img alt='alt'/>
            <button>edit photo</button>
        </ImgWrap>
        <FormStyled onSubmit={handleSubmit}>
           <FormLabel htmlFor="name">Name:
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          </FormLabel>
          <FormLabel htmlFor="email">Email:
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          </FormLabel>
          <FormLabel htmlFor="birthday">Birthday:
          <FormInput
            type="text"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
          />
          </FormLabel>
          <FormLabel htmlFor="phone">Phone:
          <FormInput
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          </FormLabel>
           <FormLabel htmlFor="location">Location:
          <FormInput
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
           </FormLabel>
    
      </FormStyled>

        <BtnWrap  className="BtnWrap">
          <button 
          className="saveBtn"
          type="submit">Save</button>
        </BtnWrap>

        <FormEditor onClick={handleData}>
                {!showData ? iconPen : IconCrossForSearch}
            </FormEditor>
      
    </FormContainer>
  )
}

