import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase"
import { actionTypes } from '../reducer'
import { useStateValue } from "../StateProvider"
import Signin from "./auth/button"

function Login() {

    // const [{}, dispatch] = useStateValue();


    // const signIn = () => {
    //     auth.signInWithPopup(provider) 
    //     .then(result => {
    //         dispatch({
    //             type: actionTypes.SET_USER, 
    //             user: result.user,
    //         })
    //     })
    //     .catch(error => {
    //         console.log(error.message)
    //     })
    // }

    return (
        <div className="login">
            <div className="login__container">
               <img
                    src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" 
                    alt=""
                    />
                
                <div className="login__text">
                    <h1>Sign in to whatsapp</h1>
                </div>
                
                <Signin />
            </div>
            
        </div>
    )
}

export default Login
 