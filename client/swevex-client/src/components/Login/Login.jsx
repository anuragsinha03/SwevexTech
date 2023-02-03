import React from 'react'

function Login() {
    return (
        <div className="Login | flex justify-center items-center h-[100vh]">
            <div className="loginContainer | flex flex-col gap-4 bg-[#0894DE] max-w-[955px]">
                <div className="login-username-input flex flex-col ">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className='border-2 w-[662px] h-[50px]' />
                </div>
                <div className="login-password-input | flex flex-col ">
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" className='border-2 w-[662px] h-[50px]' />
                </div>
            </div>
        </div>
    )
}

export default Login
