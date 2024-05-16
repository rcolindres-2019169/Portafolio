import toast from "react-hot-toast"
import { deletePostRequest } from "../../services/api"

export const useDeletePost = () => {

    const deletePost = async(id)=>{
        const response = await deletePostRequest(id)
        if(response.error){
            return toast.error( 'Error al eliminar el post')
        }
        return toast.success('Post eliminado')
    }

  return {
    deletePost
  }
}
