// import { useState } from "react"
import { useLoaderData } from "react-router-dom"

import ImageSlider from "./ImageSliders"
import LoginPage from "./LoginPage"
// import SignUp from "../sign-up/SignUp"

function Landing ({ props }) {

    /*const [showSignUpComponent, setShowSignUp] = useState(false)

    const handleSignUpClick = (e) => {
        
        setShowSignUp(!showSignUpComponent)
    }*/

    const {users} = useLoaderData()
    console.log(users)
    
    return (
        <div className="Landing-page">
            <div className="image-carousel">
                <ImageSlider />
            </div>
            <div className="login-side">
                <LoginPage />
                <div>
                    <p>{users[0].name}</p>
                {/* <p>Not registered? Try <a href="../sign-up/SignUp.jsx" onClick={handleSignUpClick}>Create an account</a></p> */}
                {/* {showSignUpComponent? <SignUp /> : null} */}
                </div>

                <div>
                <input type="submit" value="LogIn in guest mode" />
                </div>
            </div>
        </div>
    )
}

export default Landing