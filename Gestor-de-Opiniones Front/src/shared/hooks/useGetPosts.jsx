import { useState } from "react"
import { getPostsRequest } from "../../services/api"
import toast from "react-hot-toast"

export const UseGetPosts = () => {
  const [posts, setPosts] = useState(null)

  const getPosts = async()=>{
    const response = await getPostsRequest()
    if(response.error){
      return toast.error(
        response?.err?.response?.data?.message ||
        'Error al obtener las publicaciones'
      )
    }
    setPosts(response.data)
  }
  return {
    posts,
    isFetching: !posts,
    getPosts
  }
}
