import { useState } from "react"
import toast from "react-hot-toast"
import { loginRequest } from "../../services/api.js"

export const useLogin = () =>{
    const [isLoading, setIsLoading] = useState(false)

    const login = async(email, password) =>{
        setIsLoading(true)
        const user = {
            email,
            password
        }

        const response = await loginRequest(user)
        setIsLoading(false)
        
        if(response.error){
            return toast.error(
                response?.e?.response?.data ||
                'Error general al internar iniciar sesión. Intenta de nuevo.'
            )
        }else{
            console.log(response)
            return toast.success('Ha iniciado sesión correctamente')
            
        }
            
    }
    return{
        login,
        isLoading
    }
}
