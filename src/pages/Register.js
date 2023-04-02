import { useState } from "react"

export default function Register(){
    const [account, setAccount] = useState(true) 
    const toggleAccount = () => setAccount(!account)

    return(
        <main>
            <h1>Create an account</h1>
                <input type="radio" id="personal" name="accountType" 
                onChange={toggleAccount} defaultChecked/>
                <label htmlFor="personal">Personal Account</label>
                <input type="radio" id="business" name="accountType"
                 onChange={toggleAccount} />
                <label htmlFor="business">Business Account</label>
            {account ? 
            <form>
                <input type="text" placeholder="First Name" className="firstname"/>
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </form> :
            <form>
                <input type="text" placeholder="Business Name" classNname="businessname" />
                <input type="email" placeholder="Business Email" />
                <input type="password" placeholder="Password" />
            </form>}
        </main>
    )
}