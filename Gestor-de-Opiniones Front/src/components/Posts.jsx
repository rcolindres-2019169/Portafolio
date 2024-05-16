import { useState } from "react"
import { Link } from "react-router-dom"
import { useUpdatePost } from "../shared/hooks/useUpdatePost"
import { useDeletePost } from "../shared/hooks/useDeletePost"

export const Posts = ({posts}) => {
  const { updatedPost, isFetching, updatePost } = useUpdatePost()
  const { deletePost } = useDeletePost()
  const [post, setPost] = useState({
    _id: '',
    title: '',
    category: '',
    content: ''
  })
/*   const [update, setUpdate] = useState({
    id: '',
    title: '',
    category: '',
    content: ''
  }) */

  const getUpdate = (post)=>{
    setPost(post)
  }
  const handleChange = (e)=>{
    setPost((prevData)=> (
      {
        ...prevData,
        [e.target.name]: e.target.value
      }
    ))
  }

  const handleSubmit = ()=>{
    updatePost(
      post._id,
      post
    )
  }

  const delPost = (id)=>{
    deletePost(id)
  }
  return (
    <>
    <div className="row g-0 justify-content-center m-5">
      <div className="mb-3 d-flex align-items-center justify-content-center">
        <h2>My Posts</h2>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button className="mb-3 btn btn-primary">
          <Link className="btn btn-primary" to="/feed/newPost">
            Agregar Post  
          </Link>
        </button>
      </div>
      {
        posts.map((post)=> (
          <div className="card m-3 row g-0" style={{maxWidth: '18rem', maxHeight: '20rem'}} key={post._id}>
            <div className="card-body">
              <h5>
                {post.title} 
                <svg onClick={()=> getUpdate(post)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>

                <svg onClick={()=> delPost(post._id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                </svg>
              </h5> 
              {post.content}
            </div>
          </div>
        ))
      }
      
    </div>
    
        {/* SIDEBAR PARA ACTUALIZAR */}

          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">Actualizar tu post</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">

                  <div className="m-3">
                      <label htmlFor="">Title</label>
                      <input name="title" value={post.title} onChange={handleChange} type="text" className="form-control"/>
                  </div>
                  <div className="m-3">
                      <label htmlFor="">Category</label>
                      <input name="category" value={post.category} onChange={handleChange} type="text" className="form-control"/>
                  </div>
                  <div className="m-3">
                      <label htmlFor="">Content</label>
                      <textarea name="content" value={post.content} onChange={handleChange} type="text" className="form-control"/>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button onClick={handleSubmit} className="btn btn-success">
                      Actualizar
                    </button>
                  </div>
              </div>
          </div>
    </>
    
  )
}
