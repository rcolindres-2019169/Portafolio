import { Routes, Route } from "react-router-dom"
import { Posts } from "./Posts"
import { UseGetPosts } from "../shared/hooks/useGetPosts"
import { useEffect } from "react"
import { PacmanLoader } from "react-spinners"
import { PostForm } from "./PostForm"

export const FeedContent = () => {
  const { posts, getPosts, isFetching } = UseGetPosts()

  useEffect(()=>{
    getPosts()
  }, [])

  if(isFetching){
    return (
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <PacmanLoader color="#ffe733"/>
      </div>
    )
  }

  return (
    <div>
        <Routes>
            <Route path="posts" element={<Posts posts={posts} />} />
            <Route path="newPost" element={<PostForm />} />
        </Routes>
    </div>
  )
}
