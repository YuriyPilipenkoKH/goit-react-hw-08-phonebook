import Button from "components/Button/Button"
import { ErrorWrap, HookedForm, HookedInput, HookedLabel } from "./HookForm.styled"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"


const HookForm = () => {
    let renderCount = 0
    // const [show, setShow] = useState(false);

   const {
    register, 
    control,
    handleSubmit,
    formState
    } = useForm({
        defaultValues: {
            name: 'Martin',
            email: 'martin@gmail.com',
            password: ''
        }
    })
//    const {name, ref, onChange, onBlur} = register('userName')
    const {errors} = formState

    const onSubmit = data => {
        console.log('Form summited',data)

    };


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

                type="text"
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
                    validate: (fieldValue) => {
                        return (
                            fieldValue.toLowerCase() !== 'qwe123' || 'Enter a different password'
                        )
                    }
                })}

                type="password"
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
