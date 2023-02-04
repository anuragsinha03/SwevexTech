import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleAuthVerification } from '../../api/endpointApi'

const isAuthorized = async (navigate) => {
    const authToken = localStorage.getItem("authToken");
    const response  = await handleAuthVerification(authToken);
    if(response.response.data.success === false){
       navigate("/admin-login")
    }
   
}


function ProtectedRoutes(props) {
    const {Component} = props
    const Navaigate = useNavigate()
    useEffect(() => {
        let authToken = localStorage.getItem("authToken")
        if(!authToken){
            Navaigate("/admin-login")
        }else{
            isAuthorized(Navaigate)
        }
    })
    
  return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoutes
