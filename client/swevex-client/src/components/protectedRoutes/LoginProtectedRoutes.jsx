import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleAuthVerification } from '../../api/endpointApi'

const isAuthorized = async (navigate) => {
    const changePasswordToken = localStorage.getItem("changePasswordToken");
    const response = await handleAuthVerification(changePasswordToken);
    if (response.response.data.success === false) {
        navigate("/admin-login")
    }
}


function ProtectedRoutes(props) {
    const { Component } = props
    const Navaigate = useNavigate()
    useEffect(() => {
        let changePasswordToken = localStorage.getItem("changePasswordToken")
        if (!changePasswordToken) {
            Navaigate("/admin-login")
        } else {
            isAuthorized(Navaigate)
        }
    })

    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedRoutes
