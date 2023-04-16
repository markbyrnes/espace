import { useState, useEffect } from "react"

export default function Login(){  
    const apiLoginUrl = "http://localhost:8080/api/login"
    const [account, setAccountType] = useState(true) 
    const [formData, setFormData] = useState(
        {
            email: "",
            password:"",
        }
    )
    const [submit, setSubmit] = useState(0)
    const toggleAccountType = () => setAccountType(!account)

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        }) 
    }

    function handleSubmit(event){
        event.preventDefault()
        {
            fetch(apiLoginUrl, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": formData.username,
                "password": formData.password,
                })
            })
        .then(response => response.json())
        .then(data =>console.log(data))
        }
    }
    
    return (
        <main>
        <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" name="email" onChange={handleChange} value={formData.username}/>
                <input type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password}/>
                <button>Submit</button>
            </form>
        </main>
    )
  }