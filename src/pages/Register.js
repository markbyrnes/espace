import { useState, useEffect } from "react"

export default function Register(){

    const apiRegisterUrl = "http://localhost:8080/api/users"
    const [account, setAccountType] = useState(true) 
    const [formData, setFormData] = useState(
        {
            username: "",
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
            fetch(apiRegisterUrl, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": formData.username,
                "password": formData.password,
                "email": formData.email,
                "personal_account": account
                })
            })
        .then(response => response.json())
        .then(data =>console.log(data))
        }
    }

    return(
        <main>
            <h1>Create an account</h1>
                <input type="radio" id="personal" name="accountType" 
                onChange={toggleAccountType} defaultChecked/>
                <label htmlFor="personal">Personal Account</label>
                <input type="radio" id="business" name="accountType"
                 onChange={toggleAccountType} />
                <label htmlFor="business">Business Account</label>
            {account ? 
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" name="username" onChange={handleChange} value={formData.username}/>
                <input type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email}/>
                <input type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password}/>
                <button>Submit</button>
            </form> :
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Business Name" name="username" onChange={handleChange} value={formData.username}/>
                <input type="email" placeholder="Business Email" name="email" onChange={handleChange} value={formData.email}/>
                <input type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password}/>
                <button>Submit</button>
            </form>}
        </main>
    )
}