import { useState } from "react"
import { updatePostRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useUpdatePost = () => {
    const [updatedPost, setUpdatedPost] = useState(null)

    const updatePost = async(id, post)=>{
        const response = await updatePostRequest(id, post)
        if(response.error){
            toast.error(
                response?.err?.response?.data?.message ||
                'Error al actualizar el post'
            )
        }
        setUpdatedPost(response.data)
        toast.success('Actualizado correctamente')
    }
  return {
    updatedPost,
    isFetching: !updatePost,
    updatePost
  }
}
