import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { loginValidation } from '../../helper/Validation';

function Login() {


    const initialValue = {
        username: "",
        password: "",
    }


    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValue,
        validateOnBlur: false,
        validateOnChange: false,
        validate: loginValidation,
        onSubmit: (values) => {
            console.log(values);
        }
    })


    return (
        <div className="Login | flex justify-center items-center h-[100vh]">
            <form className="loginContainer | flex flex-col gap-4 bg-[#0894DE] w-[665px] justify-center items-center py-32" onSubmit={handleSubmit}>
                <h1 className='text-3xl text-center underline font-bold' >Admin Login</h1>
                <div className="login-username-input flex flex-col w-[50%]">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className='border-2' onChange={handleChange} values={values.username} />
                </div>
                <div className="login-password-input | flex flex-col w-[50%]">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="password" className='border-2 ' onChange={handleChange} value={values.password} />
                </div>
                <button type="submit" className='bg-[#0d5b85] w-[50%] py-4'> Login</button>
                <Link to="#">change Password?</Link>
            </form>
        </div>
    )
}

export default Login
