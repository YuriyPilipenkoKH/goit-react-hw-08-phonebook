import Button from "components/Button/Button"
import { ErrorWrap, HookedForm, HookedInput, HookedLabel } from "./HookForm.styled"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useState } from "react"


const HookForm = () => {
    let renderCount = 0
    // const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const {
    register, 
    control,
    handleSubmit,
    formState
    } = useForm()
//    const {name, ref, onChange, onBlur} = register('userName')
    const {errors} = formState

    

    const onChangeName  = (e) => {
                setName(e.target.value);
         }
    const onChangeEmail  = (e) => {
                setEmail(e.target.value);
         }
    const onChangePassword  = (e) => {
        setPassword(e.target.value);
    }
        
    const onSubmit = data => {
        console.log('Form summited',data)
            // dispatch(logIn({ name, password }));
            setName('');
            setEmail('');
            setPassword('');
    };

    // const onError = errors => {
    //     console.log('Form errors', errors)
    // };

    renderCount++
  return (
    <div>
        <h2>renderCount{"  "}{renderCount}</h2>
        <HookedForm onSubmit={handleSubmit(onSubmit)} noValidate >
            <HookedLabel >UserName
                <HookedInput 
                {...register('name',
                { 
                required: {
                    value: true,
                    message: "Name is requred",
                },
                pattern: {
                    value: /^[a-zA-Z0-9]{2,20}$/,
                    message: 'Name is not valid'
                }
                })}
                id="name"
                type="text"
                name="name"
                value={name} 
                onChange={onChangeName}
                errors={errors.name}
                 />
                {errors?.name && (
                <ErrorWrap>{errors.name.message}</ErrorWrap>
                )}
         
            </HookedLabel>
            <HookedLabel >UserEmail
                <HookedInput 
                {...register('email',{
                    required: {
                        value: true,
                        message: "Email is requred",
                    },
                    pattern: {
                        value:  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                        message: 'Email is not valid',
                    },
                })}
                id="email"
                type="email"
                name="email"
                value={email} 
                onChange={onChangeEmail}
                errors={errors.email}
                 />
                {errors?.email && (
                <ErrorWrap>{errors.email.message}</ErrorWrap>
                )}
            </HookedLabel>
            <HookedLabel >Password
                <HookedInput 
                {...register('password',{
                    required: "Password is requred" ,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
                        message: 'Password must be from 6 to 16 characters'
                    },
                })}
                id="password"
                type="password"
                name="password"
                value={password} 
                onChange={onChangePassword}
                errors={errors.password} />
                {errors?.password && (
                <ErrorWrap>{errors.password.message}</ErrorWrap>
                )}
            </HookedLabel>
            <Button type="submit" className='sub'>submit</Button>
        </HookedForm>
        <DevTool control={control}/>
    </div>
  )
}

export default HookForm
