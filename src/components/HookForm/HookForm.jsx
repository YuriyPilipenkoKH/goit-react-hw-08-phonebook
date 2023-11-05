import Button, { FlatButton } from "components/Button/Button"
import { ErrorWrap, HookedForm, HookedInput, HookedLabel } from "./HookForm.styled"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Tooltip from "components/Tooltip/Tooltip"
import { useRandomColor } from "hooks/useRandomColor"
import { useLanguage } from "hooks/useLanguage"
import { useFetch } from "hooks/useFetch"



const HookForm = () => {
    const [show, setShow] = useState(false);
    const {color, colorChange} = useRandomColor()
    const lang = useLanguage()
    const {data, refetch} = useFetch("https://v2.jokeapi.dev/joke/Any")
    // const [isValidName, setIsValidName] = useState(false)
    // const [isValidEmail, setIsValidEmail] = useState(false)
    // const [isValidPassword, setIsValidPassword] = useState(false)
        const {
        register, 
        control,
        handleSubmit,
        formState,
        watch,
        setValue,
        reset,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
        mode:'all',
    })
    //    const {name, ref, onChange, onBlur} = register('userName')
    const {
        errors,
        isDirty,
        isValid ,
        isSubmitting, 
        isSubmitSuccessful,
    } = formState
    
    const onSubmit = data => {
        console.log('Form summited',data)
        
    };

    //watch
    const watchUser = watch('email')
    useEffect((value) => {
     const subscription = watch((value) => {
        // console.log(value)
     })
      return () => {
        subscription.unsubscribe()
      }
    }, [watch])

    //set values
    const handleSetValues = () => {
        const shouldI ={
            shouldDirty:true,
            shouldTouch:true,
            shouldValidate:true,
        }
  
        setValue('name', 'Martin', shouldI)
        setValue('email', 'martino@gmail.com', shouldI)
        setValue('password', 'Martino405', shouldI)
    }
    const check = () => {
  console.log('errors',errors, 'isDirty', isDirty, 'isValid', isValid)
    }
    //reset
    useEffect(() => {
        if(isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

   
    // renders   
    let renderCount = 0
    renderCount++
  return (
    <div  style={{backgroundColor: color, padding: '24px'}}> 
        <h2>renderCount{"  "}{renderCount}</h2>
        <h3>Watch {'  '}{watchUser} </h3>
        <h3>Fetch : {data?.setup}  </h3>
        <h3> {data?.delivery}</h3>
        <HookedForm onSubmit={handleSubmit(onSubmit)} noValidate >
            <HookedLabel >{lang.name}
                
                    <HookedInput
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
                        notJonny: (fieldValue) => {
                            return (
                                fieldValue.toLowerCase() !== 'jonny'  || 
                                'Jonny is not allowed'
                            )
                        },
                    }
                    })}
                    
                    type="text"
                    errors={errors.name}
                    // isValid={isValidName}
                     />
               
                {errors?.name && (
                <ErrorWrap>{errors.name.message}</ErrorWrap>
                )}
         
            </HookedLabel>
            <HookedLabel >{lang.email}
                <HookedInput 
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
                // isValid={isValidEmail}

                 />
                {errors?.email && (
                <ErrorWrap>{errors.email.message}</ErrorWrap>
                )}
            </HookedLabel>
            <Tooltip text='Use secure password'>
            <HookedLabel >{lang.pass}
                <HookedInput 
                {...register('password',{
                    required: "Password is requred" ,
                    // disabled: watch('email') === '',
                    minLength:{
                        value: 6,
                        message: 'Minimum length is 6'
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$#&]*$/,
                        message: 'Include capital letters and numbers'
                    },
                    validate: (fieldValue) => {
                        return (
                            fieldValue.toLowerCase() !== 'qwe123' || 'Enter a different password'
                        )
                    }
                })}

                type={show ? 'text' : 'password'}
                errors={errors.password}
                // isValid={isValidPassword} 

                    />
                {errors?.password && (
                    <ErrorWrap>{errors.password.message}</ErrorWrap>
                    )}
            <FlatButton 
            type='button' 
            className='showBtn'
            onClick={() => setShow(!show)}>
              {show ? <FaEyeSlash /> : <FaEye />}
              </FlatButton>
            </HookedLabel>
                </Tooltip>
            <Button 
            type="submit" 
            disabled={!isDirty || !isValid}
            className='sub'>submit</Button>
            <Button
             onClick={handleSetValues}
             disabled={isSubmitting}
             type="button"
             className='set'>set values</Button>
            <Button
             onClick={()=> reset()}
             disabled={!isDirty || isSubmitting}
             type="button"
             className='set'>rerset</Button>
             <Button
             onClick={check}>
                Check</Button>
             <Button
             onClick={colorChange}>
                Color</Button>
             <Button
             onClick={refetch}>
                Fetch</Button>
        </HookedForm>
        <DevTool control={control}/>
    </div>
  )
}

export default HookForm
