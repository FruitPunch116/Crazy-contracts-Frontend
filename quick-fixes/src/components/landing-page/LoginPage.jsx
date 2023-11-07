import { useState } from "react"

function LoginPage ({ props }) {
    
    /* Code for email and password state */

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /* Code for email and password events */

    const handleChangeEmail = e => setEmail(e.target.value)
    const handleChangePassword = e => setPassword(e.target.value)

    /* Code to render */
    return (
        <div className="login-container">
            
            <form className="login-form" onSubmit={null}>

                <h3>Login</h3>

                <input className="email-login"
                type="text"
                onChange={handleChangeEmail}
                value={email}
                placeholder="Email address"
                />

                <input className="password-login"
                type="password"
                onChange={handleChangePassword}
                value={password}
                placeholder="Password"
                />

                <input className="login-button"
                type="submit"
                value="Login"
                />
                
            </form>

        </div>
    )
}

export default LoginPage