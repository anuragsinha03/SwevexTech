import React from 'react'

function Login() {
    return (
        <div className="Login | grid place-content-center h-[100vh]">
            <div className="loginContainer ">
                <div className="login-username-input">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" />
                </div>
                <div className="login-password-input">
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" />
                </div>
            </div>
        </div>
    )
}

export default Login
