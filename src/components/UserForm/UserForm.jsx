import { useState } from "react";
import { Avatar, BtnWrap, Check, ConfirmButtonWrap, Cross, EditButton, FormContainer, FormEditor, FormInput, FormLabel, FormStyled, ImageControls, ImgWrap } from "./UserForm.styled"
import { IconCrossForSearch, iconPen } from "utils/svgIcons";
import avatarDefault2x from '../../img/Photo_default@2x.jpg';
import { langEN, langUA } from "utils/languages";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getLang } from "redux/selectors";
import { ReactComponent as Camera } from '../../img/camera.svg'
import Tooltip from "components/Tooltip/Tooltip";

 
export const UserForm = () => {
    const [showData, setShowData] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthday: '',
        phone: '',
        location: '',
      });
      const [userPhoto, setUserPhoto] = useState('');  
      const [edit, setEdit] = useState(false);
      const language = useSelector(getLang)
      const [lang, setLang] = useState(langUA);
  
      useEffect(() => {
          setLang(language === 'english' ? langEN : langUA);
      }, [language]);
  

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
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

    const handleClickInput = e => {
        setEdit(true);
        const [file] = e.target.files;
        if (file) {
            setUserPhoto(file);
        }
    };
    const handleAddAvatar = () => {
        const avatar = userPhoto;
        const formData = new FormData();
        for (const key in { avatar }) {
            formData.append(key, { avatar }[key]);
        }
      
        setEdit(false);
        setUserPhoto(false);
    };

    const handleCancelAvatar = e => {
        setUserPhoto();
        setEdit(false);
    }
    const handleEditBtn = () => {
        document.getElementById('userPhoto').click();
    };
  return (
    <FormContainer>
            <ImgWrap className="UserPhotoWrap">
                <label htmlFor="userPhoto" >
                    {!userPhoto &&  (
                        <Avatar src={avatarDefault2x} alt="user avatar" />
                    )}
                    {/* {!userPhoto  (
                        <Avatar src={user.avatarURL} alt="user avatar" />
                    )} */}
                    {!!userPhoto && (
                        <Avatar
                            src={URL.createObjectURL(userPhoto)}
                            id="image"
                            alt={userPhoto.username}
                        />
                    )}

                    <input  
                        type="file"
                        id="userPhoto"
                        name="userPhoto"
                        accept=".png, .jpg, .jpeg, .webp"
                        hidden
                        disabled={!showData}
                        value=""
                        onChange={handleClickInput}
                    />

                    {/* <ErrorMessage name="user-avatar" component="div" /> */}
                </label>

                {showData && (
                    <ImageControls>
                        {edit && userPhoto ? (
                            <ConfirmButtonWrap>
                               
                                    <EditButton
                                        type="button"
                                        onClick={handleAddAvatar}
                                    >
                                        <Check stroke="#00C3AD" />
                                        {lang.confirm}
                                    </EditButton>
                               
                                <EditButton
                                    type="button"
                                    onClick={handleCancelAvatar}
                                >
                                    <Cross />
                                    {lang.cancel}
                                </EditButton>
                            </ConfirmButtonWrap>
                        ) : (
                            <EditButton type="button" onClick={handleEditBtn}>
                                <Camera
                                    stroke="#54ADFF"
                                    style={{ marginRight: 8 }}
                                />
                                {lang.edit}
                            </EditButton>
                        )}
                    </ImageControls>
                )}
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
        <Tooltip text="Click me to Save!">

          <button 
          className="saveBtn"
          type="submit">Save</button>
      </Tooltip>

        </BtnWrap>

        <FormEditor onClick={handleData}>
                {!showData ? iconPen : IconCrossForSearch}
            </FormEditor>
      
    </FormContainer>
  )
}

