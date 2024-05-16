import { useState } from "react"
import { loginRequest } from "../../services/api"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

//Hook personalizado que devuelve la función para ir al API
//y además guarda en un estado si está cargando la información
export const useLogin = () => {
    //Constante para redirigir hacia otr página
    const navigate = useNavigate()
    //Es verdadero cuando está cargando la información
    const [isLoading, setisLoading] = useState(false)

    //Función que consulta al API enviando los datos
    const login = async(user)=>{
        setisLoading(true)
        const response = await loginRequest(user)
        setisLoading(false)
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message ||
                'Error al logearse'
            )
        }
        toast.success('Logeado correctamente')
        localStorage.setItem('token', response.data.token)
        navigate('/feed/posts')
    }

  return {
    isLoading,
    login
  }
}
