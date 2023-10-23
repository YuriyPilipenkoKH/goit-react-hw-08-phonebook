import Button, { FlatButton } from "components/Button/Button"
import { ErrorWrap, HookedForm, HookedInput, HookedLabel } from "./HookForm.styled"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"


const HookForm = () => {
    const [show, setShow] = useState(false);
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
        // isSubmitted, 
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
        const souldI ={
            shouldDirty:true,
            shouldTouch:true,
            shouldValidate:true,
        }
  
        setValue('name', 'Martin', souldI)
        setValue('email', 'martino@gmail.com', souldI)
        setValue('password', 'Martino405', souldI)
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
    <div>
        <h2>renderCount{"  "}{renderCount}</h2>
        <h3>Watch {'  '}{watchUser} </h3>
        <HookedForm onSubmit={handleSubmit(onSubmit)} noValidate >
            <HookedLabel >UserName
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
                }
                })}

                type="text"
                errors={errors.name}
                isDirty={isDirty}
                isValid={isValid}
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
                    }
                })}

                type="email"
                errors={errors.email}
                isDirty={isDirty}
                isValid={isValid}
                 />
                {errors?.email && (
                <ErrorWrap>{errors.email.message}</ErrorWrap>
                )}
            </HookedLabel>
            <HookedLabel >Password
                <HookedInput 
                {...register('password',{
                    required: "Password is requred" ,
                    // disabled: watch('email') === '',
                    minLength:{
                        value: 6,
                        message: 'Minimum length is 6'
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,
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
                isDirty={isDirty}
                isValid={isValid} />
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
          
        </HookedForm>
        <DevTool control={control}/>
    </div>
  )
}

export default HookForm
