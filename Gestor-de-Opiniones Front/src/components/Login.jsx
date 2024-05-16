import { useState } from "react"
import { useLogin } from "../shared/hooks/useLogin"

export const Login = () => {
    const { isLoading, login } = useLogin()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const img = 'https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454'

    const handleChange = (e)=>{
        setFormData((prevData)=> (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        login(formData)
    } 
  return (
    <>
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <div>
            <img src={img} style={{width: '5em', height: 'auto'}}/>
        </div>
        <form onSubmit={handleSubmit} style={{width: '100em'}}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
            <input value={formData.email} onChange={handleChange} name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your username with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input value={formData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
    </div>
    </>
  )
}
