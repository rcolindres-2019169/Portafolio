// ------------------------------ VALIDACION DE CORREO ------------------------

export const validateEmail = (email) =>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const emailValidationMessage = 'Por favor ingresa un correo válido'
// ------------------------------ VALIDACION DE CORREO ------------------------

// ------------------------------ VALIDACION DE USUARIO ------------------------
export const validateUsername = (username) =>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}

export const usernameValidationMessage= 'El nombre de usuario debe ser de entre  3 y 8 caracteres sin especios.'


// ------------------------------ VALIDACION DE USUARIO ------------------------


// ------------------------------ VALIDACION DE CONTRASEÑA ------------------------
export const validatePassword = (password) =>{
    const regex = /^\S{6,12}$/
    return regex.test(password)
}

export const passwordValidateMessage = 'Debe tener entre 6 y 12 caracteres, sin espacios'
// ------------------------------ VALIDACION DE CONTRASEÑA ------------------------


// ------------------------------ VALIDACION DE CONFIRMAR CONTRASEÑA  ------------------------

export const validatePasswordConfrim = (password, passwordConfirm) =>{
   return password === passwordConfirm  
}

export const passwordConfirmValidateMessage = 'Las constraseñas no coinciden.'


// ------------------------------ VALIDACION DE CONFIRMAR CONTRASEÑA  ------------------------


export const validateLoginUser = (email, emailLogin) =>{
    return email === emailLogin  
 }
 
 export const userConfirmLoginMessage = 'Email incorrecto y/o no existe'


 export const validateLoginPass = (password, passwordLogin) =>{
    return password === passwordLogin  
 }
 
 export const passConfirmLoginMessage = 'Contraseña incorrecta'