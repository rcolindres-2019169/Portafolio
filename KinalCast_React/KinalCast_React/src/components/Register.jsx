import { useState } from 'react'
import { Input } from './Input.jsx'
import { emailValidationMessage, passwordConfirmValidateMessage, passwordValidateMessage, usernameValidationMessage, validateEmail, validatePassword, validatePasswordConfrim, validateUsername } from '../shared/validators/validator.js'
import { useRegister } from '../shared/hooks/useRegister.jsx'

export const Register = ({switchAuthAndler}) => {
    const {register, isLoading } = useRegister()

    const [formData, setFormData ] = useState(
        {
            email: {
                value: '',
                isValid: false,
                showError: false
            },
            username:{
                value: '',
                isValid: false,
                showError: false
            },
            password: {
                value: '',
                isValid: false,
                showError: false
            },
            passwordConfirm: {
                value: '',
                isValid: false,
                showError: false
            }
        }
    )

    const isSubmitButtonDisable =   !formData.email.isValid || 
                                    !formData.username.isValid ||  
                                    !formData.password.isValid || 
                                    !formData.passwordConfirm.isValid

    const handleValueChange = (value, field) =>{
        setFormData((prevData)=> (
            {
                ...prevData,
                [field] : {
                    ...prevData[field],
                    value
                }
            }
        ))
    }

    const handleValidationOnBlur = (value, field)=>{
        let isValid = false
        switch(field){
            case 'email':
                isValid = validateEmail(value)
            break

            case 'username':
                isValid = validateUsername(value)
            break

            case 'password':
                isValid = validatePassword(value)
            break

            case 'passwordConfirm':
                isValid = validatePasswordConfrim(formData.password.value, value)
            break

            default:
            break
        }
        setFormData((prevData)=>(
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
    }

    const handleRegister = async(e)=>{
        e.preventDefault()
        register(
            
                formData.email.value,
                formData.username.value,
                formData.password.value
            

        )
    }

  return (
    <div className="register-container">
        <form 
            className="auth-form"
            onSubmit={handleRegister}    
        >
            <Input
                field = 'email'
                label='Email'
                value={formData.email.value}
                onChangeHandler={handleValueChange}
                type="email"
                onBlurHandle={handleValidationOnBlur}
                showErrorMessage = {formData.email.showError}
                validationMessage = {emailValidationMessage}
            />

            <Input
                field = 'username'
                label='Username'
                value={formData.username.value}
                onChangeHandler={handleValueChange}
                type="text"
                onBlurHandle={handleValidationOnBlur}
                showErrorMessage = {formData.username.showError}
                validationMessage = {usernameValidationMessage}
            />

            <Input
                field = 'password'
                label='Password'
                value={formData.password.value}
                onChangeHandler={handleValueChange}
                type="password"
                onBlurHandle={handleValidationOnBlur}
                showErrorMessage = {formData.password.showError}
                validationMessage = {passwordValidateMessage}
            
            />

            <Input
                field = 'passwordConfirm'
                label='Confirm Password'
                value={formData.passwordConfirm.value}
                onChangeHandler={handleValueChange}
                type="password"
                onBlurHandle={handleValidationOnBlur}
                showErrorMessage = {formData.passwordConfirm.showError}
                validationMessage = {passwordConfirmValidateMessage}
            />

            <button
                disabled = {isSubmitButtonDisable}
            >
                    Register
            </button>
        </form>
        <span onClick={switchAuthAndler}>
            ¿Ya tienes una cuenta? ¡Inicia sesión acá!
        </span>
    </div>
  )
}
