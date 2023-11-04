import { useState } from "react";
import { Avatar, BtnWrap, Check, ConfirmButtonWrap, Cross, EditButton, FormContainer, FormEditor, FormInput, FormLabel, FormStyled, ImageControls, ImgWrap } from "./UserForm.styled"
import { IconCrossForSearch, iconPen } from "utils/svgIcons";
import avatarDefault2x from '../../img/Photo_default@2x.jpg';
import { useEffect } from "react";
import { ReactComponent as Camera } from '../../img/camera.svg'
import Tooltip from "components/Tooltip/Tooltip";
import { useForm } from "react-hook-form";
import { ErrorWrap } from "components/HookForm/HookForm.styled";
import { useLanguage } from "hooks/useLanguage";

 
export const UserForm = () => {
    const [showData, setShowData] = useState(false);
    const {
        register, 
        handleSubmit,
        formState,
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            birthday: '',
            phone: '',
            location: '',
        },
        mode:'all',
    })
    const {
        errors,
        isDirty,
        isValid ,
        isSubmitSuccessful,
    } = formState

    
      const [userPhoto, setUserPhoto] = useState('');  
      const [edit, setEdit] = useState(false);
      const lang = useLanguage()
      
      const submit = (data) => {
        console.log('Form summited',data)
      };
          //reset
    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

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
            {/* form */}
        <FormStyled onSubmit={handleSubmit(submit)} noValidate>
           <FormLabel >Name:
          <FormInput
          {...register('name',
          {
          required: {
              value: true,
              message: "Name is requred",
          },
          minLength:{
              value: 2,
              message: 'Minimum length is 2'
          },
          pattern: {
              value: /^[a-zA-Z0-9]{2,20}$/,
              message: 'Name is not valid'
          },
          validate: {
              notQwe: (fieldValue) => {
                  return (
                      !fieldValue.toLowerCase().startsWith('qw') || 
                      'Enter a different name'
                  )
              },
          }
          })}
            type="text"
            errors={errors.name}
            />
            {errors?.name && (
                <ErrorWrap>{errors.name.message}</ErrorWrap>
                )}
          </FormLabel>
          <FormLabel >Email:
          <FormInput
              {...register('email',{
                required: {
                    value: true,
                    message: "Email is requred",
                },
                pattern: {
                    value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Email is not valid',
                },
                validate: {
                    notAdmin: (fieldValue) => {
                        return (
                            !fieldValue.startsWith('admin') || 
                            'Enter a different email address'
                        )
                    },
                    notBlackListed: (fieldValue) => {
                        return (
                            !fieldValue.endsWith('.ru') ||
                            'This domain is not supported'
                        )
                    },
                    emailAvailable: async (fieldValue)  => {
                        const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                        const data = await response.json()
                        return data.length === 0 || 'Email already exists'
                    }
                },

            })}
            type="email"

            errors={errors.email}
          />
            {errors?.email && (
            <ErrorWrap>{errors.email.message}</ErrorWrap>
            )}
          </FormLabel>
          <FormLabel >Birthday:
          <FormInput
           {...register('birthday',{
            required: {
                value: true,
                message: "Birthday is requred",
            },
            pattern: {
                value:  /^(?:19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
                message: 'Birthday is not valid',
            },
        })}
            type="date"
            placeholder="YYYY-MM-DD"
            errors={errors.birthday}
          />
        {errors?.birthday && (
        <ErrorWrap>{errors.birthday.message}</ErrorWrap>
        )}
          </FormLabel>
          <FormLabel >Phone:
          <FormInput
        {...register('phone',{
            required: {
                value: true,
                message: "Phone is requred",
            },
            pattern: {
                value:  /^\d{10}$/,
                message: 'Phone is not valid',
            },
        })}
            type="text"
            errors={errors.phone}
          />
        {errors?.phone && (
        <ErrorWrap>{errors.phone.message}</ErrorWrap>
        )}
          </FormLabel>
           <FormLabel >Location:
          <FormInput
        {...register('location',{
            required: {
                value: true,
                message: "Location is requred",
            },
            minLength:{
                value: 3,
                message: 'Minimum length is 3'
            },
        })}
            type="text"
     
            errors={errors.location}
          />
        {errors?.location && (
        <ErrorWrap>{errors.location.message}</ErrorWrap>
        )}
        </FormLabel>
    
        <BtnWrap  className="BtnWrap">
        <Tooltip text="Click me to Save!">
          <button 
          className="saveBtn"
          disabled={!isDirty || !isValid}
          type="submit">Save</button>
      </Tooltip>

        </BtnWrap>
      </FormStyled>


        <FormEditor onClick={handleData}>
                {!showData ? iconPen : IconCrossForSearch}
            </FormEditor>
      
    </FormContainer>
  )
}

