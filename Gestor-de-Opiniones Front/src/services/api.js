import axios from "axios";

//Configuraciones base
const apiClient = axios.create({
    baseURL: 'http://localhost:3056',
    timeout: 5000
})

//Interceptor para inyectar token si está logeado
apiClient.interceptors.request.use(
    config=> {
        const token = localStorage.getItem('token')
        if(token) config.headers.Authorization = token
        return config
    },
    err=> Promise.reject(err)
)

export const loginRequest = async(user)=>{
    try{
        return await apiClient.post('/login', user)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const getPostsRequest = async()=>{
    try{
        return await apiClient.get('/post/getPosts')
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const updatePostRequest = async(id, post)=>{
    try{
        return await apiClient.put(`/post/editPost/${id}`, post)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const deletePostRequest = async(id)=>{
    try{
        return await apiClient.delete(`/post/deletePost/${id}`)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}